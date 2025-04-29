
<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                  Entregas
                </h2>
            </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">      
                    <div class="card">
                    <div class="header">
                        <div id="panelUsuario">
                    <b>Usuario</b> 
                                <div class="input-group">
                                <div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-1 col-xs-2 form-control-label">
                                            <span class="input-group-addon">
                                                <i class="material-icons">person</i>
                                            </span>

</div>
<div class="col-lg-10 col-md-10 col-sm-10 col-xs-8">
                                            <div class="form-line">

                                            <input type="text" class="form-control"  name="usuarioSession" id="usuarioSession">
                                                    
                                            </div>
                                            </div>
                                            <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float " id="btnGenerarSession"    >
                                <i class="material-icons">save</i>
                                </button>
                                        </div>
                                        </div>
                                        </div>
                    <b>Gafete</b> 
                                <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">code</i>
                                            </span>
                                            <div class="form-line">
                                            <input type="text" class="form-control"  name="firmaGafete" id="firmaGafete">
                                                    

                                            </div>
                                        </div>
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalEntrega" id="clickEntrega">
                                    <i class="material-icons">add_circle</i>
                                </button>
                        </div>

                        <div class="body">
                            <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">      
                               
                              <table class="table table-bordered text-center" id="tablaEntregas" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:78px">Acciones</th>  
                                            <th># Empleado</th>
                                            <th>Nombre</th>
                                            <th>Area</th>
                                            <th>Puesto</th>
                                            <th>Turno</th>
                                            <th>Camisa</th>  
                                            <th>Pantalon</th> 
                                            <th>Sudadera</th> 
                                            <th>Estatus</th>
                                            <th style="width:78px">Activo</th>
                                           
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th style="width:78px">Acciones</th>  
                                            <th># Empleado</th>
                                            <th>Nombre</th>
                                            <th>Area</th>
                                            <th>Puesto</th>
                                            <th>Turno</th>
                                            <th>Camisa</th>  
                                            <th>Pantalon</th> 
                                            <th>Sudadera</th> 
                                            <th>Estatus</th>
                                            <th style="width:78px">Activo</th>
                                        </tr>
                                    </tfoot>  
                               </table>
                             
                              </div>
                            </div>
                            </div>
                            <div class="header">
                    <b>Gafete</b> 
                                <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">code</i>
                                            </span>
                                            <div class="form-line">
                                            <input type="text" class="form-control"  name="firmaGafete" id="firmaGafete">
                                                    

                                            </div>
                                        </div>
                
                        </div>


                        </div>
                    </div>
                </div>
    </section> 

    <div class="modal fade" id="modalEntrega" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" id="formNuevaEntrega">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title text-center" id="defaultModalLabel">Entrega Uniformes</h4>
                        </div>
                        <div class="modal-body">
                        <div class="row clearfix pull-right" >
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div class="demo-switch">
                
        <div class="switch">
            <label>CAMBIO<input type="checkbox" id="tipoEntrega" cambioPrendas="0" ><span class="lever switch-col-light-blue"></span></label>
        </div>
                    
</div>
</div>
</div>
              
                        <button class="btn btn-info waves-effect m-b-15 collapsed" type="button" data-toggle="collapse" data-target="#collapseDatosEmpleados" aria-expanded="false" aria-controls="collapseExample">
                               Información Empleado
                            </button>
                     
                            <div class="collapse" id="collapseDatosEmpleados" aria-expanded="false" style="height: 0px;">
                                <div class="well">
                        <b>Numero Empleado</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control readonly"  name="numeroEmpleado" id="numeroEmpleado">
                                                  
                                            <input type="hidden"  name="idEmpleado" id="idEmpleado">
                                        </div>
                                    </div>
                                    <b>Nombre</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">person</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control readonly"  name="nombreEmpleado" id="nombreEmpleado">
                                                  

                                        </div>
                                    </div>
                                    <b>Fecha Ingreso</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">date_range</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control readonly"  name="fechaIngreso" id="fechaIngreso">
                                        </div>
                                    </div>

                                  
                              
                                </div>
                            </div>
                            
                 
                            <br>
                            <div id="entregaPaquete3">
                                    <b>Paquete a Entregar</b> 
                                 
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-1 col-xs-2 form-control-label">
 <i class="material-icons">archive
</i>
</div>

