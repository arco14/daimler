$( document ).ready(function() {

$("#formNuevaEntrega").validate({  
      rules: {              
         },
         messages:{
            paqueteCamisa:{
                 required:"*"
            },
            paquetePantalon:{
                 required:"*" 
            }

         }

    });
});
