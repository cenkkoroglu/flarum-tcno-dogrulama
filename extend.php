<?php

/*
 * This file is part of cenkkoroglu/tcno-dogrulama.
 *
 * Copyright (c) 2020 Cenk Koroglu.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace CenkKoroglu\TCNoDogrulama;

use CenkKoroglu\TCNoDogrulama\Controllers\AccountVerificationController;
use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
    (new Extend\Routes('api'))
        ->post('/account-verification', 'account-verification.index', AccountVerificationController::class),
    function (Dispatcher $events) {
        $events->subscribe(Listeners\UserListener::class);
    }
];
