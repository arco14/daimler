<div class="modal fade" id="modalUpdatePassword" tabindex="-1" role="dialog" aria-labelledby="passwordModalLabel"
    aria-hidden="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header card-success card-outline dragable_touch">
                <p class="modal-title" id="passwordModalLabel">Actualiza Contraseña</p>
            </div>
            <form id="password-form">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="password">Contraseña:</label>
                        <div id="password-container" class="password-container"></div>
                        <div id="password-strength" class="password-strength">
                            <span id="min-length" class="invalid">
                                Mínimo 10 caracteres
                            </span>
                            <span id="uppercase" class="invalid">
                                Debe contener al menos una mayúscula
                            </span>
                            <span id="special-char" class="invalid">
                                Debe contener al menos un símbolo especial
                            </span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" id="generate-password" class="btn btn-primary text-white">Generar
                        Contraseña</button>
                    <div class="px-3" id="btnUpdatePassword"></div>
                </div>
            </form>
        </div>
    </div>
</div>