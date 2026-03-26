<?php

class Router
{
    private array $routes = [];

    public function add($method, $path, $handler): void
    {
        $this->routes[] = [
            'method' => $method,
            'path' => $path,
            'handler' => $handler
        ];
    }

    public function dispatch($uri, $method): void
    {
        foreach ($this->routes as $route) {
            if ($route['path'] === $uri && $route['method'] === $method) {
                call_user_func($route['handler']);
                return;
            }
        }

        http_response_code(404);
        echo json_encode(["error" => "Rota não encontrada"]);
    }
}