<aside id="leftsidebar" class="sidebar">
    <!-- User Info -->
    <div class="user-info">
        <div class="image">
            <img src="vistas/img/user.jpg" width="48" height="48" alt="User" />
        </div>
        <div class="info-container">
            <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="nombreUsuario">
                <?php  if(isset($_SESSION["usuario"])) echo $_SESSION["usuario"]    ?></div>
            <div class="btn-group user-helper-dropdown">
                <i class="material-icons" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="true">keyboard_arrow_down</i>
                <ul class="dropdown-menu pull-right">
                    <li><a href="javascript:void(0);"><i class="material-icons">person</i>Profile</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="javascript:void(0);"><i class="material-icons">group</i>Followers</a></li>
                    <li><a href="javascript:void(0);"><i class="material-icons">shopping_cart</i>Sales</a></li>
                    <li><a href="javascript:void(0);"><i class="material-icons">favorite</i>Likes</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="javascript:void(0);"><i class="material-icons">input</i>Sign Out</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- #User Info -->
    <!-- Menu -->
    <div class="menu">
        <ul class="list">
            <li class="header">NAVEGACION</li>
            <li>
                <a href="index.php?ruta=empleados">
                    <i class="material-icons">group</i>
                    <span>Empleados</span>
                </a>
            </li>
            <!--<li>
                        <a href="index.php?ruta=inventarios">
                            <i class="material-icons">assignment_turned_in</i>
                            <span>Inventario</span>
                        </a>
                    </li>
                    <li>
                        <a href="index.php?ruta=entregas">
                            <i class="material-icons">event</i>
                            <span>Entregas</span>
                        </a>
                    </li>-->
            <li>
                <a href="index.php?ruta=reporteTomaTallas">
                    <i class="material-icons">insert_chart</i>
                    <span>Reportes</span>
                </a>
            </li>
            <li>
                <a href="index.php?ruta=Embarques">
                    <i class="material-icons">view_cozy</i>
                    <span>Embarques</span>
                </a>
            </li>
            </li>
        </ul>
    </div>
    <!-- #Menu -->

</aside>
<!-- #END# Left Sidebar -->