<section class="content" style="padding: 0 2rem;">
    <div class="container-fluid">
        <div class="block-header">
            <h2>
                Embarques
            </h2>
        </div>
        <div class="row">
            <div class="col-12 d-flex" style="margin-bottom: 2rem;">
                <button id="add" class="btn btn-sm btn-success" data-toggle="modal" data-target="#modalEmbarque">
                    <i class="material-icons">add</i>
                </button>
                <button id="add" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modalEntregaManual"
                    style="padding: .8rem 1rem;" title="Entrega Manual">
                    Entrega Manual
                </button>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="header">
                    </div>
                    <div class="body">
                        <div class="row clearfix">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <table class="table table-bordered text-center" id="tablaEmbarques" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Usuario</th>
                                            <th>Fecha</th>
                                            <th>Comentarios</th>
                                            <th style="width:78px">Acciones</th>

                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Fecha</th>
                                            <th>Usuario</th>
                                            <th>Comentarios</th>
                                            <th style="width:78px">Acciones</th>
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
</section>
<!-- Modales -->
<div class="modal fade" id="modalEmbarque" tabindex="-1" role="dialog">
    <div class="demo-masked-input">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header ">
                    <h4 class="modal-title text-center" id="defaultModalLabel">Embarque</h4>
                </div>
                <div class="modal-body">
                    <!-- <div class="form-group">
                        <div class="form-line" id="empleados">
                            <label for="selectEmpleados">Empleado</label>
                            <select class="form-control show-tick" required id="selectEmpleados">
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-line" id="embarques">
                            <label for="selectEmbarques">Embarque</label>
                            <select class="form-control show-tick" required id="selectEmbarques" name="selectEmbarques">
                            </select>
                        </div>
                    </div> -->
                    <div class="form-group">
                        <div class="form-line" id="tipo">
                            <label for="selectTipo">Tipo</label>
                            <select class="form-control show-tick" required id="selectTipo" name="selectTipo">
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-line">
                            <label for="fecha">Fecha</label>
                            <input type="date" class="form-control" name="fecha" id="fecha" placeholder="Fecha"
                                required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-line">
                            <label for="comentarios">Comentarios</label>
                            <input type="text" class="form-control" name="comentarios" id="comentarios"
                                placeholder="Comentarios" required>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success waves-effect" id="btnGuardar">GUARDAR</button>
                    <button type="button" class="btn btn-danger waves-effect pull-left " id="cerrarModal"
                        data-dismiss="modal">CERRAR</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="modalEntregaManual" tabindex="-1" role="dialog">
    <div class="demo-masked-input">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header ">
                    <h4 class="modal-title text-center" id="defaultModalLabel">Entrega Manual</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <div class="form-line" id="prendas">
                            <label for="selectPrendas">Prendas</label>
                            <select class="form-control show-tick" required id="selectPrendas" name="selectPrendas">
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-line" id="tallas">
                            <label for="selectTalla">Talla</label>
                            <select class="form-control show-tick" required id="selectTalla" name="selectTalla">
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-line">
                            <label for="comentarios">Cantidad</label>
                            <input type="number" class="form-control" id="cantidad" min="1" max="100000" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success waves-effect" id="btnGuardarEntrega">GUARDAR</button>
                    <button type="button" class="btn btn-danger waves-effect pull-left " id="cerrarModal"
                        data-dismiss="modal">CERRAR</button>
                </div>
            </div>
        </div>
    </div>
</div>