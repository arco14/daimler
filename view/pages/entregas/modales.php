<style>
    .infoEmpleado {
        color: #0960AE;
    }
</style>
<div class="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="false"
    data-focus="false">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content card-primary card-outline">
            <div class="modal-header dragable_touch pl-4">
                <p id="addTitle" class="modal-title"></p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times</span>
                </button>
            </div>
            <form id="frmEstilos">
                <div class="modal-body py-4" style="height: 600px; overflow-y: scroll;">
                    <nav class="nav nav-pills nav-justified my-2 d-flex flex-nowrap" style="overflow-x: scroll">
                        <a id="item-detalle" class="d-flex align-items-center justify-content-center nav-link active"
                            data-toggle="pill" role="tab" href="#v-pills-detalle">
                            <i class="fas fa-pencil-alt mr-1"></i>
                            <p class="menuTabMovil">Detalle</p>
                        </a>
                        <a id="item-historial" class="d-flex align-items-center justify-content-center nav-link"
                            data-toggle="pill" role="tab" href="#v-pills-historial">
                            <i class="fas fa-book mr-1"></i>
                            <p class="menuTabMovil">Historial</p>
                        </a>
                        <a id="item-datosControl" class="d-flex align-items-center justify-content-center nav-link"
                            data-toggle="pill" role="tab" href="#v-pills-datosControl">
                            <i class="fas fa-users mr-1"></i>
                            <p class="menuTabMovil">Datos de control</p>
                        </a>
                    </nav>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" role="tabpanel" id="v-pills-detalle">
                            <div class="row px-3">
                                <div class="form-group col-sm-12 col-md-3">
                                    <!-- <div class="form-group border">
                                        <label>Area:</label>
                                        <div id="lookUpArea"></div>
                                    </div>
                                    <div class="form-group border">
                                        <label>Puesto:</label>
                                        <div id="lookUpPuesto"></div>
                                    </div>
                                    <div class="form-group border">
                                        <label>Turno:</label>
                                        <div id="lookUpTurno"></div>
                                    </div> -->
                                    <!-- <div class="form-group border">
                                        <label>Entrega:</label>
                                        <div id="textBoxEntrega"></div>
                                    </div> -->
                                    <fieldset class="border rounded pb-3 px-2 m-0">
                                        <legend class="float-none w-auto p-2">Entrega Predeterminada</legend>
                                        <div class="form-group">
                                            <div class="d-flex justify-content-end">
                                                <div id="swPredeterminada"></div>
                                            </div>
                                            <div class="form-group">
                                                <label>Estilo Tops</label>
                                                <div id="textBoxEstiloTops"></div>
                                            </div>
                                            <div class="form-group mb-1">
                                                <label>Paquete</label>
                                                <div id="textBoxPaqueteTops"></div>
                                            </div>
                                            <div class="d-flex" style="gap: 0.5rem;">
                                                <div class="form-group">
                                                    <label>Talla</label>
                                                    <div id="textBoxTopsTalla"></div>
                                                </div>
                                                <div class="form-group">
                                                    <label>Cantidad</label>
                                                    <div id="textBoxTopsCantidad"></div>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 mb-1">
                                                <label>Estilo Pants</label>
                                                <div id="textBoxEstiloPants"></div>
                                            </div>
                                            <div class="form-group mb-1">
                                                <label>Paquete</label>
                                                <div id="textBoxPaquetePants"></div>
                                            </div>
                                            <div class="d-flex mt-2" style="gap: 0.5rem;">
                                                <div class="form-group">
                                                    <label>Talla</label>
                                                    <div id="textBoxPantsTalla"></div>
                                                </div>
                                                <div class="form-group">
                                                    <label>Cantidad</label>
                                                    <div id="textBoxPantsCantidad"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="form-group col-sm-12 col-md-9">
                                    <fieldset class="border rounded pb-3 px-2 m-0">
                                        <legend class="float-none w-auto p-2">Tops</legend>
                                    </fieldset>
                                    <fieldset class="border rounded pb-3 px-2 m-0">
                                        <legend class="float-none w-auto p-2">Pants</legend>
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
            </form>
        </div>
    </div>
</div>

<!-- /Modal Delete -->
<div class="modal fade" id="modalDelete" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="false">
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