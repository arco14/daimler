$( document ).ready(function() {


$("#formNuevoTipoAvio").validate({  
      rules: {              
        nuevaClaveTipoAvio:{
                            required:true,
                            minlength:2
                        },
        nuevoTipoAvio:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            nuevaClaveTipoAvio:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevoTipoAvio:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            }
         }

    })

$("#formNuevoAvio").validate({  
      rules: {              
        nuevaClaveAvio:{
                            required:true,
                            minlength:2
                        },
        nuevoAvio:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            nuevaClaveAvio:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevoAvio:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            nuevoTipoAvio:{
                  required:"Este campo es obligatorio"
            },
            nuevoProveedorAvio:{
                  required:"Este campo es obligatorio"
            },
            nuevaUnidadAvio:{
                  required:"Este campo es obligatorio"
            }
         }

    })
$("#formNuevoHilo").validate({  
      rules: {              
        nuevaClaveHilo:{
                            required:true,
                            minlength:2
                        },
        nuevoColorHilo:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            nuevaClaveHilo:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevoColorHilo:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            nuevaMarcaHilo:{
                  required:"Este campo es obligatorio"
            }
         }

    })




});
