<?php

require_once __DIR__ . '/../Middleware/AuthMiddleware.php';
require_once __DIR__ . '/../Services/TaskService.php';

class TaskController
{
    public function create(): void
    {
        try {
            $user = AuthMiddleware::handle();

            $data = json_decode(file_get_contents("php://input"), true);

            $data['user_id'] = $user->id;

            $service = new TaskService();
            $taskId = $service->create($data);

            http_response_code(201);

            Response::json([
                "message" => "Tarefa criada com sucesso",
                "task_id" => $taskId
            ], 201);
        } catch (Exception $e) {
            http_response_code(400);

            Response::json([
                "error" => $e->getMessage()
            ], 400);
        }
    }
}