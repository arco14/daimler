$( document ).ready(function() {


$("#formNuevoProveedor").validate({  
      rules: {     
        nuevoProveedor:{
                            required:true,
                            minlength:3
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
             nuevoProveedor:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
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
