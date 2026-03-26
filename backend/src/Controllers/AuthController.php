<?php

require_once __DIR__ . '/../Services/UserService.php';
require_once __DIR__ . '/../Utils/JwtHelper.php';
require_once __DIR__ . '/../Utils/Response.php';

class AuthController
{
    public function register(): void
    {

        header('Content-Type: application/json');

        try {
            $data = json_decode(file_get_contents("php://input"), true);

            $service = new UserService();
            $userId = $service->create($data);

            Response::json([
                "message" => "Usuário cadastrado com sucesso",
                "user_id" => $userId
            ], 201);
        } catch (Exception $e) {
            http_response_code(400);

            Response::json([
                "error" => $e->getMessage()
            ], 400);
        }
    }

    public function login(): void
    {

        header('Content-Type: application/json');

        try {
            $data = json_decode(file_get_contents("php://input"), true);

            $service = new UserService();
            $user = $service->login($data);

            $token = JwtHelper::generate($user);

            Response::json([
                "message" => "Login realizado com sucesso",
                "token" => $token
            ], 200);
        } catch (Exception $e) {
            http_response_code(401);

            Response::json([
                "error" => $e->getMessage()
            ], 401);
        }
    }
}
