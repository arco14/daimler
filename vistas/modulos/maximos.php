<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                  Maximos y Minimos
                </h2>
            </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">      
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                          <div class="pull-right">
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarMaximo" id="clickMaximo">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>   
                                 <br>      
                              <table class="table table-bordered text-center" id="tablaMaximos" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th>Clave</th>
                                            <th>Descripcion</th>
                                            <th>Minimo</th>
                                            <th>Maximo</th>     
                                            <th style="width:78px">Activo</th>
                                            <th style="width:78px">Acciones</th>    
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px" >#</th>
                                            <th >Clave</th>
                                            <th>Descripcion</th>
                                            <th>Minimo</th>
                                            <th>Maximo</th>
                                            <th style="width:78px">Activo</th>
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
    </section> 
            <!-- Modal agregar proveedor-->
      <div class="modal fade" id="modalAgregarMaximo" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog modal-lg" role="document">
                     <form role="form" method="post" id="formNuevoMaximo">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Maximo</h4>
                        </div>
                        <div class="modal-body">
                              
  <b>Clave</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Clave" id="nuevaClaveMaximo" name="nuevaClaveMaximo">
                                            <input type="hidden" id="idMaximo" name="idMaximo">
                                            <input type="hidden" id="idGenero" name="idGenero">
                                            
                                        </div>
                                    </div>
        <b>Descripcion</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Descripcion" id="nuevoMaximo" name="nuevoMaximo">
                                        </div>
                                    </div>  
                     
<div class="row clearfix" id="controlDivision">
    <b>Division</b>  
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">list</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div id="division">                                    
   <select class="form-control show-tick" required id="nuevaDivisionMaximo" name="nuevaDivisionMaximo"  >
   </select>
       </div>    
                          
</div>
</div>

</div>
       
<div class="row clearfix" id="controlGenero">
  <b>Genero</b>  
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">list</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div id="genero">                                    
   <select class="form-control show-tick" required id="nuevoGeneroMaximo" name="nuevoGeneroMaximo">
   </select>
       </div>    
                          
</div>
</div>

</div>

<div id="detalleMaximos">
    


     <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <!-- Nav tabs -->
                                    <ul class="nav nav-tabs tab-nav-right" role="tablist">
                                        <li role="presentation" id="tabTallas" class="active"><a href="#tab_1" data-toggle="tab">TALLAS</a></li>
                                     <li role="presentation" id="tabAlmacenes"><a href="#tab_2" data-toggle="tab">ALMACENES</a></li> 
                                        <li role="presentation" id="tabEstilos"><a href="#tab_3" data-toggle="tab" >ESTILOS</a></li>
                                       
                                    </ul>
                                    <!-- Tab panes -->
                                    <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane animated fadeInRight active" id="tab_1">
   
                                  <table class="table table-bordered text-center" id="tablaTallas" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th>Talla</th>
                                                <th>Minimo</th>
                                            <th>Maximo</th>
                                          
                                        
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px" >#</th>
                                            <th >Talla</th>
                                             <th>Minimo</th>   
                                            <th>Maximo</th>
                                             
                                                                                  
                                        </tr>
                                    </tfoot>  
                               </table>
                     
                                    </div>
                                    <div role="tabpanel" class="tab-pane animated fadeInRight " id="tab_2">
                                             <div class="row clearfix">
<div class="col-lg-10 col-md-10 col-sm-10 col-xs-9">
   <div class="form-group">
                                                                                    
   <div id="almacen">
    <select class="form-control show-tick" required id="nuevoAlmacenMaximo" name="nuevoAlmacenMaximo"  >
    </select>
 </div>                 
</div>
</div>

<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
 <button type="button" class="btn btn-info" id="agregarMaximoAlmacen"><i class="material-icons">add_circle</i></button>
</div>
</div>



                                          <table class="table table-bordered text-center" id="tablaAlmacenes" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th>Almacen</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px" >#</th>
                                            <th >Almacen</th>                                  
                                        </tr>
                                    </tfoot>  
                               </table>

                                    </div>
                                       <div role="tabpanel" class="tab-pane animated fadeInRight " id="tab_3">
                                           <div class="row clearfix">
                                       

                                                  
 
<div class="col-lg-10 col-md-10 col-sm-10 col-xs-9">
   <div class="form-group">
                                                                                    
   <div id="linea">
    <select class="form-control show-tick" required id="nuevoEstiloMaximo" name="nuevoEstiloMaximo"  >
    </select>
 </div>                 
</div>
</div>

<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 form-control-label">
 <button type="button" class="btn btn-info" id="agregarEstiloMaximo"><i class="material-icons">add_circle</i></button>
</div>

       </div>                                   
                                         
<table class="table table-bordered text-center" id="tablaEstilos" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th>Estilo</th>
                                            <th>Color</th>
                                            <th>Contraste</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px" >#</th>
                                            <th >Estilo</th>
                                            <th >Color</th>
                                            <th>Contraste</th>                
                                        </tr>
                                    </tfoot>  
                               </table>


                                         
 
                                  
                                       </div>
                                  </div>

                                </div>

</div>


                     
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarMaximo" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModal" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
            </form>
                </div>
            </div>
            </div>
          