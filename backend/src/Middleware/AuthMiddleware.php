<?php

use JetBrains\PhpStorm\NoReturn;

require_once __DIR__ . '/../Utils/JwtHelper.php';

class AuthMiddleware
{
    public static function handle()
    {
        $headers = getallheaders();

        if (!isset($headers['Authorization'])) {
            self::unauthorized("Token não informado");
        }

        $authHeader = $headers['Authorization'];

        if (!str_starts_with($authHeader, 'Bearer ')) {
            self::unauthorized("Token inválido");
        }

        $token = str_replace('Bearer ', '', $authHeader);

        try {
            $decoded = JwtHelper::validate($token);

            return $decoded->data;

        } catch (Exception $e) {
            self::unauthorized("Token inválido ou expirado");
        }
    }

    private static function unauthorized($message): void
    {
        require_once __DIR__ . '/../Utils/Response.php';

        Response::json([
            "error" => $message
        ], 401);
    }
}