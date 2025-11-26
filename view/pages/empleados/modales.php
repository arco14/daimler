<div class="modal fade" id="add" tabindex="-1" role="dialog" data-focus="false" data-focus="false" aria-labelledby="modelTitleId" aria-hidden="false"
    data-focus="false">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content card-primary card-outline">
            <div class="modal-header dragable_touch">
                <p id="addTitle" class="modal-title"></p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times</span>
                </button>
            </div>
            <form id="frmDesarrollos">
                <div class="modal-body py-4" style="height: 600px; overflow-y: scroll;">
                    <nav class="nav nav-pills nav-justified my-2 d-flex flex-nowrap" style="overflow-x: scroll">
                        <a id="item-detalle" class="d-flex align-items-center justify-content-center nav-link active"
                            data-toggle="pill" role="tab" href="#v-pills-detalle">
                            <i class="fas fa-pencil-alt mr-1"></i>
                            <p class="menuTabMovil">Detalle</p>
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
                                <div class="col-sm-12 col-md-6 col-xl-4">
                                    <div class="boxFolio form-group mt-3 d-none">
                                        <label>Estilos:</label>
                                        <div id="lookUpEstilo"></div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Categorías:</label>
                                        <div id="LookUpCategorias"></div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Tallas:</label>
                                        <div id="swDesarrollo"></div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Subcategoria:</label>
                                        <div id="swCalidad"></div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-xl-8">
                                </div>
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <label>Observaciónes:</label>
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

<!-- Tomar Tallas -->
<div class="modal fade" id="tomarTallas" tabindex="-1" role="dialog" data-focus="false" data-focus="false" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header card-success card-outline dragable_touch">
                <h5 class="modal-title">Tomar Tallas</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="frmTomaTalla">
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
                            <div class="form-group">
                                <label for="dropDownEmpleado">Empleado</label>
                                <div id="dropDownEmpleado"></div>
                            </div>
                            <div class="row">
                                <div class="form-group col-lg-4 col-12">
                                    <label for="lookUpTipoPrenda">Tipo Prenda</label>
                                    <div id="lookUpTipoPrenda"></div>
                                </div>
                                <div class="form-group col-lg-4 col-12">
                                    <label for="lookUpPrenda">Prenda</label>
                                    <div id="lookUpPrenda"></div>
                                </div>
                                <div class="form-group col-lg-4 col-12">
                                    <label for="lookUpEstilos">Estilo</label>
                                    <div id="lookUpEstilos"></div>
                                </div>
                                <div class="form-group col-lg-4 col-12">
                                    <label for="lookUpPaquete">Paquete</label>
                                    <div id="lookUpPaquete"></div>
                                </div>
                                <fieldset class="col-12 border rounded p-2">
                                    <legend class="float-none w-auto">Tallas</legend>
                                    <div id="tallCanTops" class="d-flex" style="gap: 1rem;">
                                        <div class="form-group flex-grow-1">
                                            <label>ML</label>
                                            <div id="lookUpML"></div>
                                        </div>
                                        <div class="form-group flex-grow-1">
                                            <label>MC</label>
                                            <div id="lookUpMC"></div>
                                        </div>
                                        <div class="form-group flex-grow-1">
                                            <label>Playera</label>
                                            <div id="lookUpPLY"></div>
                                        </div>
                                        <div class="form-group flex-grow-1">
                                            <label>Sudadera</label>
                                            <div id="lookUpSUD"></div>
                                        </div>
                                    </div>
                                    <div id="tallCanPants" class="d-flex" style="gap: 1rem;">
                                        <div class="form-group">
                                            <label>Pantalon</label>
                                            <div id="lookUpPANT"></div>
                                        </div>
                                    </div>
                                </fieldset>
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

<!-- /Modal Delete -->
<div class="modal fade" id="modalDelete" tabindex="-1" role="dialog" data-focus="false" data-focus="false" aria-labelledby="modelTitleId" aria-hidden="false">
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