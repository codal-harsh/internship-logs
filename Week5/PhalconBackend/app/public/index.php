<?php

use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\Application;
use Phalcon\Mvc\Micro;

require __DIR__ . '/../vendor/autoload.php';

$di = new FactoryDefault();

$app = new Micro($di);

$app->get('/', function () {
    return "Hello World";
});

$app->handle($_SERVER["REQUEST_URI"]);
