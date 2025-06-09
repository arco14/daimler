<style>
    .control-fechas {
        width: 50%;
        display: flex;
        gap: 1rem;
    }
</style>
<section class="content">
    <div class="container-fluid">
        <div class="block-header">
            <h2>
                Entregas
            </h2>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

            <div class="card">

                <div class="body">
                    <div class="row clearfix">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">


                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div class="info-box bg-cyan hover-expand-effect">
                                    <div class="icon">
                                        <i class="material-icons">playlist_add_check</i>
                                    </div>
                                    <div class="content">
                                        <div class="text">HEAD COUNT</div>
                                        <div class="number " data-from="0" data-speed="1000" data-fresh-interval="20"
                                            id='tituloHC'>5,112</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div class="info-box bg-light-green hover-expand-effect">
                                    <div class="icon">
                                        <i class="material-icons">accessibility</i>
                                    </div>
                                    <div class="content">
                                        <div class="text">ENTREGADOS (DIA)</div>
                                        <div class="number" id='tituloRegistradosDia'></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div class="info-box bg-orange hover-expand-effect">
                                    <div class="icon">
                                        <i class="material-icons">group</i>
                                    </div>
                                    <div class="content">
                                        <div class="text">ENTREGADOS (TOTAL) </div>
                                        <div class="number" id='tituloRegistrados'></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div class="info-box bg-pink hover-expand-effect">
                                    <div class="icon">
                                        <i class="material-icons">help</i>
                                    </div>
                                    <div class="content">
                                        <div class="text">AVANCE</div>
                                        <div class="number " data-from="0" data-speed="1000" data-fresh-interval="20"
                                            id='tituloPorcentaje'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs tab-nav-right" role="tablist">
                                <li id="tabResumen" class="active"><a href="#tab_1" data-toggle="tab">RESUMEN</a></li>
                                <li id="tabResumenEspecialidades"><a href="#tab_5" data-toggle="tab">TL, BGD y
                                        COMISION</a></li>
                                <li role="presentation" id="tabFaltantes"><a href="#tab_2"
                                        data-toggle="tab">FALTANTES</a></li>
                                <li role="presentation" id="tabResumenFactura"><a href="#tab_6"
                                        data-toggle="tab">RESUMEN_FACTURA</a></li>
                                <li role="presentation" id="tabRegistrados"><a href="#tab_3"
                                        data-toggle="tab">REGISTRADOS</a></li>
                                <li role="presentation" id="tabInventarios"><a href="#tab_4"
                                        data-toggle="tab">INVENTARIOS</a></li>
                                <li role="presentation" id="tabEntregadosCanTallas"><a href="#tab_7" data-toggle="tab"
                                        class="text-uppercase">Entregados cantidad por tallas</a></li>


                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane fade in" id="tab_4">
                                    <table class="table table-bordered text-center" id="tablaInventarios" width="100%">
                                        <thead>
                                            <tr>
                                                <th style="width:78px">Acciones</th>
                                                <th>Prenda</th>
                                                <th>Talla</th>
                                                <th>Existencia</th>

                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th style="width:78px">Acciones</th>
                                                <th>Prenda</th>
                                                <th>Talla</th>
                                                <th>Existencia</th>
                                            </tr>
                                        </tfoot>
                                    </table>

                                </div>
                                <div role="tabpanel" class="tab-pane fade in" id="tab_6">
                                    <table class="table table-bordered text-center" id="tablaResumenFactura"
                                        width="100%">
                                        <thead>
                                            <tr>
                                                <th>Entrega</th>
                                                <th>Prenda</th>
                                                <th>Cantidad</th>
                                                <th>Precio</th>
                                                <th>Importe</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Entrega</th>
                                                <th>Prenda</th>
                                                <th>Cantidad</th>
                                                <th>Precio</th>
                                                <th>Importe</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div role="tabpanel" class="tab-pane fade in" id="tab_3">
                                    <table class="table table-bordered text-center" id="tablaRegistrados" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Fecha</th>
                                                <th>Folio</th>
                                                <th>Numero Empleado</th>
                                                <th>Nombre</th>
                                                <th>Area</th>
                                                <th>CANTIDAD_TOTAL</th>

                                                <th>Comentario</th>
                                                <th>Camisa</th>
                                                <th>Pantalon Mezc</th>
                                                <th>Pantalon Gab</th>
                                                <th>Playera</th>
                                                <th>Camisa Brigada</th>
                                                <th>Pantalon Brigada</th>
                                                <th>Sudadera</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Fecha</th>
                                                <th>Folio</th>
                                                <th>Numero Empleado</th>
                                                <th>Nombre</th>
                                                <th>Area</th>
                                                <th>Puesto</th>
                                                <th>Comentario</th>
                                                <th>Camisa</th>
                                                <th>Pantalon Mezc</th>
                                                <th>Pantalon Gab</th>
                                                <th>Playera</th>
                                                <th>Camisa Brigada</th>
                                                <th>Pantalon Brigada</th>
                                                <th>Sudadera</th>
                                                <th>Total</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div role="tabpanel" class="tab-pane fade in" id="tab_2">
                                    <table class="table table-bordered text-center" id="tablaFaltantes" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Numero Empleado</th>
                                                <th>Nombre</th>
                                                <th>Area</th>
                                                <th>Puesto</th>
                                                <th>Turno</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Numero Empleado</th>
                                                <th>Nombre</th>
                                                <th>Area</th>
                                                <th>Puesto</th>
                                                <th>Turno</th>
                                            </tr>
                                        </tfoot>
                                    </table>

                                </div>
                                <div role="tabpanel" class="tab-pane fade in active" id="tab_1">
                                    <table class="table table-bordered text-center" id="tablaResumen" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Numero Entrega</th>
                                                <th>Area</th>
                                                <th>HC</th>
                                                <th>Registrados</th>
                                                <th>Faltantes</th>
                                                <th>Porcentaje</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Numero Entrega</th>
                                                <th>Area</th>
                                                <th>HC</th>
                                                <th>Registrados</th>
                                                <th>Faltantes</th>
                                                <th>Porcentaje</th>
                                            </tr>
                                        </tfoot>
                                    </table>


                                </div>
                                <div role="tabpanel" class="tab-pane fade in" id="tab_5">
                                    <table class="table table-bordered text-center" id="tablaResumenEspecialidades"
                                        width="100%">
                                        <thead>
                                            <tr>
                                                <th>Numero Entrega</th>
                                                <th>Area</th>
                                                <th>Puesto</th>
                                                <th>HC</th>
                                                <th>Registrados</th>
                                                <th>Faltantes</th>
                                                <th>Porcentaje</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Numero Entrega</th>
                                                <th>Area</th>
                                                <th>Puesto</th>
                                                <th>HC</th>
                                                <th>Registrados</th>
                                                <th>Faltantes</th>
                                                <th>Porcentaje</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div role="tabpanel" class="tab-pane fade in" id="tab_7">
                                    <div class="control-fechas">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <label for="fecha">Fecha Inicial</label>
                                                <input type="date" class="form-control p-0" name="fecha"
                                                    id="fechaInicial" placeholder="Fecha" required>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-line">
                                                <label for="fecha">Fecha Final</label>
                                                <input type="date" class="form-control p-0" name="fecha" id="fechaFinal"
                                                    placeholder="Fecha" required>
                                            </div>
                                        </div>
                                        <!-- <div class="form-group">
                                            <div class="form-line" id="numEntrega" style="padding-top: 2.5rem;">
                                                <select class="form-control show-tick" required id="selectNumEntrega"
                                                    name="selectNumEntrega">
                                                </select>
                                            </div>
                                        </div> -->
                                    </div>
                                    <button id="btnConsultar" class="btn btn-success py-0"
                                        style="margin-bottom: 2rem;">Consultar</button>
                                    <table class="table table-bordered text-center" id="tabEntregadosCanTall"
                                        width="100%">
                                        <thead>
                                            <tr>
                                                <th>PRENDAS</th>
                                                <th>TALLAS</th>
                                                <th>CANTIDAD</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>PRENDAS</th>
                                                <th>TALLAS</th>
                                                <th style="text-align: right;">CANTIDAD</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="modal fade" id="modalAjusteInventario" tabindex="-1" role="dialog">
    <div class="demo-masked-input">
        <div class="modal-dialog" role="document">

            <div class="modal-content">
                <div class="modal-header ">
                    <h4 class="modal-title text-center" id="defaultModalLabel">Ajuste Inventario</h4>
                </div>
                <div class="modal-body">

                    <div class="row clearfix pull-right">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">

                        </div>
                    </div>
                    <input type="hidden" name="idPrenda" id="idPrenda">
                    <input type="hidden" name="idTalla" id="idTalla">
                    <div class="form-group">
                        <div class="demo-switch">

                            <div class="switch">
                                <label>SALIDA<input type="checkbox" entrada="1" checked="" id="tipoAjuste"><span
                                        class="lever"></span>ENTRADA</label>
                            </div>


                        </div>
                    </div>

                    <b>Cantidad</b>
                    <div class="input-group spinner" data-trigger="spinner">
                        <div class="form-line focused">
                            <input type="text" class="form-control text-center" data-rule="quantity" data-max="50"
                                name="cantidadAjuste" id="cantidadAjuste">
                        </div>
                        <span class="input-group-addon">
                            <a href="javascript:;" class="spin-up" data-spin="up"><i
                                    class="glyphicon glyphicon-chevron-up"></i></a>
                            <a href="javascript:;" class="spin-down" data-spin="down"><i
                                    class="glyphicon glyphicon-chevron-down"></i></a>
                        </span>
                    </div>

                    <b>Comentarios</b>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">assignment</i>
                        </span>
                        <div class="form-line">
                            <input type="text" class="form-control" name="comentariosAjuste" id="comentariosAjuste">


                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-link waves-effect" id="guardarAjuste">GUARDAR</button>
                    <button type="button" class="btn btn-link waves-effect pull-left" id="cerrarModalAjuste"
                        data-dismiss="modal">CERRAR</button>
                </div>
            </div>

        </div>
    </div>
</div>
</div>
</div>