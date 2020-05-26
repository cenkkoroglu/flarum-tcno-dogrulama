<?php


namespace CenkKoroglu\TCNoDogrulama\Controllers;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\UserRepository;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ResponseInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Illuminate\Support\Arr;

class AccountVerificationAdminController implements RequestHandlerInterface
{
    use AssertPermissionTrait;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var UserRepository
     */
    protected $users;

    public function __construct(SettingsRepositoryInterface $settings, UserRepository $users)
    {
        $this->settings = $settings;
        $this->users = $users;
    }

    public function handle(ServerRequestInterface $request) : ResponseInterface
    {
        $actor = $request->getAttribute('actor');

        if ($actor !== null && $actor->isAdmin()) {
            $data = Arr::get($request->getParsedBody(), 'data', []);

            $user = $this->users->findOrFail($data['user_id']);
            $user->identity_approved = 0;
            $user->identity_number = null;
            $user->save();
        }

        return new JsonResponse(null, 200);
    }

}
