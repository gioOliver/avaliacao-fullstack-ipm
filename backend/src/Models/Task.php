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
}