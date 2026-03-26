<?php

require_once __DIR__ . '/../src/Controllers/AuthController.php';

/** @var Router $router */

$router->add('GET', '/', function () {
    echo PHP_VERSION;
});

$router->add('POST', '/register', function () {
    (new AuthController())->register();
});