<section class="content">
<div class="container-fluid">
            <div class="block-header">
                <h2>
                    Clientes
                </h2>
            </div>
            <!-- Basic Examples -->
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="body">
                             <div class="pull-right">
<button type="button" class="btn btn-info btn-circle-lg waves-effect waves-circle waves-float" data-toggle="modal" data-target="#modalAgregarUsuario">
                                    <i class="material-icons">person_add</i>
                                </button>
                                 </div>
                           
                             <br> 
                      
                            <table class="table table-bordered table-striped table-hover js-basic-example dataTable text-center" width="100%">
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
                                    <tbody>
                                    </tbody>
                                  </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>



<!-- <div class="content-wrapper">
  
    <section class="content-header">
      <h1>
      Clientes
      
      </h1>
    
    </section>

   
    <section class="content">

    
      <div class="box box-primary">
        <div class="box-header with-border">
<button type="button" class="btn btn-success btn-floated">
                  <span class="fa fa-plus"></span>
                </button>
     <button class="btn btn-success btn-floated" data-toggle="modal" data-target="#modalAgregarCliente">
<i class="fa fa-plus-circle" ></i>
     </button>


        </div>
        <div class="box-body">

          <table class="table table-bordered table-striped dt-responsive tablas" width="100%">
          <thead>
            <tr>
              <th style="width:10px">#</th>
               <th>Nombre</th> 
               <th>Documento</th> 
               <th>Email</th> 
               <th>Teléfono</th> 
               <th>Fecha</th> 
               <th>Acciones</th>
            </tr>
          </thead>
           <tbody>
<?php
$item=null;
$valor=null;
$clientes=ControladorCliente::ctrMostrarClientes($item,$valor);
foreach ($clientes as $key => $value) {
  echo '   <tr>
               <td>'.($key+1).'</td>
                <td>'.$value["nombre"].'</td>
                <td>'.$value["documento"].'</td>
                 <td>'.$value["email"].'</td> 
                 <td>'.$value["telefono"].'</td>
                 <td>'.$value["fecha"].'</td>
                 <td>
                   <div class="btn-group">
                  <button class="btn btn-sm btn-secondary btnEditarCliente" data-toggle="modal" data-target="#modalEditarCliente" idCliente="'.$value["id"].'"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-danger"><i class="fa fa-times"></i></button>
                    
                   </div>

                 </td> 
            </tr>';
}
?>
          
           </tbody> 
           </table>
        </div>
      </div>

    </section>

  </div>




     <div id="modalAgregarCliente" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <form role="form" method="post">
      <div class="modal-header" style="background:#3c8dbc; color:white ">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Agregar cliente</h4>
      </div>
      <div class="modal-body">
 <div class="box-body">

     <div class="form-group">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-user"></i></span>
<input type="text" class="form-control input-lg" name="nuevoCliente" placeholder="Ingresar cliente" required>

</div>
     </div>
      <div class="form-group">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-key"></i></span>
<input type="number" class="form-control input-lg" name="nuevoDocumentoId" min="0" placeholder="Ingresar documento" required>

</div>
     </div>
           <div class="form-group">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-envelope"></i></span>
<input type="email" class="form-control input-lg" name="nuevoEmail" placeholder="nombre@ejemplo.com" required>

</div>
     </div>
      <div class="form-group">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-phone"></i></span>
<input type="text" class="form-control input-lg" name="nuevoTelefono" placeholder="Ingresar teléfono" data-inputmask="'mask':'(999) 999-9999'" data-mask required>

</div>
     </div>
      <div class="form-group">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-map-marker"></i></span>
<input type="text" class="form-control input-lg" name="nuevaDireccion" placeholder="Ingresar dirección" required>
  
</div>
     </div>

</div>
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Salir</button>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </div>
<?php
$crearCliente=new ControladorCliente();
$crearCliente->ctrCrearCliente();

?>
    </form>
    </div>
  </div>
</div>




     <div id="modalEditarCliente" class="modal fade" role="dialog">
  <div class="modal-dialog">


    <div class="modal-content">

      <form role="form" method="post">
      <div class="modal-header" style="background:#3c8dbc; color:white ">

        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Editar cliente</h4>
      </div>
      <div class="modal-body">
 <div class="box-body">

     <div class="form-group">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-user"></i></span>
<input type="text" class="form-control input-lg" name="editarCliente"   id="editarCliente" required>
<input type="hidden" id="idCliente" name="idCliente">
</div>
     </div>
      <div class="form-group">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-key"></i></span>
<input type="number" class="form-control input-lg" name="editarDocumentoI id="editarDocumentd" min="0"  required>

</div>
     </div>
           <div class="form-group">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-envelope"></i></span>
<input type="email" class="form-control input-lg" name="editarEmail"   id="editarEmail"  required>

</div>
     </div>
      <div class="form-group">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-phone"></i></span>
<input type="text" class="form-control input-lg" name="editarTelefono"  id="editarTelefono data-inputmask="'mask':'(999) 999-9999'" data-mask required>

</div>
     </div>
      <div class="form-group">
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-map-marker"></i></span>
<input type="text" class="form-control input-lg" name="editarDireccion" id="editarDireccio"  required>
  
</div>
     </div>

    




</div>
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Salir</button>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </div>
<?php
$editarCliente=new ControladorCliente();
$editarCliente->ctrEditarCliente();

?>
    </form>
    </div>

  </div>
</div>-->
