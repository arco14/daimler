<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                  Articulos
                </h2>
            </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">      
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                          <div class="pull-right">
                    <button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarPrenda" id="clickPrenda">
                                    <i class="material-icons">add_circle</i>
                                </button>
                                 </div>
                                 <br>   
                                 <br>
                                             
                              <table class="table table-bordered text-center" id="tablaPrendas" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th >SKU</th>
                                            <th>Descripcion</th>
                                            <th>Categoria</th>
                                            <th>Subcategoria</th>
                                            <th>Genero</th>
                                            <th>Linea</th>
                                            <th>Color</th>
                                            <th>Talla</th>
                                            <th style="width:78px">Activa</th>
                                            <th style="width:78px">Acciones</th>    
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th >SKU</th>
                                            <th>Descripcion</th>
                                            <th>Categoria</th>
                                            <th>Subcategoria</th>
                                            <th>Genero</th>
                                            <th>Linea</th>
                                            <th>Color</th>
                                             <th>Talla</th> 
                                     
                                            <th style="width:78px">Activa</th>
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

      <div class="modal fade" id="modalAgregarPrenda" tabindex="-1" role="dialog">
  
                <div class="modal-dialog modal-lg card" role="document">
                     <form role="form" method="post" id="formNuevoPrenda">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Prenda</h4>
                        </div>
                        <div class="modal-body">
                           <div class="controlesDatosPrenda">
                       

                          <b>SKU</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">code</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control"  name="claveSku" id="claveSku">
                                                  

                                        </div>
                                    </div>
                            
                             
                          <b>Descripcion</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">description</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control"  name="descripcionPrenda" id="descripcionPrenda">
                                                  

                                        </div>
                                    </div>
                                
                              </div>    
                                  
                              <b>Prenda</b>   
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">list</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div id="prenda">                                    
   <select class="form-control show-tick llenarTallas" required id="nuevaPrenda" name="nuevaPrenda"  >
   </select>
   <input type="hidden" id="idPrenda" name="idPrenda" >
       </div>    
                 
</div>
</div>

</div>

  <b>Genero</b>   
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">accessibility</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div id="genero">                                    
   <select class="form-control show-tick llenarTallas" required id="nuevoGeneroPrenda" name="nuevoGeneroPrenda">
   </select>
       </div>    
                          
</div>
</div>

</div>

<b>Linea</b> 
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">flag
</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div id="linea">                                    
   <select class="form-control show-tick" required id="nuevaLineaPrenda" name="nuevaLineaPrenda">
   </select>
       </div>    
                          
</div>
</div>

</div>
<b>Color</b> 
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">palette
</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div id="color">                                    
   <select class="form-control show-tick" required id="nuevoColorPrenda" name="nuevoColorPrenda">
   </select>
       </div>    
                          
</div>
</div>

</div>


<div class="controlesDatosPrenda">
<b>Talla</b> 
<div class="row clearfix">
<div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label">
 <i class="material-icons">description</i>
</div>

<div class="col-lg-11 col-md-11 col-sm-10 col-xs-9">
  <div class="form-group">                 
         <div id="talla">                                    
   <select class="form-control show-tick" required id="editarTallaPrenda" name="editarTallaPrenda">

   </select>

       </div>    
                      
</div>
</div>

</div>

</div>
<div class="row clearfix" id="tallas">



  </div>
        
                 
                                    
                          






                            </div>

                         
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link waves-effect" id="guardarPrenda" >GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left cerrarModal" data-dismiss="modal">CERRAR</button>
                   

                    </div>
                  </div>
            </form>
                </div>
                        </div>

            
          
          