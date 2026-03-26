<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JwtHelper
{
    private static ?string $secret = null;

    private static function getSecret(): false|array|string
    {
        if (!self::$secret) {
            self::$secret = getenv('JWT_SECRET');
        }

        return self::$secret;
    }

    public static function generate($user): string
    {
        $payload = [
            "iss" => "todo-app",
            "iat" => time(),
            "exp" => time() + 3600,
            "data" => [
                "id" => $user['id'],
                "email" => $user['email']
            ]
        ];

        return JWT::encode($payload, self::getSecret(), 'HS256');
    }

    public static function validate($token): stdClass
    {
        return JWT::decode($token, new Key(self::getSecret(), 'HS256'));
    }
}