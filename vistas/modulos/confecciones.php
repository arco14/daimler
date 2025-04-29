<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                  CONFECCIONES    
                </h2>
            </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">  
                    
                    <div class="card">

                        <div class="body">
                            <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="example">
                                 
                                    <!-- Nav tabs -->
                                    <ul class="nav nav-tabs tab-nav-right" role="tablist">
                                        <li  class="active"><a href="#tab_1" data-toggle="tab">TIPO</a></li>
                                        <li role="presentation"><a href="#tab_2" data-toggle="tab">CONFECCIONES</a></li>     
                                    </ul>
                                    <!-- Tab panes -->
                                    <div class="tab-content">
                                      <div role="tabpanel" class="tab-pane fade in active" id="tab_1">  
                                          <div class="pull-right">
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarConfeccion" id="clickConfeccion">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>   
                                 <br>
                                
                              <table class="table table-bordered text-center" id="tablaConfecciones" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th>Confeccion</th>
                                            <th style="width:78px">Activo</th>
                                            <th style="width:78px">Actualizar</th>    
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th>Confeccion</th>
                                            <th style="width:78px">Activo</th>
                                            <th style="width:78px">Actualizar</th>                                        
                                        </tr>
                                    </tfoot>
                                           
                               </table>
                         
                                      </div>
                                         <div role="tabpanel" class="tab-pane fade in" id="tab_2">    
                                      <div class="pull-right">
                                        <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarConfeccionCompleta" id="clickConfeccionCompleta">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>
                                 <br>
                                    <table class="table table-bordered table-hover text-center" id="tablaConfeccionesCompletas" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th >Confeccion</th>
                                            <th >Precio</th>
                                            <th >Categoria</th>
                                            <th >Tipo</th>
                                            <th >Proveedor</th>
                                            <th >Activo</th>
                                            <th style="width:78px">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                          <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th >Confeccion</th>
                                            <th >Precio</th>
                                            <th >Categoria</th>
                                            <th >Tipo</th>
                                            <th >Proveedor</th>
                                            <th >Activo</th>
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
              </div>
    </section> 

            
            <!-- Modal agregar confeccion-completa-->
      <div class="modal fade" id="modalAgregarConfeccionCompleta" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" id="formNuevaConfeccionCompleta">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Confeccion</h4>
                        </div>
                        <div class="modal-body">
                              <b>Clave</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control repetirConfeccionCompleta" placeholder="Clave" name="nuevaClaveConfeccionCompleta" id="nuevaClaveConfeccionCompleta">
                                                  <input type="hidden" id="idConfeccionCompleta" >

                                        </div>
                                    </div>
  <b>Confeccion</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control repetirConfeccionCompleta" placeholder="Confeccion" id="nuevaConfeccionCompleta" name="nuevaConfeccionCompleta">
                                        </div>
                                    </div>
                                    <b>Precio</b> 
                                  
                                        <div class="input-group spinner" data-trigger="spinner">
  <span class="input-group-addon">
                                            <i class="material-icons">attach_money</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control text-center" value="6" data-rule="currency" id="nuevoPrecio" name="nuevoPrecio" min="6" max="100">
                                        </div>
                                        <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                    </div>    
                                    <b>Tipo</b>   
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">list</i>
</div>

<div class="col-lg-10 col-md-10 col-sm-8 col-xs-6">
  <div class="form-group">                 
         <div id="tipo">                                    
   <select class="form-control show-tick" required id="nuevoTipoConfeccion" name="nuevoTipoConfeccion"  >
   </select>
       </div>    
                          
</div>
</div>
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
   <a href="#modalAgregarConfeccion" data-toggle="modal" data-target="#modalAgregarConfeccion"><i class="material-icons">add_circle</i></a>
</div>
</div>                        

<b>Prenda</b>    
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">list</i>
</div>

<div class="col-lg-10 col-md-10 col-sm-8 col-xs-6">
  <div class="form-group">                 
         <div id="prenda">                                    
   <select class="form-control show-tick" required name="nuevaPrendaConfeccion" id="nuevaPrendaConfeccion" >
   </select>
       </div>    
                          
</div>
</div>
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
   <a href="#modalAgregarPrenda" data-toggle="modal" data-target="#modalAgregarPrenda"><i class="material-icons">add_circle</i></a>
</div>
</div>                        

<b>Proveedor</b>    
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
<i class="material-icons">store</i>
</div>

<div class="col-lg-10 col-md-10 col-sm-8 col-xs-6">
  <div class="form-group">                 
         <div id="proveedor">                                    
   <select class="form-control show-tick" required name="nuevoProveedorConfeccion" id="nuevoProveedorConfeccion" >
   </select>
       </div>    
                          
</div>
</div>
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
   <a href="#modalAgregarProveedor" data-toggle="modal" data-target="#modalAgregarProveedor"><i class="material-icons">add_circle</i></a>
</div>
</div> 
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarConfeccionCompleta" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left" id="cerrarModalConfeccionCompleta" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>

            </form>
                </div>
            </div>
            </div>
   <div class="modal fade" id="modalAgregarPrenda" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
         <form role="form" method="post" id="formNuevaPrenda">
        
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Prenda</h4>
                        </div>
                        <div class="modal-body">
  <b>Categoria</b> 
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
    <i class="material-icons">pie_chart</i>
</div>  
<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">  
     <div id="categoria" >
            <select class="form-control show-tick" required name="nuevaCategoriaPrenda" id="nuevaCategoriaPrenda" >
                                                 
                                </select>  
                            
                                </div>
</div>
</div>
 
</div>


                                 
  <b>Subcategoria</b> 
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
    <i class="material-icons">pie_chart</i>
</div>  
<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">  
   <div id="subcategoria" >
            <select class="form-control show-tick" required name="nuevaSubcategoriaPrenda" id="nuevaSubcategoriaPrenda" >
                                                 
                                </select>    
                                </div>
</div>
</div>

</div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarPrenda">GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left" id="cerrarModalPrenda" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
            </form>
                </div>
            </div>
            </div>
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
                            <button type="button" class="btn btn-link waves-effect pull-left " id="cerrarModalProveedor" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
            </form>
                </div>
            </div>
            </div>

             <!-- Modal agregar confeccion-->
      <div class="modal fade" id="modalAgregarConfeccion" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" id="formNuevaConfeccion">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Tipo Confeccion</h4>
                        </div>
                        <div class="modal-body">
                              <b>Clave</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control repetirConfeccion" placeholder="Clave" name="nuevaClaveConfeccion" id="nuevaClaveConfeccion">
                                                 <input type="hidden" id="idConfeccion" >

                                        </div>
                                    </div>
                              <b>Confeccion</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control repetirConfeccion" placeholder="Confeccion" id="nuevaConfeccion" name="nuevaConfeccion">
                                        </div>
                                    </div>
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarConfeccion" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModalConfeccion"  data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
            </form>
                </div>
            </div>
            </div>
      

