<?php
require_once __DIR__ . '/../Database/Connection.php';

class Task
{
    private ?PDO $connection;

    public function __construct()
    {
        $this->connection = Connection::getConnection();
    }

    public function create($data): false|string
    {
        $stmt = $this->connection->prepare("
            INSERT INTO tasks (user_id, title, description, due_date)
            VALUES (?, ?, ?, ?)
        ");

        $stmt->execute([
            $data['user_id'],
            $data['title'],
            $data['description'],
            $data['due_date']
        ]);

        return $this->connection->lastInsertId();
    }

    public function getByUser($userId): array
    {
        $stmt = $this->connection->prepare("
        SELECT id, title, description, status, due_date, created_at
        FROM tasks
        WHERE user_id = ?
        AND deleted_at IS NULL
        ORDER BY created_at DESC ");

        $stmt->execute([$userId]);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function update($id, $userId, $data): int
    {
        $stmt = $this->connection->prepare("
        UPDATE tasks
        SET title = ?, description = ?, status = ?, due_date = ?
        WHERE id = ? 
        AND user_id = ?
        AND deleted_at IS NULL
    ");

        $stmt->execute([
            $data['title'],
            $data['description'],
            $data['status'],
            $data['due_date'],
            $id,
            $userId
        ]);

        return $stmt->rowCount();
    }
}