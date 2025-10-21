<div class="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="false"
    data-focus="false">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content card-primary card-outline">
            <div class="modal-header dragable_touch">
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
                            <div class="row">
                                <div class="form-group col-sm-12 col-md-6 mt-3">
                                    <div class="form-group mt-3">
                                        <label>Estilos:</label>
                                        <div id="lookUpEstilo"></div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Categoría:</label>
                                        <div id="lookUpCategoria"></div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Sub Categoría:</label>
                                        <div id="lookUpSubCategoria"></div>
                                    </div>
                                </div>
                                <div class="form-group col-sm-12 col-md-6 mt-3">
                                    <div class="d-flex justify-content-between">
                                        <label>Tallas:</label>
                                    </div>
                                    <div class="list-container">
                                        <div id="searchBox"></div>
                                    </div>
                                    <div class="list-container list-selectBox border rounded p-2 mt-2">
                                        <div id="selectTextBoxTallasCantidad"></div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Observaciones:</label>
                                        <div id="textAreaObservaciones"></div>
                                    </div>
                                </div>
                            </div>
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