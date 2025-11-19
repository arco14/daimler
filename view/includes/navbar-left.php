<?php
    session_start();
    $userActive   = $_SESSION['userActive'];
    $userToken    = $_SESSION['token'];
    $area         = $_SESSION['area'];
    $nombre       = $_SESSION['nombre'];
    $puesto       = $_SESSION['puesto'];
    $userCorreo   = $_SESSION['userCorreo'];
    $userImg      = $_SESSION['userImg'];
?>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <div class="brand-link">
        <h3 class="pt-1 text-center text-uppercase">
            <span class="brand-text font-weight-light" style="color: #0960AE;">Laz</span>lotex
        </h3>
    </div>
    <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
            <div class="image">
                <img src="<?php 
                    if(isset($_SESSION['userImg']) && !empty($_SESSION['userImg'])) {
                        echo './view/assets/img/usuarios/' . $_SESSION['userImg'];
                    } else {
                        echo './view/assets/img/usuarios/default.jpg';
                    }
                ?>" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <div class="dropdown">
                    <button onclick="this.blur()" class="btn dropdown-toggle d-flex align-items-center p-0 py-1"
                        type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <p id="userNameActive" class="m-0 mx-2" style="color: #ffffffcc">
                            <?php echo $nombre?>
                        </p>
                        <input type="hidden" id="userActive" value="<?php echo $userActive ?>">
                        <input type="hidden" id="userToken" value="<?php echo $userToken ?>">
                        <input type="hidden" id="userArea" value="<?php echo $area ?>">
                        <input type="hidden" id="userPuesto" value="<?php echo $puesto ?>">
                        <input type="hidden" id="userCorreo" value="<?php echo $userCorreo ?>">
                        <input type="hidden" id="userNew" value="<?php echo $userNew ?>">
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a id="btnCerrarSesion" class="dropdown-item d-flex align-items-center text-white"
                            style="cursor: pointer;">
                            <i class="fa-solid fa-door-closed"></i>
                            <p class="m-0 mx-2">Cerrar Sesion</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
                <input class="form-control form-control-sidebar" type="search" placeholder="Buscar Modulo"
                    aria-label="Search">
                <div class="input-group-append">
                    <button class="btn btn-sidebar">
                        <i class="fas fa-search fa-fw"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- <div class="w-100 mt-3 d-flex justify-content-end">
            <button class="btn btn-sm" id="btnActualizarAccesos" style="background-color: #0960AE"
                title="Actualizar Accesos">
                <i class="fas fa-arrows-spin text-white"></i>
            </button>
        </div> -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false"
                id="menuItems">
                <!-- Modulos cargados desde la API, solo a los que tenga acceso el usuario activo -->
            </ul>
        </nav>
    </div>
</aside>

<script src="./view/components/loadAPI.js"></script>
<script src="./view/assets/js/destroy-session.js"></script>
<script src="./view/assets/js/load-menu.js"></script>