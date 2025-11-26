<div class="modal fade" id="modalFile" tabindex="-1" role="dialog" data-focus="false" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header dragable_touch">
                <p id='addTitle' class='modal-title'>Cargar Archivo</p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="d-flex flex-column mt-3">
                    <label>Tipo Documento:</label>
                    <div id="lookUpTipoDocumento"></div>
                </div>
                <div class="d-flex flex-column mt-3">
                    <label>Nombre:</label>
                    <div id="textBoxNombreDoc"></div>
                </div>
                <div class="d-flex flex-column mt-3">
                    <label>Descripción:</label>
                    <div id="textAreaDescripcionDoc"></div>
                </div>
                <div class="d-flex flex-column mt-3">
                    <label>Tipo Documento:</label>
                    <div class="p-2" id="fileUploader"></div>
                </div>
            </div>
            <div class="modal-footer">
                <div id="btnGuardarArchivo"></div>
                <div id="dropzone-external"></div>
            </div>
        </div>
    </div>
</div>