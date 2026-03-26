<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JwtHelper
{
    private static string $secret = "7c64effa-3dd6-472c-899e-b967995bd502";

    public static function generate($user): string
    {
        $payload = [
            "iss" => "seu-app",
            "iat" => time(),
            "exp" => time() + 3600,
            "data" => [
                "id" => $user['id'],
                "email" => $user['email']
            ]
        ];

        return JWT::encode($payload, self::$secret, 'HS256');
    }

    public static function validate($token): stdClass
    {
        return JWT::decode($token, new Key(self::$secret, 'HS256'));
    }
}