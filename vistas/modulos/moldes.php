<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                  Moldes
                </h2>
            </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">      
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                          <div class="pull-right">
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarMolde" id="clickMolde">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>   
                                 <br>
                                             
                              <table class="table table-bordered text-center" id="tablaMoldes" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            
                                            <th >Clave</th>
                                            <th>Descripcion</th>
                                            <th>Prenda</th>
                                            <th>Genero</th>
                                            <th style="width:78px">Activo</th>
                                            <th style="width:78px">Acciones</th>    
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th style="width:10px" >#</th>
                                          
                                            <th >Clave</th>
                                            <th>Descripcion</th>
                                            <th>Prenda</th>
                                            <th>Genero</th>
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

      <div class="modal fade" id="modalAgregarMolde" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" id="formNuevoMolde">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Molde</h4>
                        </div>
                        <div class="modal-body">
                              
  <b>Clave</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Clave" id="nuevaClaveMolde" name="nuevaClaveMolde">
                                            <input type="hidden" id="idMolde">
                                        </div>
                                    </div>
        <b>Descripcion</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Descripcion" id="nuevoMolde" name="nuevoMolde">
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
   <select class="form-control show-tick" required id="nuevaPrendaMolde" name="nuevaPrendaMolde"  >
   </select>
       </div>    
                          
</div>
</div>
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
   <a href="#modalAgregarPrenda" data-toggle="modal" data-target="#modalAgregarPrenda"><i class="material-icons">add_circle</i></a>
</div>
</div>
      <b>Genero</b>   
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">list</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div id="genero">                                    
   <select class="form-control show-tick" required id="nuevaGeneroMolde" name="nuevaGeneroMolde">
   </select>
       </div>    
                          
</div>
</div>

</div>


 <b>Consumo Principal</b> 
  <div  class="row clearfix">
 <div class="col-md-6">
 <div class="input-group spinner" data-trigger="spinner">
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">content_cut</i>
                                        </span>
                                   
                                         <div class="form-line">
                                            <input type="text" class="form-control text-center" value="0.3" data-rule="currency" id="nuevoConsumoPrincipal" name="nuevoConsumoPrincipal" min="0.3" max="2.0">
                                        </div> 
                                     <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                  </div>

                                </div>
 </div>
  <div class="col-md-6">
 <div class="input-group spinner" data-trigger="spinner">
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">straighten</i>
                                        </span>
                                   
                                         <div class="form-line">
                                            <input type="text" class="form-control text-center" value="1.0" data-rule="currency" id="nuevoAnchoPrincipal" name="nuevoAnchoPrincipal"  min="1.0" max="2.0">
                                        </div> 
                                     <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                  </div>

                                </div>
  </div>
</div>
<b>Consumo Contraste</b> 
  <div  class="row clearfix">
 <div class="col-md-6">
 <div class="input-group spinner" data-trigger="spinner">
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">content_cut</i>
                                        </span>
                                   
                                         <div class="form-line">
                                            <input type="text" class="form-control text-center" value="0" data-rule="currency" id="nuevoConsumoContraste" name="nuevoConsumoContraste"  min="0" max="1.0">
                                        </div> 
                                     <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                  </div>

                                </div>
 </div>
  <div class="col-md-6">
 <div class="input-group spinner" data-trigger="spinner">
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">straighten</i>
                                        </span>
                                   
                                         <div class="form-line">
                                            <input type="text" class="form-control text-center" value="0" data-rule="currency" id="nuevoAnchoContraste" name="nuevoAnchoContraste"  min="0" max="2.0">
                                        </div> 
                                     <span class="input-group-addon">
                                            <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                            <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-chevron-down"></i></a>
                                        </span>
                                  </div>

                                </div>
  </div>
</div>
<div class="pull-right ">
 <button class="btn bg-cyan waves-effect m-b-15" type="button" data-toggle="collapse" data-target="#collapseVersion" aria-expanded="false" aria-controls="collapseVersion" id="collapseBoton">
                                Nueva Version
                            </button>
  </div>
      
                            <div class="collapse" id="collapseVersion">
                          <b>Fecha</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">today</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="date" class="form-control" id="nuevaFechaVersion" name="nuevaFechaVersion">
                                        </div>
                                    </div>  
                                      <b>Version</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">save</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="number" class="form-control" value="1" required id="versionMolde" min="1" max="10" readonly="true">
                                        </div>
                                    </div> 
                                 <b>Observaciones</b>         
                                     <div class="input-group">
                                       <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>

                                <div class="form-line">
                                    <textarea rows="3" class="form-control no-resize" id="nuevaObservacionVersion" name="nuevaObservacionVersion" placeholder="Observaciones" required></textarea>
                                

                                </div>
                            </div>
      

  <b>Medidas</b>
  <div class="row clearfix">

  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control-label">
<input type="file" class="form-control" name="nuevoArchivo" id="nuevoArchivo" required>
  </div>




 </div> 
      

   <b>Molde</b> 

 <div class="row clearfix">
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control-label">
<input type="file" class="form-control" name="nuevoZip" id="nuevoZip" required>
  </div>
  
 </div>
 <br>
   <div class="input-group pull-right">

  <div class="form-group">   

<button type="button" class=" form-control btn btn-block btn-info" id="agregarVersionMolde">Guardar Version</button>

  
</div>

</div>
     
         
          

                     </div>
                     <br>
                            </div>

                         
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarMolde" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModal" data-dismiss="modal">CERRAR</button>
                   

                    </div>
                  </div>
            </form>
                </div>
            </div>
            </div>

                <div class="modal fade" id="modalVersiones" tabindex="-1" role="dialog">
         
                <div class="modal-dialog" role="document">
                     
                    <div class="modal-content">
                        <div class="modal-header ">
                            <h4 class="modal-title" id="defaultModalLabel">Versiones Molde</h4>
                        </div>
                        <div class="modal-body">

       <table class="table table-bordered text-center" id="tablaVersiones" width="100%">
                                    <thead>
                                        <tr>
                                        <th>Fecha</th>
                                        <th>Version</th>
                                        <th>Medidas</th>
                                        <th>Molde</th>
                                        <th>Observaciones</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>Fecha</th>
                                        <th>Version</th>
                                        <th>Medidas</th>
                                        <th>Molde</th>
                                        <th>Observaciones</th>                                      
                                        </tr>
                                    </tfoot>  
                               </table>

 
</div>
 <div class="modal-footer">
                        
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModal" data-dismiss="modal">CERRAR</button>
                   

                    </div>


                     
                            </div>
                        
            </div>
            </div>
          
          