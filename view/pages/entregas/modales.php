<style>
    .infoEmpleado {
        color: #0960AE;
    }

    .contenedorTops {
        height: 300px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>
<div class="modal fade" id="add" tabindex="-1" role="dialog" data-focus="false" aria-labelledby="modelTitleId" aria-hidden="false"
    data-focus="false">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content card-primary card-outline">
            <div class="modal-header dragable_touch pl-4">
                <p id="addTitle" class="modal-title"></p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times</span>
                </button>
            </div>
            <div class="modal-body py-4" style="height: 600px; overflow-y: scroll;">
                <nav class="nav nav-pills nav-justified my-2 d-flex flex-nowrap" style="overflow-x: scroll">
                    <a id="item-detalle" class="d-flex align-items-center justify-content-center nav-link active"
                        data-toggle="pill" role="tab" href="#v-pills-detalle">
                        <i class="fas fa-pencil-alt mr-2" style="color: #0385F2"></i>
                        <p class="menuTabMovil mb-0">Detalle</p>
                    </a>
                    <a id="item-historial" class="d-flex align-items-center justify-content-center nav-link"
                        data-toggle="pill" role="tab" href="#v-pills-historial">
                        <i class="fas fa-book mr-2" style="color: #0385F2"></i>
                        <p class="menuTabMovil mb-0">Historial</p>
                    </a>
                    <a id="item-datosControl" class="d-flex align-items-center justify-content-center nav-link"
                        data-toggle="pill" role="tab" href="#v-pills-datosControl">
                        <i class="fas fa-users mr-2" style="color: #0385F2"></i>
                        <p class="menuTabMovil mb-0">Datos de control</p>
                    </a>
                </nav>
                <div class="tab-content">
                    <div class="tab-pane fade show active" role="tabpanel" id="v-pills-detalle">
                        <div class="row">
                            <div id="cargaManual" class="form-group col-12">
                                <fieldset class="border rounded px-4 m-0 contenedorTops">
                                    <legend class="float-none w-auto p-2">Tops</legend>
                                    <div class="row px-3">
                                        <div id="dataGridTops"></div>
                                    </div>
                                </fieldset>
                                <fieldset class="border rounded pb-3 px-2 m-0">
                                    <legend class="float-none w-auto p-2">Pants</legend>
                                    <div class="row px-3">
                                        <div id="dataGridPants"></div>
                                    </div>
                                </fieldset>
                                <div class="form-group mt-3">
                                    <label>Comentarios:</label>
                                    <div id="textAreaComentariosEntrega"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" role="tabpanel" id="v-pills-historial">
                        Historial Entregas
                    </div>
                    <div class="tab-pane fade" role="tabpanel" id="v-pills-datosControl">
                        <div class="row p-3">
                            <fieldset class="col-sm-12 col-md-6 border rounded pb-4">
                                <legend class="float-none w-auto">Usuario Crea</legend>
                                <div class="mt-2">
                                    <label>Nombre:</label>
                                    <div id="textBoxUsuario"></div>
                                </div>
                                <div class="mt-2">
                                    <label>Fecha:</label>
                                    <div id="dateBoxCrea"></div>
                                </div>
                            </fieldset>
                            <fieldset class="col-sm-12 col-md-6 border rounded pb-4">
                                <legend class="float-none w-auto">Usuario Modifica</legend>
                                <div class="mt-2">
                                    <label>Nombre:</label>
                                    <div id="textBoxUsuarioMod"></div>
                                </div>
                                <div class="mt-2">
                                    <label>Fecha:</label>
                                    <div id="dateBoxCreaMod"></div>
                                </div>
                            </fieldset>
                            <fieldset class="col-12 border rounded pb-4 mt-2">
                                <legend class="float-none w-auto">Usuario Elimina</legend>
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">
                                        <div class="mt-2">
                                            <label>Nombre:</label>
                                            <div id="textBoxUsuarioEli"></div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <div class="mt-2">
                                            <label>Fecha:</label>
                                            <div id="dateBoxCreaEli"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <label>Motivo:</label>
                                    <div id="textAreaMotivoEli"></div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div id="btnGuardar"></div>
            </div>
        </div>
    </div>
</div>
<!-- Programar Fechas Entrega -->
<div class="modal fade" id="modalFechaEntrega" tabindex="-1" role="dialog" data-focus="false" aria-labelledby="modelTitleId"
    aria-hidden="false">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header card-success card-outline  dragable_touch">
                <p class="modal-title">Programar fecha de entrega</p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times</span>
                </button>
            </div>
            <div class="modal-body">
                <nav class="nav nav-pills nav-justified my-2 d-flex flex-nowrap" style="overflow-x: scroll">
                    <a id="item-programar" class="d-flex align-items-center justify-content-center nav-link active"
                        data-toggle="pill" role="tab" href="#v-pills-programar">
                        <i class="fas fa-pencil-alt mr-2" style="color: #0385F2"></i>
                        <p class="menuTabMovil mb-0">Programar</p>
                    </a>
                    <a id="item-entregas" class="d-flex align-items-center justify-content-center nav-link"
                        data-toggle="pill" role="tab" href="#v-pills-entregas">
                        <i class="fas fa-calendar mr-2" style="color: #0385F2"></i>
                        <p class="menuTabMovil mb-0">Fecha Entregas</p>
                    </a>
                </nav>
                <div class="tab-content">
                    <div class="tab-pane fade show active" role="tabpanel" id="v-pills-programar">
                        <div class="row">
                            <div class="form-group col-lg-4 col-12">
                                <label>Nombre Entrega</label>
                                <div id="textBoxNombreEntrega"></div>
                            </div>
                            <div class="form-group col-lg-8 col-12">
                                <label>Días de entrega</label>
                                <div id="dateBoxFechaEntrega" class="mt-0"></div>
                            </div>
                            <div class="col-12">
                                <div id="textAreaComentariosFechaEntrega"></div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" role="tabpanel" id="v-pills-entregas">
                        <div id="dataGridFechaEntregas"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div id="btnGuardarFechaEntrega"></div>
            </div>
        </div>
    </div>
</div>
<!-- Modal Delete -->
<div class="modal fade" id="modalDelete" tabindex="-1" role="dialog" data-focus="false" aria-labelledby="modelTitleId" aria-hidden="false">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header card-primary card-outline  dragable_touch">
                <p class="modal-title">Motivo de eliminiación</p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times</span>
                </button>
            </div>
            <form id="frmMotivoEliminar">
                <div class="modal-body">
                    <div class="form-group">
                        <div id="textAreaMotivo"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div id="btnMotivo"></div>
                </div>
            </form>
        </div>
    </div>
</div>