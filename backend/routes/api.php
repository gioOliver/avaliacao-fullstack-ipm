<?php

require_once __DIR__ . '/../src/Controllers/AuthController.php';

/** @var Router $router */

$router->add('GET', '/', function () {
    echo PHP_VERSION . ' -- ' .getenv('JWT_SECRET');
});

$router->add('POST', '/register', function () {
    (new AuthController())->register();
});

$router->add('POST', '/login', function () {
    (new AuthController())->login();
});