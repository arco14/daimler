$( document ).ready(function() {


$("#formNuevoPrecio").validate({  
      rules: {              
        nuevaClavePrecio:{
                            required:true,
                            minlength:2
                        },
        nuevaDescripcionPrecio:{
                            required:true,
                            minlength:3
                        }  ,
             nuevoPrecioDirecto:{
                            required:true,
                            min:20,
                            max:1100
                        }                            
         },
         messages:{
            nuevaClavePrecio:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevaDescripcionPrecio:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
             nuevoPrecioDirecto:{
                required:"Este campo es obligatorio",
                min:"Este campo requiere minimo un valor de 20" ,
                max:"Este campo acepta como mayor un valor de 1100"
            },
            nuevoTipo:{
                  required:"Este campo es obligatorio"
            },
            nuevoEstiloPrecio:{
                  required:"Este campo es obligatorio"
            }
              
              
         }

    })
$("#formNuevoPrecioConvenio").validate({  
      rules: {              
        nuevaClavePrecioConvenio:{
                            required:true,
                            minlength:2,
                            maxlength:10
                        },
        nuevaDescripcionPrecioConvenio:{
                            required:true,
                            minlength:3
                        }       ,
             nuevoPrecioConvenio:{
                            required:true,
                            min:20,
                            max:350
                        }                         
         },
         messages:{
            nuevaClavePrecioConvenio:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" ,
                maxlength:"Este campo requiere maximo 10 caracteres" ,
                  
            },
             nuevaDescripcionPrecioConvenio:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
             nuevoPrecioConvenio:{
                required:"Este campo es obligatorio",
                min:"Este campo requiere minimo un valor de 20" ,
                max:"Este campo acepta como mayor un valor de 350"
            },
            nuevoTipoConvenio:{
                  required:"Este campo es obligatorio"
            },
            nuevoClientePrecio:{
                  required:"Este campo es obligatorio"
            }
              
              
         }

    })

});
