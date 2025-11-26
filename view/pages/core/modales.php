<div class='modal fade' id='add' tabindex='-1' role='dialog' aria-labelledby='modelTitleId' aria-hidden='false'
    data-focus='false'>
    <div class='modal-dialog modal-lg' role='document'>
        <div class='modal-content'>
            <div class='modal-header card-primary card-outline dragable_touch'>
                <p id='addTitle' class='modal-title'></p>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times</span>
                </button>
            </div>
            <div class='modal-body py-4'>
                <nav class="nav nav-pills nav-justified my-2 d-flex flex-nowrap" style="overflow-x: scroll;">
                    <a id="item-catalogoTipo" class="d-flex align-items-center justify-content-center nav-link active"
                        data-toggle="pill" role="tab" href="#v-pills-catalogoTipo">
                        <i class="fas fa-list mr-1" style="color: #0385F2"></i>
                        <p class="menuTabMovil mb-0">Catalogo Tipo</p>
                    </a>
                    <a id="item-catalogo" class="d-flex align-items-center justify-content-center nav-link"
                        data-toggle="pill" role="tab" href="#v-pills-catalogo">
                        <i class="fas fa-list-check mr-1" style="color: #0385F2"></i>
                        <p class="menuTabMovil mb-0">Catalogo</p>
                    </a>
                    <a id="item-datosControl" class="d-flex align-items-center justify-content-center nav-link"
                        data-toggle="pill" role="tab" href="#v-pills-datosControl">
                        <i class="fas fa-users mr-1" style="color: #0385F2"></i>
                        <p class="menuTabMovil mb-0">Datos de control</p>
                    </a>
                </nav>
                <div class="tab-content">
                    <div class="tab-pane fade show active" role="tabpanel" id="v-pills-catalogoTipo">
                        <div class='row p-3'>
                            <div class='mt-3 col-sm-12 col-md-6'>
                                <label>Clave:</label>
                                <div id='textBoxClave'></div>
                            </div>
                            <div class='mt-3 col-sm-12 col-md-6'>
                                <label>Nombre:</label>
                                <div id='textBoxNombre'></div>
                            </div>
                            <div class='mt-3 col-12'>
                                <label>Descripción:</label>
                                <div id='textAreaDescripcion'></div>
                            </div>
                            <div class='mt-3 col-12 d-flex justify-content-end'>
                                <div id='btnCtaTipo'></div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade show" role="tabpanel" id="v-pills-catalogo">
                        <div class='row p-3'>
                            <div class='mt-3 col-sm-12 col-md-5'>
                                <label>Clave Tipo:</label>
                                <div id='lookUpClaveTipo'></div>
                            </div>
                            <div class='mt-3 col-sm-12 col-md-3'>
                                <label>Clave:</label>
                                <div id='textBoxClaveCat'></div>
                            </div>
                            <div class='mt-3 col-sm-12 col-md-4'>
                                <label>Nombre:</label>
                                <div id='textBoxNombreCat'></div>
                            </div>
                            <div class='mt-3 col-12'>
                                <label>Descripción:</label>
                                <div id='textAreaDescripcionCat'></div>
                            </div>
                            <div class='mt-3 col-12 d-flex justify-content-end'>
                                <div id='btnCatalogo'></div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" role="tabpanel" id="v-pills-datosControl">
                        <div class="row p-3">
                            <fieldset class="col-sm-12 col-md-6 border rounded pb-4">
                                <legend class="float-none w-auto">Usuario Crea</legend>
                                <div class='mt-2'>
                                    <label>Nombre:</label>
                                    <div id='textBoxUsuario'></div>
                                </div>
                                <div class='mt-2'>
                                    <label>Fecha:</label>
                                    <div id='dateBoxCrea'></div>
                                </div>
                            </fieldset>
                            <fieldset class="col-sm-12 col-md-6 border rounded pb-4">
                                <legend class="float-none w-auto">Usuario Modifica</legend>
                                <div class='mt-2'>
                                    <label>Nombre:</label>
                                    <div id='textBoxUsuarioMod'></div>
                                </div>
                                <div class='mt-2'>
                                    <label>Fecha:</label>
                                    <div id='dateBoxCreaMod'></div>
                                </div>
                            </fieldset>
                            <fieldset class="col-12 border rounded pb-4 mt-2">
                                <legend class="float-none w-auto">Usuario Elimina</legend>
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">
                                        <div class='mt-2'>
                                            <label>Nombre:</label>
                                            <div id='textBoxUsuarioEli'></div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <div class='mt-2'>
                                            <label>Fecha:</label>
                                            <div id='dateBoxCreaEli'></div>
                                        </div>
                                    </div>
                                </div>
                                <div class='mt-2'>
                                    <label>Motivo:</label>
                                    <div id='textAreaMotivoEli'></div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class='modal-footer'>
            </div> -->
        </div>
    </div>
</div>

<!-- Modal Delete Catalogo Tipo -->
<div class="modal fade" id="modalDelete" tabindex="-1" role="dialog" data-focus="false" aria-labelledby="modelTitleId" aria-hidden="false">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header card-primary card-outline  dragable_touch">
                <p class="modal-title">Motivo de eliminiación</p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
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

<!-- Modal eliminacion catalogo -->
<div class="modal fade" id="modalDeleteCatalogo" tabindex="-1" role="dialog" data-focus="false" aria-labelledby="modelTitleId" aria-hidden="false">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header card-primary card-outline  dragable_touch">
                <p class="modal-title">Motivo de eliminiación</p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="frmMotivoEliminar">
                <div class="modal-body">
                    <div class="form-group">
                        <div id="textAreaMotivoEliCatalogo"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div id="btnMotivoCatalogo"></div>
                </div>
            </form>
        </div>
    </div>
</div>