<div class="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header dragable_touch">
                <h5 class="modal-title">Cargar Inventario</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="frmInventario">
                <div class="modal-body">
                    <nav class="nav nav-pills nav-justified my-2 d-flex flex-nowrap" style="overflow-x: scroll">
                        <a id="item-detalle" class="d-flex align-items-center justify-content-center nav-link active"
                            data-toggle="pill" role="tab" href="#v-pills-detalle">
                            <i class="fas fa-pencil-alt mr-2" style="color: #0385F2"></i>
                            <p class="menuTabMovil mb-0">Detalle</p>
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
                                <div class="col-5">
                                    <div class="form-group">
                                        <label for="lookUpTipoMov">Tipo Movimiento</label>
                                        <div id="lookUpTipoMov"></div>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <div class="form-group">
                                        <label for="lookUpPrenda">Prenda</label>
                                        <div id="lookUpPrenda"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="d-flex justify-content-between">
                                    <label>Tallas - Cantidad</label>
                                </div>
                                <div class="list-container">
                                    <div id="searchBox"></div>
                                </div>
                                <div class="list-container list-selectBox border rounded p-2">
                                    <div id="selectTextBoxTallasCantidad"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div id="textAreaComentarios"></div>
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
                    <div id="btnGuardarInv"></div>
                </div>
            </form>
        </div>
    </div>
</div>