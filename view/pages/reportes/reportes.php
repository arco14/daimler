<?php   
   include_once '../../includes/head-pages.php'
?>
<section class="content">
    <div class="container-fluid p-5">
        <div class="row">
            <div class="col-lg-3 col-6">
                <div class="small-box shadow-lg bg-info">
                    <div class="inner">
                        <h3 id="headCount"></h3>
                        <p>Head Count</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-user-group"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <div class="small-box shadow-lg bg-success">
                    <div class="inner">
                        <h3 id="entregadosDía">35</h3>
                        <p id="fechaEntregadosDía"></p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-list-check"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <div class="small-box shadow-lg bg-warning">
                    <div class="inner">
                        <h3 id="entregaTotal"></h3>
                        <p>Entregas Totales</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-check-double"></i>
                    </div>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box shadow-lg bg-danger">
                    <div class="inner">
                        <h3 id="avanceTotal">75<sup style="font-size: 20px">%</sup></h3>
                        <p>Avance Entrega</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-signal"></i>
                    </div>
                </div>
            </div>
        </div>
        <nav class="nav nav-pills nav-justified d-flex flex-nowrap p-5" style="overflow-x: scroll">
            <a id="item-detalle" class="d-flex align-items-center justify-content-center nav-link active"
                data-toggle="pill" role="tab" href="#v-pills-detalle">
                <i class="h4 fas fa-user-check mr-2" style="color: #0385F2"></i>
                <p class="menuTabMovil mb-0">Entregados</p>
            </a>
            <a id="item-resumenFactura" class="d-flex align-items-center justify-content-center nav-link"
                data-toggle="pill" role="tab" href="#v-pills-resumenFactura">
                <i class="h4 fas fa-money-check mr-2" style="color: #0385F2"></i>
                <p class="menuTabMovil mb-0">Resumen Factura</p>
            </a>
            <a id="item-faltantes" class="d-flex align-items-center justify-content-center nav-link" data-toggle="pill"
                role="tab" href="#v-pills-faltantes">
                <i class="h4 fas fa-user-xmark mr-2" style="color: #0385F2"></i>
                <p class="menuTabMovil mb-0">Faltantes</p>
            </a>
            <a id="item-entregadosCantidadTalla" class="d-flex align-items-center justify-content-center nav-link"
                data-toggle="pill" role="tab" href="#v-pills-entregadosCantidadTalla">
                <i class="h4 fas fa-shirt mr-2" style="color: #0385F2"></i>
                <p class="menuTabMovil mb-0">Entregados Cantidad Talla</p>
            </a>
        </nav>
        <div class="tab-content">
        </div>
    </div>
</section>
<script src='../../components/loadAPI.js'></script>
<script src="./arrayData.js"></script>
<script src="./reportes.js"></script>