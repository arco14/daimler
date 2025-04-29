<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                  Proveedores 
                </h2>
            </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">      
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                          <div class="pull-right">
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarProveedor" id="clickProveedor">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>   
                                 <br>
                                             
                              <table class="table table-bordered text-center" id="tablaProveedores" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th >Proveedor</th>
                                            <th>Contacto</th>
                                            <th>Telefono</th>
                                            <th>Email</th>
                                            <th style="width:78px">Activo</th>
                                            <th style="width:78px">Actualizar</th>    
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px" >#</th>
                                            <th >Proveedor</th>
                                            <th>Contacto</th>
                                            <th>Telefono</th>
                                            <th>Email</th>
                                            <th style="width:78px">Activo</th>
                                            <th style="width:78px">Actualizar</th>                                           
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
            <!-- Modal agregar proveedor-->
      <div class="modal fade" id="modalAgregarProveedor" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" id="formNuevoProveedor">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Proveedor</h4>
                        </div>
                        <div class="modal-body">
                              
  <b>Proveedor</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">store</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control repetirProveedor" placeholder="Proveedor" id="nuevoProveedor" name="nuevoProveedor">
                                             <input type="hidden" id="idProveedor">
                                        </div>
                                    </div>
                                 <b>Contacto</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">face</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Contacto" id="nuevoContacto" name="nuevoContacto">
                                        </div>
                                    </div>  
                                     <b>Email</b> 
                           <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">email</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control email" placeholder="example@example.com" required name="nuevoEmail" id="nuevoEmail">
                                            </div>
                                        </div>
    <b>Móvil</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">phone_iphone</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control mobile-phone-number" placeholder="(000) 000-00-00" required name="nuevoTelefono" id="nuevoTelefono">
                                            </div>
                                        </div>
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarProveedor" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModal" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
            </form>
                </div>
            </div>
            </div>