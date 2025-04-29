<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                    Usuarios
                </h2>
            </div>
            <!-- Basic Examples -->
         
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="body">
                                <div class="row clearfix">
                                     <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
         <div id="aniimated-thumbnials">

                          <div class="pull-right">
<button type="button" class="btn btn-info btn-circle waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarUsuario">
                                    <i class="material-icons">person_add</i>
                                </button>
                                 </div>
                           
                             <br>  
                             <br> 
                                        
                    <table class="table table-bordered table-hover text-center" id="tablaUsuarios" width="100%">
                     
                                    <thead>
                                        <tr>
                                            <th style="width:10px" >#</th>
                                            <th >Imagen</th>
                                            <th>Nombre</th>
                                            <th>Usuario</th>
                                            <th>Email</th>  
                                            <th>Perfil</th>
                                            <th style="width:40px">Estado</th>
                                            <th>Ultimo Acceso</th>
                                            <th style="width:78px">Acciones</th>    
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                           <th>#</th>
                                            <th>Imagen</th>
                                            <th >Nombre</th>
                                            <th>Usuario</th>
                                            <th>Email</th>  
                                            <th>Perfil</th>
                                            <th>Estado</th>
                                            <th>Ultimo Acceso</th>
                                            <th>Acciones</th>                                          
                                        </tr>
                                    </tfoot>
                                    <tbody >    
          

                                       
                                    </tbody>
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


<!-- MODAL INGRESAR USUARIO-->
      <div class="modal fade" id="modalAgregarUsuario" tabindex="-1" role="dialog">
         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" enctype="multipart/form-data" id="formNuevoUsuario">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Usuario</h4>
                

                        </div>
                        <div class="modal-body">
                              <b>Nombre</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">face</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control " placeholder="Nombre" required name="nuevoNombre">
                                        </div>
                                    </div>
  <b>Usuario</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">person</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control " placeholder="Usuario" required id="nuevoUsuario" name="nuevoUsuario">
                                        </div>
                                    </div>


              <b>Contraseña</b>                        
<div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">https</i>
                                        </span>
                             <div class="form-line">
                                    <input type="password" class="form-control" placeholder="Password" required name="nuevoPassword">
                                </div>
                                </div>
                           
<b>Email</b> 
                           <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">email</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control email" placeholder="example@example.com" required name="nuevoEmail">
                                            </div>
                                        </div>
    <b>Móvil</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">phone_iphone</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control mobile-phone-number" placeholder="(000) 000-00-00" required name="nuevoTelefono">
                                            </div>
                                        </div>
                                         <b>Rol</b> 
         <div class="input-group">
             <span class="input-group-addon">
                                                <i class="material-icons">people</i>
                                            </span>  
                                          
   <select class="form-control show-tick" required name="nuevoPerfil" data-live-search="true">
                                        <option value="">Seleccione Rol</option>
                                      <option value="Administrador">Administrador</option>
                                                 <option value="Almacen">Almacen</option>
                                        <option value="Bordados">Bordados</option>
                                        <option value="Contabilidad">Contabilidad</option>
                                           <option value="Vendedor">Vendedor</option>
                          
                       </select>      
</div>
<b>Foto</b>
 <div class="input-group">
<input type="file" class="nuevaFoto" name="nuevaFoto">
<p class="help-block"> Peso máximo 2 MB </p>
<img src="vistas/img/usuarios/perfil.jpg" class="img-thumbnail previsualizar" width="100px">
 </div>


<!--<div id="frmFileUpload" class="dropzone dz-clickable" >
                                <div class="dz-message">
                                    <div class="drag-icon-cph">
                                        <i class="material-icons">touch_app</i>
                                    </div>
                                    <h3>Eliga imagen a subir</h3>
                                  
                                </div>
                                
                            </div>-->


                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-link waves-effect">GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>

           
</form>




                </div>
            </div>
            </div>


          <!-- MODAL EDITAR USUARIO-->
      <div class="modal fade" id="modalEditarUsuario" tabindex="-1" role="dialog">


         <div class="demo-masked-input">
                <div class="modal-dialog" role="document">
                     <form role="form" method="post" enctype="multipart/form-data">
                    <div class="modal-content">
                        <div class="modal-header ">
                                        <h4 class="modal-title" id="defaultModalLabel">Usuario</h4>
                

                        </div>
                        <div class="modal-body">
                              <b>Nombre</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">face</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control"  required name="editarNombre" id="editarNombre">
                                        </div>
                                    </div>
<b>Usuario</b> 
                            <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">person</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control " name="editarUsuario" id="editarUsuario" value="" readonly>
                                        </div>
                                    </div>

<b>Contraseña</b>                        
<div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">https</i>
                                        </span>
                             <div class="form-line">
                                    <input type="password" class="form-control" name="editarPassword" placeholder="Escriba la nueva contraseña">
                                    <input type="hidden" id="passwordActual" name="passwordActual">
                                </div>
                                </div>
                                <b>Email</b> 
                           <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">email</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control email" required id="editarEmail" name="editarEmail">
                                            </div>
                                        </div>

 <b>Móvil</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">phone_iphone</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control mobile-phone-number" required id="editarTelefono" name="editarTelefono">
                                            </div>
                                        </div>
                                                              <b>Rol</b> 
          
<div class="input-group">
             <span class="input-group-addon">
                                                <i class="material-icons">people</i>
                                            </span>              
        

                                      <select class="form-control show-tick"  name="editarPerfil" tabindex="-98" data-live-search="true">
                                           <option value=""  id="editarPerfil"></option>
                                      <option value="Administrador">Administrador</option>
                                                 <option value="Almacen">Almacen</option>
                                        <option value="Bordados">Bordados</option>
                                        <option value="Contabilidad">Contabilidad</option>
                                           <option value="Vendedor">Vendedor</option>
                                    </select>  

</div>



  
<b>Foto</b>
 <div class="input-group">
<input type="file" class="nuevaFoto" name="editarFoto">

<p class="help-block"> Peso máximo 2 MB </p>
<div id="aniimated-thumbnials" >
<img src="vistas/img/usuarios/perfil.jpg" class="img-thumbnail previsualizar" width="100px">
</div>
 <input type="hidden" name="fotoActual" id="fotoActual">
 </div>


                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-link waves-effect">GUARDAR</button>
                            <button type="button" class="btn btn-link waves-effect pull-left" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>

      
</form>
                </div>
            </div>
            </div>
