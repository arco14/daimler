$( document ).ready(function() {


$("#formNuevaConfeccion").validate({  
      rules: {              
        nuevaClaveConfeccion:{
                            required:true,
                            minlength:2
                        },
        nuevaConfeccion:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            nuevaClaveConfeccion:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevaConfeccion:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            }
         }

    })

$("#formNuevaConfeccionCompleta").validate({  
      rules: {              
        nuevaClaveConfeccionCompleta:{
                            required:true,
                            minlength:3
                        },
        nuevaConfeccionCompleta:{
                            required:true,
                            minlength:10
                        },
         },
         messages:{
            nuevaClaveConfeccionCompleta:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
         nuevaConfeccionCompleta:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 10 caracteres" 
            },
         nuevoPrecio:{
                required:"Este campo es obligatorio",
                min:"Este campo debe ser mayor o igual a 6",
                max:"Este campo debe ser menor o igual a 1000"
            },
         nuevoTipoConfeccion:{
                required:"Este campo es obligatorio"
         },
         nuevaCategoriaConfeccion:{
                required:"Este campo es obligatorio"
         },
         nuevoProveedorConfeccion:{
                required:"Este campo es obligatorio"
         }
         }

    })
$("#formNuevaPrenda").validate({  
     
         messages:{
            nuevaCategoriaPrenda:{
                required:"Este campo es obligatorio" 
            },
             nuevaSubcategoriaPrenda:{
                required:"Este campo es obligatorio"
            }
        
         }

    });


});