<div class="col-lg-10 col-md-10 col-sm-10 col-xs-8">
  <div class="form-group">                 
         <div id="paquete">                                    
   <select class="form-control show-tick" required id="paqueteEmpleado" name="paqueteEmpleado">
   </select>

       </div>    
                          
</div>

                            </div>
                            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2 form-control-label">
<button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float " id="btnAgregarPrenda"  data-toggle="modal" data-target="#modalAgregarPrenda"  >
                                <i class="material-icons">add_circle</i>
                                </button>
</div>                           

</div>
</div>
<div ></div> 
<h4 class="modal-title text-center" id="estatusTitulo"></h4>
<br>
<b>Area y Puesto</b> 
                                    <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div class="form-group">   
                                    <div class="form-line">
                                        <input type="text" class="form-control readonly"  name="areaEmpleado" id="areaEmpleado">
                                                                                    
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                      <div class="form-group">   
                                      <div class="form-line">
                                          <input type="text" class="form-control readonly"  name="puestoEmpleado" id="puestoEmpleado">
                                                                       
                                          </div>
                                      </div>
                                      </div>
                                    </div>
                                    <div id="panelComentariosTalla"  >
<b>Comentarios Toma Tallas</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">assignment</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control readonly"  name="comentariosTomaTalla" id="comentariosTomaTalla">
                                                  

                                        </div>
</div> 
</div> 
<div id="entregaPantalon" class="panelEntrega">
<div id="entregaPantalonTitulo"></div> 
<div class="row clearfix">
<div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
  <div class="form-group">                 
         <div id="pantalon" >                                    
            <select class="form-control show-tick" required id="paquetePantalon" name="paquetePantalon"  >
            <input type="hidden"  name="idTallaPantalon" id="idTallaPantalon">
            </select>
       </div>                           
</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-line">
<div class="form-group">   
                                      <div class="form-line">
                                          <input type="text" class="form-control readonly"  name="paquetePantalonExistencia" id="paquetePantalonExistencia">
                                                                                      
                                          </div>
                                      </div>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-line">
<div class="input-group spinner" data-trigger="spinner">
                                        <div class="form-line focused">
                                            <input type="text" class="form-control text-center cantidadEntrega" data-rule="quantity" data-max="5"  name="paquetePantalonCantidad" id="paquetePantalonCantidad">
                                        </div>
                                        <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                    </div>
</div>


<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
<button type="button" class="btn bg-red btn-circle waves-effect waves-circle waves-float botonesEliminar"  id="btnEliminarPantalon"  >
                                <i class="material-icons">delete</i>
                                </button>
                                <div class="switch retornos" >
            <label>RETORNO<input type="checkbox" id="retornoPantalon" retorno="0" ><span class="lever switch-col-light-blue"></span></label>
        </div>
                              

  </div>
</div>

</div>
<div id="entregaCamisaMangaLarga" class="panelEntrega">
<div id="entregaCamisaMangaLargaTitulo"></div> 
<div class="row clearfix">
<div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
  <div class="form-group">                 
         <div id="camisaMangaLarga">                                    
            <select class="form-control show-tick" required id="paqueteCamisaMangaLarga" name="paqueteCamisaMangaLarga">
            </select>
            <input type="hidden"  name="idTallaCamisaMangaLarga" id="idTallaCamisaMangaLarga">
       </div>                           
</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-line">
<div class="form-group">   
                                      <div class="form-line">
                                          <input type="text" class="form-control readonly"  name="paqueteCamisaMangaLargaExistencia" id="paqueteCamisaMangaLargaExistencia">
                                                                                      
                                          </div>
                                      </div>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-line">
<div class="input-group spinner" data-trigger="spinner">
                                        <div class="form-line focused">
                                            <input type="text" class="form-control text-center cantidadEntrega"  data-rule="quantity" data-max="5"  name="paqueteCamisaMangaLargaCantidad" id="paqueteCamisaMangaLargaCantidad">
                                        </div>
                                        <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                    </div>
</div>


<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
<button type="button" class="btn bg-red btn-circle waves-effect waves-circle waves-float botonesEliminar" id="btnEliminarCamisaMangaLarga"  >
                                <i class="material-icons">delete</i>
                                </button>
                                <div class="switch retornos" >
            <label>RETORNO<input type="checkbox" id="retornoCamisaMangaLarga" retorno="0" ><span class="lever switch-col-light-blue"></span></label>
        </div>
  </div>
</div>

