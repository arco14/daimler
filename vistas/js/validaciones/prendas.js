$( document ).ready(function() {


$("#formNuevoPrenda").validate({  
      rules: {     
        
      nuevaPrenda:{
                            required:true
                        },
                        nuevaLineaPrenda:{
                            required:true
                        },
                         nuevaGeneroPrenda:{
                            required:true
                        },


         },
         messages:{
             nuevaPrenda:{
                required:"Este campo es obligatorio"
            },
             nuevaLineaPrenda:{
                required:"Este campo es obligatorio" 
            },
            nuevaTelaPrenda:{
                required:"Este campo es obligatorio"
            },
            nuevoGeneroPrenda:{
                required:"Este campo es obligatorio"
            },
            nuevoMoldePrenda:{
                required:"Este campo es obligatorio"
            },
           
            nuevoGrupoAvioPrenda:{
                required:"Este campo es obligatorio"
            },
            nuevaConfeccionPrenda:{
                required:"Este campo es obligatorio"
            },
            nuevoHiloPrenda:{
                required:"Este campo es obligatorio"
            },
            editarTallaPrenda:{
                required:"Este campo es obligatorio"
            }
        
        
        
        
         }

    });




});
