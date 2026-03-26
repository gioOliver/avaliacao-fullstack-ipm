<?php

require_once __DIR__ . '/../Models/Task.php';

class TaskService
{
    private Task $taskModel;

    public function __construct()
    {
        $this->taskModel = new Task();
    }

    /**
     * @throws Exception
     */
    public function create(array $data): false|string
    {
        if (empty($data['title'])) {
            throw new Exception("Título é obrigatório");
        }

        if (empty($data['due_date'])) {
            throw new Exception("Data de vencimento é obrigatória");
        }

        $date = DateTime::createFromFormat('Y-m-d', $data['due_date']);
        if (!$date || $date->format('Y-m-d') !== $data['due_date']) {
            throw new Exception("Data de vencimento inválida (use Y-m-d)");
        }

        $data['description'] = $data['description'] ?? null;

        return $this->taskModel->create($data);
    }
}