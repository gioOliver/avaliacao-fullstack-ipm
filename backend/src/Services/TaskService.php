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

    public function getByUser($userId): array
    {
        return $this->taskModel->getByUser($userId);
    }

    /**
     * @throws Exception
     */
    public function update($id, $userId, $data): true
    {
        if (empty($data['title'])) {
            throw new Exception("Título é obrigatório");
        }

        if (empty($data['due_date'])) {
            throw new Exception("Data de vencimento é obrigatória");
        }

        $date = DateTime::createFromFormat('Y-m-d', $data['due_date']);
        if (!$date || $date->format('Y-m-d') !== $data['due_date']) {
            throw new Exception("Data inválida (use Y-m-d)");
        }

        $allowedStatus = ['em aberto', 'concluido'];
        if (!in_array($data['status'], $allowedStatus)) {
            throw new Exception("Status inválido");
        }

        $data['description'] = $data['description'] ?? null;

        $updated = $this->taskModel->update($id, $userId, $data);

        if ($updated === 0) {
            throw new Exception("Tarefa não encontrada ou não pertence ao usuário");
        }

        return true;
    }

    public function delete($id, $userId): true
    {
        if (!$id) {
            throw new Exception("ID da tarefa é obrigatório");
        }

        $deleted = $this->taskModel->delete($id, $userId);

        if ($deleted === 0) {
            throw new Exception("Tarefa não encontrada, já removida ou sem permissão");
        }

        return true;
    }
}