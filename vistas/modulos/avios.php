<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                 AVIOS  
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
                                        <li role="presentation"><a href="#tab_2" data-toggle="tab">AVIOS</a></li> 
                                        <li role="presentation"><a href="#tab_3" data-toggle="tab">GRUPOS</a></li>     
                                        <li role="presentation"><a href="#tab_4" data-toggle="tab">HILOS</a></li>     
                                        
                                    </ul>
                                    <!-- Tab panes -->
                                    <div class="tab-content">
                                      <div role="tabpanel" class="tab-pane fade in active" id="tab_1">  
                                          <div class="pull-right">
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarTipoAvio" id="clickTipoAvio">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>   
                                 <br>
                                
                              <table class="table table-bordered text-center" id="tablaTipoAvios" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th>Tipo</th>
                                            <th style="width:78px">Activo</th>
                                            <th style="width:78px">Actualizar</th>    
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th>Tipo</th>
                                            <th style="width:78px">Activo</th>
                                            <th style="width:78px">Actualizar</th>                                        
                                        </tr>
                                    </tfoot>
                                           
                               </table>
                         
                                      </div>
                                         <div role="tabpanel" class="tab-pane fade in" id="tab_2">    
                                      <div class="pull-right">
                                        <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarAvio" id="clickAvio">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>
                                 <br>
                                    <table class="table table-bordered table-hover text-center" id="tablaAvios" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th >Avio</th>
                                            <th >Precio</th>
                                            <th >Tipo</th>
                                            <th >Proveedor</th>
                                             <th >Medida</th>
                                            <th >Activo</th>
                                            <th style="width:78px">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                          <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th >Avio</th>
                                            <th >Precio</th>
                              
                                            <th >Tipo</th>
                                            <th >Proveedor</th>
                                             <th >Medida</th>
                                            <th >Activo</th>
                                            <th style="width:78px">Acciones</th>          
                                        </tr>
                                    </tfoot>
                               </table>   
                             </div>
                                         

     <div role="tabpanel" class="tab-pane fade in " id="tab_3">  
  <div class="pull-right">
                                        <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarGrupoAvio" id="clickGrupoAvio">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>
                                 <br>
                                    <table class="table table-bordered table-hover text-center" id="tablaGrupoAvios" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th >Grupo</th>
                                              <th >Precio</th>
                                            <th >Prenda</th>
                                          
                                            <th >Activo</th>
                                            <th style="width:78px">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                         <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th >Grupo</th>
                                               <th >Precio</th>
                                            <th >Prenda</th>
                                         
                                            <th >Activo</th>
                                            <th style="width:78px">Acciones</th>        
                                        </tr>
                                    </tfoot>
                               </table>   

     </div>
          <div role="tabpanel" class="tab-pane fade in " id="tab_4"> 
             <div class="pull-right">
                                        <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarHilo" id="clickHilo">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>
                                 <br>
                                    <table class="table table-bordered table-hover text-center" id="tablaHilos" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th >Color</th>
                                            <th >Proveedor</th>
                                            <th >Activo</th>
                                            <th style="width:78px">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                         <th style="width:10px" >#</th>
                                           <th >Clave</th>
                                            <th >Color</th>
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
     <div class="modal fade" id="modalAgregarHilo" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" id="formNuevoHilo">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Hilo</h4>
                        </div>
                        <div class="modal-body">
                          
                              <b>Clave</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Clave" name="nuevaClaveHilo" id="nuevaClaveHilo">
                                                  <input type="hidden" id="idHilo" >

                                        </div>
                                    </div>
  <b>Color</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">palette</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Color" id="nuevoColorHilo" name="nuevoColorHilo" >
                                        </div>
                                    </div>

                                      
<b>Proveedor</b>    
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
<i class="material-icons">store</i>
</div>

<div class="col-lg-10 col-md-10 col-sm-8 col-xs-6">
  <div class="form-group">                 
         <div class="proveedor">                                    
   <select class="form-control show-tick" required name="nuevoProveedorHilo" id="nuevoProveedorHilo" >
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
                            <button type="button" class="btn btn-link waves-effect" id="guardarHilo" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModal" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>

            </form>
                </div>
            </div>
            </div>
  <div class="modal fade" id="modalAgregarGrupoAvio" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog modal-lg" role="document">
                     <form role="form" method="post" id="formNuevoGrupoAvio">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Grupo Avio</h4>
                        </div>
                        <div class="modal-body">
                              <b>Clave</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Clave" name="nuevaClaveGrupoAvio" id="nuevaClaveGrupoAvio">
                                                  <input type="hidden" id="idGrupoAvio" >

                                        </div>
                                    </div>
  <b>Grupo</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Grupo" id="nuevoGrupoAvio" name="nuevoGrupoAvio" >
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
   <select class="form-control show-tick" required id="nuevaPrendaGrupo" name="nuevaPrendaGrupo"  >
   </select>
       </div>    
                          
</div>
</div>
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
   <a href="#modalAgregarPrenda" data-toggle="modal" data-target="#modalAgregarPrenda"><i class="material-icons">add_circle</i></a>
</div>
</div>

<div id="detalleGrupo">
<b>Precio</b> 
<div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">attach_money</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control"  id="precioGrupo" readonly="true" >
                                        </div>
                                    </div>



<b>Detalle</b>
<div class="row clearfix">
 
