<section class="content">
    <div class="container-fluid">
        <div class="block-header">
            <h2>
                Empleados
            </h2>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <b>Gafete</b>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">code</i>
                        </span>
                        <div class="form-line">
                            <input type="text" class="form-control" name="firmaGafete" id="firmaGafete">


                        </div>
                    </div>
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float"
                        data-toggle="modal" data-target="#modalTomaTalla" id="clickTomaTalla">
                        <i class="material-icons">add_circle</i>
                    </button>
                </div>

                <div class="body">
                    <div class="row clearfix">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <table class="table table-bordered text-center" id="tablaEmpleados" width="100%">
                                <thead>
                                    <tr>
                                        <th style="width:78px">Acciones</th>
                                        <th>Numero Empleado</th>
                                        <th>Nombre</th>
                                        <th>Area</th>
                                        <th>Puesto</th>
                                        <th>Turno</th>
                                        <th>Camisa</th>
                                        <th>Pantalon</th>
                                        <th>Sudadera</th>
                                        <th>Comentarios</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th style="width:78px">Acciones</th>
                                        <th>Numero Empleado</th>
                                        <th>Nombre</th>
                                        <th>Area</th>
                                        <th>Puesto</th>
                                        <th>Turno</th>
                                        <th>Camisa</th>
                                        <th>Pantalon</th>
                                        <th>Sudadera</th>
                                        <th>Comentarios</th>
                                    </tr>
                                </tfoot>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="modal fade" id="modalTomaTalla" tabindex="-1" role="dialog">
    <div class="demo-masked-input">
        <div class="modal-dialog" role="document">

            <div class="modal-content">
                <div class="modal-header ">
                    <h4 class="modal-title text-center" id="defaultModalLabel">Toma Talla</h4>
                </div>
                <div class="modal-body">

                    <b>Numero Empleado</b>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">code</i>
                        </span>
                        <div class="form-line">
                            <input type="text" class="form-control readonly" name="numeroEmpleado" id="numeroEmpleado">

                            <input type="hidden" class=" readonly" name="idEmpleado" id="idEmpleado">
                        </div>
                    </div>
                    <b>Nombre</b>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">person</i>
                        </span>
                        <div class="form-line">
                            <input type="text" class="form-control readonly" name="nombreEmpleado" id="nombreEmpleado">


                        </div>
                    </div>
                    <b>Fecha Ingreso</b>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">date_range</i>
                        </span>
                        <div class="form-line">
                            <input type="text" class="form-control readonly" name="fechaIngreso" id="fechaIngreso">


                        </div>
                    </div>

                    <b>Area y Puesto</b>
                    <div class="row clearfix">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" class="form-control readonly" name="areaEmpleado"
                                        id="areaEmpleado">

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" class="form-control readonly" name="puestoEmpleado"
                                        id="puestoEmpleado">

                                </div>
                            </div>
                        </div>
                    </div>




                    <!--    <b>Talla Sudadera</b> 
                                 <div class="row clearfix">
                                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2 form-control-label">
                                        <i class="material-icons">archive
                                        </i>
                                      </div>
                                 
                                 <div class="col-lg-11 col-md-11 col-sm-11 col-xs-10">
                                    <div class="form-group">                 
                                            <div id="sudadera">                                    
                                                <select class="form-control show-tick" required id="tallaSudadera" name="tallaSudadera">
                                                </select>
                                            </div>    
                                                           
                                    </div>
                                 
                                </div>
                                                                      
                                 
                                 </div>-->
                    <b>Talla Camisa</b>
                    <div class="row clearfix">
                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2 form-control-label">
                            <i class="material-icons">archive
                            </i>
                        </div>

                        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-10">
                            <div class="form-group">
                                <div id="camisa">
                                    <select class="form-control show-tick" required id="tallaCamisa" name="tallaCamisa">
                                    </select>

                                </div>

                            </div>

                        </div>
                        <b>Talla Pantalon</b>
                        <div class="row clearfix">
                            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2 form-control-label">
                                <i class="material-icons">archive
                                </i>
                            </div>

                            <div class="col-lg-11 col-md-11 col-sm-11 col-xs-10">
                                <div class="form-group">
                                    <div id="pantalon">
                                        <select class="form-control show-tick" required id="tallaPantalon"
                                            name="tallaPantalon">
                                        </select>

                                    </div>

                                </div>

                            </div>


                        </div>

                        <b>Comentarios</b>
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="material-icons">assignment</i>
                            </span>
                            <div class="form-line">
                                <input type="text" class="form-control " name="comentariosTomaTallas"
                                    id="comentariosTomaTallas">


                            </div>
                        </div>
                        <!--<b>*Personal de brigada y comisión, se toma talla de camisa y pantalon*</b>  -->



                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-link waves-effect" id="guardar">GUARDAR</button>
                        <button type="button" class="btn btn-link waves-effect pull-left " id="cerrarModal"
                            data-dismiss="modal">CERRAR</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>