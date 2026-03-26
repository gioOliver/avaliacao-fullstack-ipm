<?php

require_once __DIR__ . '/../Middleware/AuthMiddleware.php';
require_once __DIR__ . '/../Services/TaskService.php';

class TaskController
{
    public function create(): void
    {
        header('Content-Type: application/json');

        try {
            $user = AuthMiddleware::handle();

            $data = json_decode(file_get_contents("php://input"), true);

            $data['user_id'] = $user->id;

            $service = new TaskService();
            $taskId = $service->create($data);

            http_response_code(201);

            echo json_encode([
                "message" => "Tarefa criada com sucesso",
                "task_id" => $taskId
            ]);
        } catch (Exception $e) {
            http_response_code(400);

            echo json_encode([
                "error" => $e->getMessage()
            ]);
        }
    }
}