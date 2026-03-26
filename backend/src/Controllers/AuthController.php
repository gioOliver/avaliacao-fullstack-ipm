<?php

require_once __DIR__ . '/../Services/UserService.php';

class AuthController
{
    public function register(): void
    {
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
}
