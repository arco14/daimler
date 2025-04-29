$( document ).ready(function() {


$("#formNuevoMolde").validate({  
      rules: {              
        nuevaClaveMolde:{
                            required:true,
                            minlength:3
                        },
        nuevoMolde:{
                            required:true,
                            minlength:10
                        }   ,
        nuevoConsumoPrincipal:{
                            required:true
                        } ,
        nuevoAnchoPrincipal:{
                            required:true
                        } ,
        nuevaObservacionVersion:{
                            required:true,
                            minlength:10
                        } ,
        nuevaFechaVersion:{
            required:true
        }

         },
         messages:{
           nuevaFechaVersion:{
                required:"Este campo es obligatorio" 
            },
            nuevaClaveMolde:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
             nuevoMolde:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 10 caracteres" 
            },
                       nuevoConsumoPrincipal:{
                required:"Este campo requiere minimo un valor minimo 0.3"
                        } ,
            nuevoAnchoPrincipal:{
                             required:"Este campo es obligatorio",
                minimo:"Este campo requiere minimo un valor minimo 1.0" 
                        } ,
             nuevaObservacionVersion:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 10 caracteres" 
            },
             nuevaPrendaMolde:{
                required:"Este campo es obligatorio" 
            },
             nuevaGeneroMolde:{
                required:"Este campo es obligatorio" 
            },
             nuevoArchivo:{
                required:"Este campo es obligatorio" 
            },
             nuevoZip:{
                required:"Este campo es obligatorio" 
            }
         }

    })




});