<div class="col-lg-7 col-md-7 col-sm-6 col-xs-3">
   <div class="form-group">
                                                                                    
   <div id="avio">
    <select class="form-control show-tick" required id="nuevoAvioGrupo" name="nuevoAvioGrupo"  >
    </select>
 </div>                 
</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
<input type="number" class="form-control" value="1" required id="cantidadAvio" name="cantidadAvio" min="1" max="17">
</div>
 <div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 
                                <input type="checkbox"id="basic_checkbox_1" checked value="1" />
                                <label for="basic_checkbox_1">Propio</label>
  
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
 <button type="button" class="btn btn-primary" id="agregarDetalleGrupo"><i class="material-icons">add_circle</i></button>
</div>
</div>
       <div  class="row clearfix">
          <div class="body table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Clave</th>
                                        <th>Avio</th>
                                        <th>Propio</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody id="bodyTablaAvios">

                                </tbody>
                            </table>
                        </div>
 </div>
</div>




                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarGrupoAvio" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left" id="cerrarModalGrupo" data-dismiss="modal">CERRAR</button>
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
         
      <div class="modal fade" id="modalAgregarAvio" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" id="formNuevoAvio">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Avio</h4>
                        </div>
                        <div class="modal-body">
                              <b>Clave</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Clave" name="nuevaClaveAvio" id="nuevaClaveAvio">
                                                  <input type="hidden" id="idAvio" >

                                        </div>
                                    </div>
  <b>Avio</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Avio" id="nuevoAvio" name="nuevoAvio">
                                        </div>
                                    </div>
                                    <b>Precio</b> 
                                  
                                        <div class="input-group spinner" data-trigger="spinner">
  <span class="input-group-addon">
                                            <i class="material-icons">attach_money</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control text-center" value="6" data-rule="currency" id="nuevoPrecio" name="nuevoPrecio" min="0" max="160">
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
   <select class="form-control show-tick" required id="nuevoTipoAvio" name="nuevoTipoAvio"  >
   </select>
       </div>    
                          
</div>
</div>
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
   <a href="#modalAgregarTipoAvio" data-toggle="modal" data-target="#modalAgregarTipoAvio"><i class="material-icons">add_circle</i></a>
</div>
</div>                        
                    
<b>Proveedor</b>    
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
<i class="material-icons">store</i>
</div>

<div class="col-lg-10 col-md-10 col-sm-8 col-xs-6">
  <div class="form-group">                 
         <div class="proveedor">                                    
   <select class="form-control show-tick" required name="nuevoProveedorAvio" id="nuevoProveedorAvio" >
   </select>
       </div>    
                          
</div>
</div>
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
   <a href="#modalAgregarProveedor" data-toggle="modal" data-target="#modalAgregarProveedor"><i class="material-icons">add_circle</i></a>
</div>
</div> 
<b>Unidad</b>    
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
<i class="material-icons">straighten</i>
</div>

<div class="col-lg-10 col-md-10 col-sm-8 col-xs-6">
  <div class="form-group">                 
         <div id="unidad">                                    
   <select class="form-control show-tick" required name="nuevaUnidadAvio" id="nuevaUnidadAvio" >
   </select>
       </div>    
                          
</div>
</div>
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
   <a href="#modalAgregar" data-toggle="modal" data-target="#modalAgregar"><i class="material-icons">add_circle</i></a>
   

</div>
</div> 
<div class="row clearfix" id="variantes">
<select id='optgroup' class='ms' multiple='multiple'  >
                                <optgroup label='TOPS'>
                                    <option value='2XS'>2XS</option>
                                    <option value='XS'>XS</option>
                                    <option value='S'>S</option>
                                    <option value='M'>M</option>
                                    <option value='L'>L</option>
                                    <option value='XL'>XL</option>
                                    <option value='2XL'>2XL</option>
                                    <option value='3XL'>3XL</option>
                                    <option value='4XL'>4XL</option>
                                </optgroup>
                                <optgroup label='PANTS'>
                                    <option value='1'>1</option>
                                    <option value='3'>3</option>
                                    <option value='5'>5</option>
                                    <option value='7'>7</option>
                                    <option value='9'>9</option>
                                    <option value='11'>11</option>
                                    <option value='13'>13</option>
                                    <option value='15'>15</option>
                                    <option value='17'>17</option>
                                    <option value='28'>28</option>
                                    <option value='30'>30</option>
                                    <option value='32'>32</option>
                                    <option value='34'>34</option>
                                    <option value='36'>36</option>
                                    <option value='38'>38</option>
                                    <option value='40'>40</option>
                                    <option value='42'>42</option>
                                    <option value='44'>44</option>
                                    <option value='46'>46</option>
                                </optgroup>
</select>
 
</div>


                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarAvio" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left" id="cerrarModalAvio" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>

            </form>
                </div>
            </div>
            </div>
   
             <!-- Modal agregar confeccion-->
      <div class="modal fade" id="modalAgregarTipoAvio" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" id="formNuevoTipoAvio">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Tipo Avio</h4>
                        </div>
                        <div class="modal-body">
                              <b>Clave</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control repetirTipoAvio" placeholder="Clave" name="nuevaClaveTipoAvio" id="nuevaClaveTipoAvio">
                                                 <input type="hidden" id="idTipoAvio" >

                                        </div>
                                    </div>
                              <b>Tipo</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control repetirTip" placeholder="Tipo" id="nuevoTipo" name="nuevoTipoAvio">
                                        </div>
                                    </div>
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarTipoAvio" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModalTipoAvio"  data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
            </form>
                </div>
            </div>
            </div>
      

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