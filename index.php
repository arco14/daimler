<?php 
    error_reporting(E_ALL ^ E_NOTICE);
    require_once './controller/template.controller.php';
    require_once './view/includes/post.php';
    session_start();
    if (!isset($_SESSION['userActive'])) {
        require_once './view/includes/login.php';
        exit();
    } else {
        $template = new ControllerTemplate();
        $template->ctrTemplate();
    }