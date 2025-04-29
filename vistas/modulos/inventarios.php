<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                  Inventarios
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
                                        </div>               
                        <div class="body">
                            <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">      
                               
                              <table class="table table-bordered text-center" id="tablaInventarios" width="100%">
                                    <thead>
                                        <tr>
                                        <th style="width:78px">Acciones</th>  
                                            <th>Prenda</th>
                                            <th>Talla</th>
                                            <th>Existencia</th>
                                           
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th style="width:78px">Acciones</th>   
                                            <th>Prenda</th>
                                            <th>Talla</th>
                                            <th>Existencia</th>
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

    <div class="modal fade" id="modalAjusteInventario" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                  
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title text-center" id="defaultModalLabel">Ajuste Inventario</h4>
                        </div>
                        <div class="modal-body">

                        <div class="row clearfix pull-right">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                         
                </div>
                     </div>
                     <input type="hidden"  name="idPrenda" id="idPrenda">
                     <input type="hidden"  name="idTalla" id="idTalla">
                     <div class="form-group"> 
                     <div class="demo-switch">
                
                <div class="switch">
                <label>SALIDA<input type="checkbox" entrada="1" checked="" id="tipoAjuste"><span class="lever"></span>ENTRADA</label>
                </div>
                            
   
        </div>
        </div>

                        <b>Cantidad</b> 
                        <div class="input-group spinner" data-trigger="spinner">
                                        <div class="form-line focused">
                                            <input type="text" class="form-control text-center" data-rule="quantity" data-max="50"  name="cantidadAjuste" id="cantidadAjuste">
                                        </div>
                                        <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                    </div>

                        <b>Comentarios</b> 
                                <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">assignment</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control"  name="comentariosAjuste" id="comentariosAjuste">
                                                    

                                            </div>
                                </div>
           
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarAjuste" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left" id="cerrarModalAjuste" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            </div>
</div>