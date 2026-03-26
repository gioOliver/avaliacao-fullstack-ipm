<?php

require_once __DIR__ . '/../Services/UserService.php';
require_once __DIR__ . '/../Utils/JwtHelper.php';

class AuthController
{
    public function register(): void
    {

        header('Content-Type: application/json');

        try {
            $data = json_decode(file_get_contents("php://input"), true);

            $service = new UserService();
            $userId = $service->create($data);

            echo json_encode([
                "message" => "Usuário cadastrado com sucesso",
                "user_id" => $userId
            ]);
        } catch (Exception $e) {
            http_response_code(400);

            echo json_encode([
                "error" => $e->getMessage()
            ]);
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

            echo json_encode([
                "message" => "Login realizado com sucesso",
                "token" => $token
            ]);
        } catch (Exception $e) {
            http_response_code(401);

            echo json_encode([
                "error" => $e->getMessage()
            ]);
        }
    }
}
