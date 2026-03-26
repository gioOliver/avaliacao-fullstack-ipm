<?php

require_once __DIR__ . '/../Models/User.php';

class UserService
{
    private User $userModel;

    public function __construct()
    {
        $this->userModel = new User();
    }

    /**
     * @throws Exception
     */
    public function create($data): false|string
    {

        if (empty($data['name'])) {
            throw new Exception("Nome é obrigatório");
        }

        $email = strtolower(trim($data['email']));
        $data['email'] = $email;

        if (empty($data['email'])) {
            throw new Exception("Email é obrigatório");
        }

        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            throw new Exception("Formato de email inválido");
        }

        $userExists = $this->userModel->findByEmail($email);

        if ($userExists) {
            throw new Exception("Email já cadastrado");
        }

        if (empty($data['password'])) {
            throw new Exception("Senha é obrigatória");
        }

        return $this->userModel->create($data);
    }

    /**
     * @throws Exception
     */
    public function login($data): array
    {
        if (empty($data['email']) || empty($data['password'])) {
            throw new Exception("Email e senha são obrigatórios");
        }

        $email = strtolower(trim($data['email']));

        $user = $this->userModel->findByEmail($email);

        if (!$user) {
            throw new Exception("Credenciais inválidas");
        }

        if (!password_verify($data['password'], $user['password'])) {
            throw new Exception("Credenciais inválidas");
        }

        return $user;
    }
}