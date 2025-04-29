<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                  Precios
                </h2>
            </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">      
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <ul class="nav nav-tabs tab-nav-right" role="tablist">
                                        <li role="presentation" class="active" id="tabGeneral"><a href="#tab_1" data-toggle="tab">GENERAL</a></li>
                                        <li role="presentation" id="tabPreciosConvenio"><a href="#tab_2" data-toggle="tab">CONVENIO</a></li>    
                                    </ul>
                                    <!-- Tab panes -->
                                    <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane animated fadeInRight active" id="tab_1">
<div class="pull-right">
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarPrecio" id="clickPrecio">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>   
                                 <br>       
                              <table class="table table-bordered text-center" id="tablaPrecios" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px">#</th>
                                            <th>Fecha</th>
                                            <th>Clave</th>
                                            <th>Descripcion</th>
                                            <th>Tipo</th>
                                            <th>Precio Directo</th>
                                            <th>Precio Distribuidor</th>
                                            <th>Vigencia</th>
                                            <th>Lineal</th>
                                            <th style="width:78px">Acciones</th>    
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px">#</th>
                                            <th>Fecha</th>
                                            <th>Clave</th>
                                            <th>Descripcion</th>
                                            <th>Tipo</th>
                                            <th>Precio Directo</th>
                                            <th>Precio Distribuidor</th>
                                            <th>Vigencia</th>
                                            <th>Lineal</th>
                                            <th style="width:78px">Acciones</th>    
                                        </tr>
                                    </tfoot>  
                               </table>

                                    </div>
   <div role="tabpanel" class="tab-pane animated fadeInRight " id="tab_2">
    <div class="pull-right">
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarPrecioConvenio" id="clickPrecioConvenio">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>   
                                 <br>       
                              <table class="table table-bordered text-center" id="tablaPreciosConvenio" width="100%">
                                    <thead>
                                        <tr>
                                             <th style="width:10px">#</th>
                                            <th>Fecha</th>
                                            <th>Clave</th>
                                            <th>Descripcion</th>
                                            <th>Cliente</th>
                                            <th>Tipo</th>
                                            <th>Vigencia</th>
                                            <th style="width:78px">Acciones</th>    
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px">#</th>
                                            <th>Fecha</th>
                                            <th>Clave</th>
                                            <th>Descripcion</th>
                                            <th>Cliente</th>
                                            <th>Tipo</th>
                                            <th>Vigencia</th>
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
    </section> 
      <div class="modal fade" id="modalAgregarPrecio" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" id="formNuevoPrecio">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Precio</h4>
                        </div>
                        <div class="modal-body">
                              <b>Clave</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Clave" id="nuevaClavePrecio" name="nuevaClavePrecio">
                                            <input type="hidden" id="idPrecio" value="0">
                                        </div>
                                    </div>  
 <b>Descripcion</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Descripcion" id="nuevaDescripcionPrecio" name="nuevaDescripcionPrecio">
                                        </div>
                                    </div>  
                      <b>Tipo</b>   
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">list</i>
</div>
<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div class="tipo">                                    
   <select class="form-control show-tick tipoList" required id="nuevoTipo" name="nuevoTipo">
   </select>
       </div>    
                          
</div>
</div>
</div>
    <div class="row clearfix col-md-12">
      <div class="col-md-6">
           <b>Precio Directo s/IVA</b> 
                            <div class="input-group spinner" data-trigger="spinner">
                                        <span class="input-group-addon">
                                            <i class="material-icons">attach_money</i>
                                        </span>
                                         <div class="form-line">
                                           <input type="text" class="form-control text-center" value="0" min="20" max="1100" data-rule="quantity" id="nuevoPrecioDirecto" name="nuevoPrecioDirecto">
                                        </div> 
                                  </div>                                                            
      </div>
        <div class="col-md-6">
             <b>Precio Directo c/IVA</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">attach_money</i>
                                        </span>
                                   
                                         <div class="form-line">
                                            <input type="number" class="form-control text-center" value="0" id="precioDirectoIVA" name="precioDirectoIVA" min="20" max="1100" readonly>
                                        </div> 
                               
                                  </div>
        </div>
    </div>
                                   <div  id="controlPrecioDistribuidor">
      <div class="row clearfix col-md-12">
        <div class="col-md-6">
     <b>Precio Distribuidor s/IVA</b> 
                            <div class="input-group spinner" data-trigger="spinner">
                                        <span class="input-group-addon">
                                            <i class="material-icons">attach_money</i>
                                        </span>
                                         <div class="form-line">
                                           <input type="text" class="form-control text-center preciosiva" value="0"  max="350" data-rule="quantity" id="nuevoPrecioDistribuidor" name="nuevoPrecioDistribuidor">
                                        </div> 
                                  </div> 

        </div>  
 <div class="col-md-6">

  <b>Precio Distribuidor c/IVA</b> 
                            <div class="input-group">
                                       <span class="input-group-addon">
                                            <i class="material-icons">attach_money</i>
                                        </span>
                                   
                                         <div class="form-line">
                                            <input type="number" class="form-control text-center" value="0" max="350" id="precioDistribuidorIVA" name="precioDistribuidorIVA" readonly >
                                        </div> 
                                  
                                  </div>
        </div> 

      </div>
    
   </div>
  <div class="row clearfix col-md-12">
  <div class="col-md-6">
  <b>Vigencia</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">today</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="date" class="form-control" id="nuevaVigenciaPrecio" name="nuevaVigenciaPrecio">
                                        </div>
                                    </div>

                                  </div>
                                    <div class="col-md-6">
                                        <div  id="controlLineal">
                                      <b>Lineal</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">swap_horiz</i>
                                        </span>
                                      <div id="switchLineal">
                                     </div>
                                    </div> 
                                </div>

                                    </div>
                                  </div>
                                  
 
   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="detallePrecio">
                                    <!-- Nav tabs -->
                                    <ul class="nav nav-tabs tab-nav-right" role="tablist">
                                        <li role="presentation" class="active" id="tabPrecios"><a href="#tab_10" data-toggle="tab">PRECIOS</a></li>
                                        <li role="presentation" id="tabEstilos"><a href="#tab_11" data-toggle="tab" >ESTILOS</a></li>
                                       
                                    </ul>
                                    <!-- Tab panes -->
                                    <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane animated fadeInRight active" id="tab_10">
                                  <table class="table table-bordered text-center" id="tablaPreciosRango" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Rango</th>
                                            <th>Precio</th>
                                            <th>Precio c/IVA</th>
                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Rango</th>
                                            <th>Precio</th> 
                                            <th>Precio c/IVA</th>
                                                              
                                        </tr>
                                    </tfoot>  
                               </table>
                                    </div>
                                       <div role="tabpanel" class="tab-pane animated fadeInRight " id="tab_11">
                                           <div class="row clearfix">
