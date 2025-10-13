<?php 
    include_once './view/scripts/globals.php';
?>

<body class="hold-transition sidebar-mini layout-fixed" data-panel-auto-height-mode="height">
    <div class="wrapper">
        <?php 
            // NAVBAR TOP
            // include_once './view/includes/navbar-top.php';
            // NAVBAR LEFT
            include_once './view/includes/navbar-left.php';
            // CONTENIDO MODULOS
            include_once './view/includes/contenido-modulos.php';
            // MODAL PARA ACTUALIZAR CONTRASEÑA
            include './view/includes/update-password.php';
        ?>
    </div>
    <?php include_once './view/includes/footer.php'; ?>
    <script src="./view/components/loadAPI.js"></script>
    <script src="./view/components/textBox.js"></script>
    <script src="./view/components/button.js"></script>
    <script src="./view/assets/js/modal-update.js"></script>