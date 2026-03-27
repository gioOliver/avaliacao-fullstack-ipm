<?php

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../src/Core/Router.php';
$router = new Router();
require_once __DIR__ . '/../routes/api.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

$router->dispatch($uri, $method);