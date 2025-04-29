$( document ).ready(function() {


$("#formNuevoMaximo").validate({  
      rules: {              
        nuevaClaveMaximo:{
                            required:true,
                            minlength:2
                        },
        nuevoMaximo:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            nuevaClaveMaximo:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevoMaximo:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            nuevaDivisionMaximo:{
                  required:"Este campo es obligatorio"
            },
          nuevoGeneroMaximo:{
                  required:"Este campo es obligatorio"
            },
          nuevoAlmacenMaximo:{
                  required:"Este campo es obligatorio"
            },
          nuevoEstiloMaximo:{
                  required:"Este campo es obligatorio"
            }
              
         }

    })

});
