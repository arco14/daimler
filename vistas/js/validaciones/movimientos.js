$( document ).ready(function() {


$("#formNuevoMovimiento").validate({  
      rules: {     
        nuevoDocumentoMovimiento:{
                            required:true,
                            minlength:3
                        }
      
         },
         messages:{
             nuevoDocumentoMovimiento:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
             
            nuevoAlmacenMovimiento:{
                required:"Este campo es obligatorio"
            },
            nuevoTipoMovimiento:{
                required:"Este campo es obligatorio"
            }
         }

    });


});