<div class="col-lg-10 col-md-10 col-sm-10 col-xs-9">
   <div class="form-group">
                                                                                    
   <div class="linea">
    <select class="form-control show-tick " required id="nuevoEstiloPrecio" name="nuevoEstiloPrecio"  >
    </select>
 </div>                 
</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
 <button type="button" class="btn btn-info" id="agregarEstiloPrecio"><i class="material-icons">add_circle</i></button>
</div>
       </div>                                   
                                         
<table class="table table-bordered text-center" id="tablaEstilos" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th>Estilo</th>
                                            <th>Molde</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px" >#</th>
                                            <th >Estilo</th>   
                                            <th>Molde</th>      
                                        </tr>
                                    </tfoot>  
                               </table>
                                  
                                       </div>
                                  </div>

                                </div>
                            </div>
                      
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarPrecio" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModal" data-dismiss="modal">CERRAR</button>
                   
                    </div>
                  </div>
            </form>
                </div>
            </div>
            </div>
<div class="modal fade" id="modalAgregarPrecioConvenio" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" id="formNuevoPrecioConvenio">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Precio</h4>
                        </div>
                        <div class="modal-body">
                              <b>Clave</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Clave" id="nuevaClavePrecioConvenio" name="nuevaClavePrecioConvenio">
                                            <input type="hidden" id="idPrecioConvenio" value="0">
                                        </div>
                                    </div>  
 <b>Descripcion</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Descripcion" id="nuevaDescripcionPrecioConvenio" name="nuevaDescripcionPrecioConvenio">
                                        </div>
                                    </div>  
                      <b>Tipo</b>   
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">list</i>
</div>
<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div class="tipo">                                    
   <select class="form-control show-tick " required id="nuevoTipoConvenio" name="nuevoTipoConvenio"  >
   </select>
       </div>                   
</div>
</div>

</div>
  <b>Vigencia</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">today</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="date" class="form-control" id="nuevaVigenciaPrecioConvenio" name="nuevaVigenciaPrecioConvenio">
                                        </div>
                                    </div>
                                    <b>Cliente</b>   
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">supervisor_account</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class=" form-group">                 
         <div id="cliente">                                    
   <select class="form-control show-tick" required id="nuevoClientePrecio" name="nuevoClientePrecio">
   </select>
       </div>    
                          
</div>
</div>

</div>
          </form>
<div id="detallePrecioConvenio">

<div class="pull-right ">
 <button class="btn bg-cyan waves-effect m-b-15" type="button" data-toggle="collapse" data-target="#collapsePrecio" aria-expanded="false" aria-controls="collapsePrecio" id="collapseBoton">
                                Nuevo Precio
                            </button>
  </div>
      
                            <div class="collapse" id="collapsePrecio">
                              <br>
                              <br>
                              <br>
 <div class="row clearfix">

<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6">
   <div class="form-group">
                                                                                    
   <div class="linea">
    <select class="form-control show-tick" required id="nuevoEstiloPrecioConvenio" name="nuevoEstiloPrecioConvenio"  >
    </select>
 </div>                 
</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
   <div class="input-group spinner" data-trigger="spinner">
                                         <div class="form-line">
                                           <input type="text" class="form-control text-center"  data-rule="quantity" id="nuevoPrecioConvenio" name="nuevoPrecioConvenio">
                                        </div> 
                                  </div> 
</div>
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
 <button type="button" class="btn btn-info " id="agregarEstiloPrecioConvenio" ><i class="material-icons">add_circle</i></button>
</div>
       </div> 
                            </div>
                            <br>
                            <br>


      

<table class="table table-bordered text-center" id="tablaEstilosConvenio" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th>Estilo</th>
                                            <th>Molde</th>
                                            <th>Precio</th>
                                            <th>Precio c/IVA</th>
                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px" >#</th>
                                            <th >Estilo</th>   
                                            <th>Molde</th>
                                            <th>Precio</th>
                                            <th>Precio c/IVA</th>
                                            
                                        </tr>
                                    </tfoot>  
                               </table>                                                            
  </div>
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarPrecioConvenio" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModal" data-dismiss="modal">CERRAR</button>

                    </div>
                  </div>
  
                </div>
            </div>
            </div>

            
          
          