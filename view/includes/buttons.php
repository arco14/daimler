<div id="container-buttons" class="w-100 d-flex justify-content-between align-items-center p-4">
    <div class="btnActions">
        <button id="btnAdd" class="btn btn-success" data-toggle="modal" data-target="#add" title="Crear Nuevo">
            <i class="fas fa-plus"></i>
        </button>
        <button id="btnAddContacto" class="btn btn-success d-none" title="Crear Nuevo">
            <i class="fas fa-plus"></i>
        </button>
        <button id="btnAddDireccion" class="btn btn-success d-none" title="Crear Nuevo">
            <i class="fas fa-plus"></i>
        </button>
        <button id="btnAddDatosFiscales" class="btn btn-success d-none" title="Crear Nuevo">
            <i class="fas fa-plus"></i>
        </button>
        <button id="btnUpdate" class="btn btn-warning" title="Modificar" disabled>
            <i class="fas fa-pencil-alt text-white"></i>
        </button>
        <button id="btnDelete" class="btn btn-danger d-none" title="Eliminar" disabled>
            <i class="fas fa-close text-white"></i>
        </button>
        <button id="btnSave" class="btn btn-primary d-none" title="Guardar Resgistros" disabled>
            <i class="fas fa-save text-white"></i>
        </button>
    </div>
    <div id="dropDownMod" class="dropdown">
        <button class="btn btn-primary dropdown-toggle text-white" type="button" id="triggerId" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Consultar
        </button>
        <div class="dropdown-menu dropdownConsult" aria-labelledby="triggerId">
            <a id="consultar" class="dropdown-item text-white">Consultar Activos</a>
            <a id="consultarTodo" class="dropdown-item text-white">Consultar Todos</a>
        </div>
    </div>
</div>