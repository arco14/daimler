<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                  Descuentos
                </h2>
            </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">      
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                          <div class="pull-right">
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarDescuento" id="clickDescuento">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>   
                                 <br>      
                              <table class="table table-bordered text-center" id="tablaDescuentos" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th>Fecha</th>
                                            <th>Descripcion</th>
                                            <th>Tipo</th>
                                            <th>Rango</th>  
                                            <th>Descuento</th>  
                                               
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th>Fecha</th>
                                            <th>Descripcion</th>
                                            <th>Tipo</th>
                                            <th>Rango</th>  
                                            <th>Descuento</th>  
                                                                                
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
      <div class="modal fade" id="modalAgregarDescuento" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog " role="document">
                     <form role="form" method="post" id="formNuevoDescuento">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Descuento</h4>
                        </div>
                        <div class="modal-body">              
  <b>Nombre</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Nombre" id="nuevoNombreDescuento" name="nuevoNombreDescuento">
                                            
                                            <input type="hidden" id="idGenero" name="idDescuento">
                                            
                                        </div>
                                    </div>
        <b>Descuento</b> 
         <div class="input-group spinner" data-trigger="spinner">
           <span class="input-group-addon">
                                            <i class="material-icons">monetization_on</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control text-center" value="1" data-rule="quantity"  id="nuevoDescuento" name="nuevoDescuento">
                                        </div>
                                        <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                    </div> 
    <b>Producto</b>  
    <div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">list</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div id="tipo_producto">                                    
   <select class="form-control show-tick" required id="nuevoTipoProductoDescuento" name="nuevoTipoProductoDescuento"  >
   </select>
       </div>    
                          
</div>
</div>
</div>
       

  <b>Rango</b>  
     <div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">list</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div id="rango">                                    
   <select class="form-control show-tick" required id="nuevoRangoDescuento" name="nuevoRangoDescuento">
   </select>
       </div>    
                          
</div>
</div>    
</div>                 
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarDescuento">GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModal" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
            </form>
                </div>
            </div>
            </div>
          