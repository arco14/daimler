<?php
    include_once './view/scripts/globals.php';
?>
<style>
    .box-login {
        width: 100vw;
        height: 100vh;
        background-image: url('./view/assets/img/bg-daimler.jpg');
        background-size: cover;
        background-position: 100;
        background-repeat: no-repeat;
    }

    .imgJumaco {
        width: 450px;
        height: 100px;
    }

    .login-box-msg {
        color: #092b51;
    }

    @media screen and (min-width:321px) and (max-width:1023px) {
        .box-login {
            padding: 0 0.8rem;
            margin-top: -3rem;
        }

        .imgJumaco {
            width: 320px;
        }
    }
</style>
<div class="d-flex align-items-center justify-content-center box-login">
    <div class="card">
        <div class="card-body login-card-body card-primary card-outline shadow-lg p-lg-5 p-4">
            <form id="validateUser">
                <div class="d-flex flex-column justify-content-center align-content-center">
                    <img class="imgJumaco" src="./view/assets/img/login.png" alt="JumacoLogin">
                    <div class="form-group mt-5">
                        <label for="textBoxUser">Usuario:</label>
                        <div id="textBoxUser"></div>
                    </div>
                    <div class="form-group mt-2">
                        <label for="textBoxPassword">Pasword:</label>
                        <div id="textBoxPassword"></div>
                    </div>
                    <div id="btnValidate" class="mt-2"></div>
                </div>
            </form>
            <input type="hidden" id="userActive">
        </div>
    </div>
</div>
<script src="./view/components/loadAPI.js"></script>
<script src="./view/components/loadFiles.js"></script>
<script src="./view/components/textBox.js"></script>
<script src="./view/components/button.js"></script>
<script src='./view/components/fileUploader.js'></script>
<script src="./view//includes//login.js"></script>