</div>
<div id="entregaCamisaMangaCorta" class="panelEntrega">
<div id="entregaCamisaMangaCortaTitulo"></div> 
<div class="row clearfix">
<div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
  <div class="form-group">                 
         <div id="camisaMangaCorta">                                    
            <select class="form-control show-tick" required id="paqueteCamisaMangaCorta" name="paqueteCamisaMangaCorta">
            </select>
            <input type="hidden"  name="idTallaCamisaMangaCorta" id="idTallaCamisaMangaCorta">
       </div>                           
</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-line">
<div class="form-group">   
                                      <div class="form-line">
                                          <input type="text" class="form-control readonly"  name="paqueteCamisaMangaCortaExistencia" id="paqueteCamisaMangaCortaExistencia">
                                                                                      
                                          </div>
                                      </div>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-line">
<div class="input-group spinner" data-trigger="spinner">
                                        <div class="form-line focused">
                                            <input type="text" class="form-control text-center cantidadEntrega" data-max="5"  name="paqueteCamisaMangaCortaCantidad" id="paqueteCamisaMangaCortaCantidad">
                                        </div>
                                        <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                    </div>
</div>


<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
<button type="button" class="btn bg-red btn-circle waves-effect waves-circle waves-float botonesEliminar" id="btnEliminarCamisaMangaCorta"  >
                                <i class="material-icons">delete</i>
                                </button>
                                <div class="switch retornos" >
            <label>RETORNO<input type="checkbox" id="retornoCamisaMangaCorta" retorno="0" ><span class="lever switch-col-light-blue"></span></label>
        </div>
  </div>
</div>

</div>
<div id="entregaPlayera" class="panelEntrega">
<div id="entregaPlayeraTitulo"></div> 
<div class="row clearfix">
<div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
  <div class="form-group">                 
         <div id="playera">                                    
            <select class="form-control show-tick" required id="paquetePlayera" name="paquetePlayera">
            </select>
            <input type="hidden"  name="idTallaPlayera" id="idTallaPlayera">
       </div>                           
</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-line">
<div class="form-group">   
                                      <div class="form-line">
                                          <input type="text" class="form-control readonly"  name="paquetePlayeraExistencia" id="paquetePlayeraExistencia">
                                                                                      
                                          </div>
                                      </div>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-line">
<div class="input-group spinner" data-trigger="spinner">
                                        <div class="form-line focused">
                                            <input type="text" class="form-control text-center cantidadEntrega"  data-rule="quantity" data-max="5"  name="paquetePlayeraCantidad" id="paquetePlayeraCantidad">
                                        </div>
                                        <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                    </div>
</div>


<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
<button type="button" class="btn bg-red btn-circle waves-effect waves-circle waves-float botonesEliminar" id="btnEliminarPlayera"  >
                                <i class="material-icons">delete</i>
                                </button>
                                <div class="switch retornos" >
            <label>RETORNO<input type="checkbox" id="retornoPlayera" retorno="0" ><span class="lever switch-col-light-blue"></span></label>
        </div>
  </div>
</div>

</div>
<div id="entregaSudadera" class="panelEntrega">
<div id="entregaSudaderaTitulo"></div> 
<div class="row clearfix">
<div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
  <div class="form-group">                 
         <div id="sudadera">                                    
            <select class="form-control show-tick" required id="paqueteSudadera" name="paqueteSudadera">
            </select>
            <input type="hidden"  name="idTallaSudadera" id="idTallaSudadera">
       </div>                           
</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-line">
<div class="form-group">   
                                      <div class="form-line">
                                          <input type="text" class="form-control readonly"  name="paqueteSudaderaExistencia" id="paqueteSudaderaExistencia">
                                                                                      
                                          </div>
                                      </div>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-line">
<div class="input-group spinner" data-trigger="spinner">
                                        <div class="form-line focused">
                                            <input type="text" class="form-control text-center cantidadEntrega"  data-rule="quantity" data-max="5"  name="paqueteSudaderaCantidad" id="paqueteSudaderaCantidad">
                                        </div>
                                        <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                    </div>
</div>


<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
<button type="button" class="btn bg-red btn-circle waves-effect waves-circle waves-float botonesEliminar" id="btnEliminarSudadera"  >
                                <i class="material-icons">delete</i>
                                </button>
                                <div class="switch retornos" >
            <label>RETORNO<input type="checkbox" id="retornoSudadera" retorno="0" ><span class="lever switch-col-light-blue"></span></label>
        </div>
  </div>
