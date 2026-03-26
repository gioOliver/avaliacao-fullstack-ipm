<?php
require_once __DIR__ . '/../Database/Connection.php';

class User
{
    private ?PDO $connection;

    public function __construct()
    {
        $this->connection = Connection::getConnection();
    }

    public function findByEmail($email): array|false
    {
        $stmt = $this->connection->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);

        return $stmt->fetch();
    }

    public function create($data): false|string
    {
        $hashedPassword = password_hash($data['password'], PASSWORD_DEFAULT);

        $stmt = $this->connection->prepare(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
        );

        $stmt->execute([
            $data['name'],
            $data['email'],
            $hashedPassword
        ]);

        return $this->connection->lastInsertId();
    }
}