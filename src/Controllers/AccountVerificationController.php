<?php

namespace CenkKoroglu\TCNoDogrulama\Controllers;

use Flarum\User\UserRepository;
use Laminas\Diactoros\Response\HtmlResponse;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;

class AccountVerificationController implements RequestHandlerInterface
{
    private static $validationfields = ["tcno", "isim", "soyisim", "dogumyili"];

    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    public function handle(Request $request): Response
    {
        $data = $request->getParsedBody()["data"];
        $data = array(
            'tcno' => $data["identityNumber"],
            'isim' => $data["name"],
            'soyisim' => $data["surname"],
            'dogumyili' => $data["birthYear"],
        );

        $check = $this->validate($data);

        if ($check) {
            $actor = $request->getAttribute('actor');
            $user = $this->users->findOrFail($actor->getAttributes()["id"], $actor);
            $user->identity_approved = 1;
            $user->save();
        }

        return new HtmlResponse($check ? "true" : "false", 200);
    }

    private static function verify($input)
    {
        $tcno = $input;
        if (is_array($input) && !empty($input['tcno'])) $tcno = $input['tcno'];

        if (!preg_match('/^[1-9]{1}[0-9]{9}[0,2,4,6,8]{1}$/', $tcno)) {
            return false;
        }

        $odd = $tcno[0] + $tcno[2] + $tcno[4] + $tcno[6] + $tcno[8];
        $even = $tcno[1] + $tcno[3] + $tcno[5] + $tcno[7];
        $digit10 = ($odd * 7 - $even) % 10;
        $total = ($odd + $even + $tcno[9]) % 10;

        if ($digit10 != $tcno[9] || $total != $tcno[10]) {
            return false;
        }

        return true;
    }

    private static function validate(array $data, $auto_uppercase = TRUE)
    {

        if (!self::verify($data)) return false;

        if (count(array_diff(self::$validationfields, array_keys($data))) != 0) {
            return false;
        }

        if ($auto_uppercase) {
            foreach (self::$validationfields as $field) {
                $data[$field] = self::tr_uppercase($data[$field]);
            }
        }

        $post_data = '<?xml version="1.0" encoding="utf-8"?>
		<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
			<soap:Body>
				<TCKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS">
					<TCKimlikNo>' . $data['tcno'] . '</TCKimlikNo>
					<Ad>' . $data['isim'] . '</Ad>
					<Soyad>' . $data['soyisim'] . '</Soyad>
					<DogumYili>' . $data['dogumyili'] . '</DogumYili>
				</TCKimlikNoDogrula>
			</soap:Body>
		</soap:Envelope>';

        $ch = curl_init();

        // CURL options
        $options = array(
            CURLOPT_URL => 'https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx',
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $post_data,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_HEADER => false,
            CURLOPT_HTTPHEADER => array(
                'POST /Service/KPSPublic.asmx HTTP/1.1',
                'Host: tckimlik.nvi.gov.tr',
                'Content-Type: text/xml; charset=utf-8',
                'SOAPAction: "http://tckimlik.nvi.gov.tr/WS/TCKimlikNoDogrula"',
                'Content-Length: ' . strlen($post_data)
            ),
        );
        curl_setopt_array($ch, $options);

        $response = curl_exec($ch);
        curl_close($ch);

        return strip_tags($response) === 'true';
    }

    private static function tr_uppercase($string)
    {
        $string = str_replace(array('i'), array('İ'), $string);
        return mb_convert_case($string, MB_CASE_UPPER, "UTF-8");
    }
}