</div>

</div>


<div id="entregaExtra" class="panelEntrega">
<div id="entregaExtraTitulo"></div> 
<div class="row clearfix">
<div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
  <div class="form-group">                 
         <div id="prendaExtra">                                    
            <select class="form-control show-tick" required id="paquetePrendaExtra" name="paquetePrendaExtra">
            </select>
       </div>                           
</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-line">
<div class="form-group">   
                                      <div class="form-line">
                                          <input type="text" class="form-control readonly"  name="paqueteExtraExistencia" id="paqueteExtraExistencia">
                                                                                      
                                          </div>
                                      </div>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-line">
<div class="input-group spinner" data-trigger="spinner">
                                        <div class="form-line focused">
                                            <input type="text" class="form-control text-center cantidadEntrega"  data-rule="quantity" data-max="5"  name="paqueteExtraCantidad" id="paqueteExtraCantidad">
                                        </div>
                                        <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                    </div>
</div>


<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
<button type="button" class="btn bg-red btn-circle waves-effect waves-circle waves-float" id="btnEliminarExtra"  >
                                <i class="material-icons">delete</i>
                                </button>
  </div>
</div>

</div>

<b>Comentarios Entrega</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">assignment</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control"  name="comentariosEntrega" id="comentariosEntrega">
                                                  

                                        </div>
</div>
    
<button class="btn btn-info waves-effect m-b-15 collapsed" type="button" data-toggle="collapse" data-target="#collapseUltimaEntrega" aria-expanded="false" aria-controls="collapseUltimaEntrega" id="btnUltimaEntrega">
                               Ultima Entrega
                            </button>
                     
                            <div class="collapse" id="collapseUltimaEntrega" aria-expanded="false" style="height: 0px;">
                                <div class="well">       
                                    
                                <b>Fecha </b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">date_range</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control readonly"  name="fechaUltimaEntrega" id="fechaUltimaEntrega">
                                        </div>
                                    </div>

                                    <table class="table table-bordered text-center" id="tablaDetalleEntrega" width="100%">
                                    <thead>
                                        <tr>
                                        <th >Prenda</th>
                                        <th >Cantidad</th>                      
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th >Prenda</th>
                                        <th >Cantidad</th>  

                                        </tr>
                                    </tfoot>  
                               </table>    
                                  
                              
                                </div>
                            </div>
         
                         

</div>
<div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarEntrega" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left " id="cerrarModalEntrega"  data-dismiss="modal">CERRAR</button>
                        </div>

</div>
</form>
</div>
</div>
</div>

<div class="modal fade" id="modalAgregarPrenda" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                  
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title text-center" id="defaultModalLabel">Prenda</h4>
                        </div>
                        <div class="modal-body">
                        <b>Prenda</b> 
                            <div class="row clearfix">
                            <div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
                            <i class="material-icons">archive
                            </i>
                            </div>

                            <div class="col-lg-10 col-md-10 col-sm-8 col-xs-6">
                            <div class="form-group">                 
                                    <div id="extra">                                    
                                        <select class="form-control show-tick" required id="paqueteExtra" name="paqueteExtra">
                                        </select>

                                </div>    
                                                    
                            </div>
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarPrenda" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left" id="cerrarModalPrenda" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            </div>
</div>

            <div class="modal fade" id="modalResumenEntrega" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog modal-lg" role="document">
                  
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title text-center" id="defaultModalLabel">Resumen Entregas</h4>
                        </div>
                        <div class="modal-body">
                        <table class="table table-bordered text-center" id="tablaResumenEntregas" width="100%">
                                    <thead>
                                        <tr>
                                        <th >Fecha</th>
                                        <th >Folio</th>
                                            <th>Comentarios</th>
                                            <th>Usuario</th>
                                            <th>Cantidad</th>   
                                            <th style="width:78px">Acciones</th>                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th >Fecha</th>
                                        <th >Folio</th>
                                            <th>Comentarios</th>
                                            <th>Usuario</th>
                                            <th>Cantidad</th>
                                            <th style="width:78px">Acciones</th>  
                                        </tr>
                                    </tfoot>  
                               </table>


</div>
<div class="modal-footer">
         
                            <button type="button" class="btn btn-link waves-effect pull-left " id="modalResumenEntregas"  data-dismiss="modal">CERRAR</button>
                        </div>
</div>
</div>
</div>
</div>
