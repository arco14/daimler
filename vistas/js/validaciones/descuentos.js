$( document ).ready(function() {


$("#formNuevoDescuento").validate({  
      rules: {              
        nuevoNombreDescuento:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            nuevoNombreDescuento:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            nuevoTipoProductoDescuento:{
                  required:"Este campo es obligatorio"
            },
          nuevoRangoDescuento:{
                  required:"Este campo es obligatorio"
            }
         }

    })

});
