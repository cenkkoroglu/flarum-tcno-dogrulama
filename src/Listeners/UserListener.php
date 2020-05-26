<?php

namespace CenkKoroglu\TCNoDogrulama\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\UserSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class UserListener
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'serializing']);
    }

    public function serializing(Serializing $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            $event->attributes['identity_approved'] = $event->model->identity_approved;
            $event->attributes['identity_number'] = $event->model->identity_number;
        }
    }
}
