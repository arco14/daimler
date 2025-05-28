<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                  Toma Tallas
                </h2>
            </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          
                    <div class="card">

                        <div class="body" >
                            <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">


                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="info-box bg-cyan hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">help</i>
                        </div>
                        <div class="content">
                            <div class="text">HEAD COUNT</div>
                            <div class="number " data-from="0"  data-speed="1000" data-fresh-interval="20" id='tituloHC'></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="info-box bg-orange hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">person_add</i>
                        </div>
                        <div class="content">
                            <div class="text">REGISTRADOS (DIA)</div>
                            <div class="number"  id='tituloRegistradosDia'></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="info-box bg-orange hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">person_add</i>
                        </div>
                        <div class="content">
                            <div class="text">REGISTRADOS </div>
                            <div class="number"  id='tituloRegistrados'></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="info-box bg-pink hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">playlist_add_check</i>
                        </div>
                        <div class="content">
                            <div class="text">PORCENTAJE</div>
                            <div class="number " data-from="0"  data-speed="1000" data-fresh-interval="20" id='tituloMeta'></div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div class="row clearfix">                               
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">        
                
                <!-- Nav tabs -->
                                    <ul class="nav nav-tabs tab-nav-right" role="tablist">
                                        <li id="tabResumen" class="active"><a href="#tab_1" data-toggle="tab">RESUMEN</a></li>
                                         <!--  <li id="tabResumenEspecialidades" ><a href="#tab_5" data-toggle="tab">TL, BGD y COMISION</a></li>  --> 
                                        <li role="presentation" id="tabFaltantes"><a href="#tab_2" data-toggle="tab">FALTANTES</a></li>
                                         <!-- <li role="presentation" id="tabResumenFactura"><a href="#tab_6" data-toggle="tab">RESUMEN_FACTURA</a></li>  --> 
                                        <li role="presentation" id="tabRegistrados"><a href="#tab_3" data-toggle="tab">REGISTRADOS</a></li>
                                       <!--  <li role="presentation" id="tabExistencias"><a href="#tab_4" data-toggle="tab">EXISTENCIAS</a></li>--> 
                    
                                        
                                    </ul>
                                    <!-- Tab panes -->
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane fade in" id="tab_3">
                                        <table class="table table-bordered text-center" id="tablaRegistrados" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Numero Empleado</th>
                                            <th>Nombre</th>
                                            <th>Area</th>
                                            <th>Puesto</th>
                                            <th>Turno</th> 
                                            <th>Camisa</th>
                                            <th>Pantalon</th> 
                                            <th>Sudadera</th> 
                                            <th>Comentario</th> 
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th >Numero Empleado</th>
                                            <th>Nombre</th>
                                            <th>Area</th>
                                            <th>Puesto</th>
                                            <th>Turno</th>   
                                            <th>Camisa</th>
                                            <th>Pantalon</th> 
                                            <th>Sudadera</th> 
                                            <th>Comentario</th>                      
                                        </tr>
                                    </tfoot>  
                               </table>
                                        </div>    
                                    <div role="tabpanel" class="tab-pane fade in" id="tab_2">
                                    <table class="table table-bordered text-center" id="tablaFaltantes" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Numero Empleado</th>
                                            <th>Nombre</th>
                                            <th>Area</th>
                                            <th>Puesto</th>
                                            <th>Turno</th> 
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th >Numero Empleado</th>
                                            <th>Nombre</th>
                                            <th>Area</th>
                                            <th>Puesto</th>
                                            <th>Turno</th>                         
                                        </tr>
                                    </tfoot>  
                               </table>
                             
                                        </div>
                                  <div role="tabpanel" class="tab-pane fade in active" id="tab_1">
                                    <table class="table table-bordered text-center" id="tablaResumen" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Numero Entrega</th>
                                                <th>Area</th>
                                                <th>Puesto</th>
                                                <th>HC</th>
                                                <th>Registrados</th>  
                                                <th>Faltantes</th> 
                                                <th>Porcentaje</th> 
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Numero Entrega</th>
                                                <th>Area</th>
                                                <th>Puesto</th>
                                                <th>HC</th>
                                                <th>Registrados</th>  
                                                <th>Faltantes</th>
                                                <th>Porcentaje</th>                                 
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