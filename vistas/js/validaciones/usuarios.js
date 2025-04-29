$( document ).ready(function() {
$("#formNuevoUsuario").validate({  
      rules: {     
        nuevoNombre:{
                            required:true,
                            minlength:10
                        },
        nuevoContacto:{
                            required:true,
                            minlength:5
                        },
        nuevoEmail:{
                            required:true,
                            email:true
                        },
      
         },
         messages:{
             nuevoNombre :{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 10 caracteres" 
            },
             nuevoContacto:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 5 caracteres" 
            },
            nuevoTelefono:{
                required:"Este campo es obligatorio"
            },
            nuevoEmail:{
                required:"Este campo es obligatorio",
                email: "Ingrese cuenta de email valida"
            }
        
         }

    });
  });