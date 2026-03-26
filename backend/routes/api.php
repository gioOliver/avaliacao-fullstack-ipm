<?php

require_once __DIR__ . '/../src/Controllers/AuthController.php';
require_once __DIR__ . '/../src/Controllers/TaskController.php';

/** @var Router $router */

$router->add('GET', '/', function () {
    echo PHP_VERSION;
});

$router->add('POST', '/register', function () {
    (new AuthController())->register();
});

$router->add('POST', '/login', function () {
    (new AuthController())->login();
});

$router->add('POST', '/tasks', function () {
    (new TaskController())->create();
});