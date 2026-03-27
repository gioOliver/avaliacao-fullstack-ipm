<?php

require_once __DIR__ . '/../Middleware/AuthMiddleware.php';
require_once __DIR__ . '/../Services/TaskService.php';

class TaskController
{
    private $user;

    public function __construct()
    {
        $this->user = AuthMiddleware::handle();
    }

    public function create(): void
    {
        try {
            $data = json_decode(file_get_contents("php://input"), true);

            $data['user_id'] = $this->user->id;

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

    public function index(): void
    {
        try {
            $service = new TaskService();
            $tasks = $service->getByUser($this->user->id);

            Response::json([
                "tasks" => $tasks
            ]);

        } catch (Exception $e) {
            Response::json([
                "error" => $e->getMessage()
            ], 400);
        }
    }
}