$( document ).ready(function() {
$("#formNuevaMarca").validate({  
      rules: {              
        nuevaClaveMarca:{
                            required:true,
                            minlength:2
                        },
        nuevaMarca:{
                            required:true,
                            minlength:3
                        }    
         },
         messages:{
            nuevaClaveMarca:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
            nuevaMarca:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            nuevoTipo:{
                required:"*"
            }
        
         }

    });

$("#formNuevaLinea").validate({  
      rules: {
      
                         
        nuevaClaveLinea:{
                            required:true,
                            minlength:2
                        },
        nuevaLinea:{
                            required:true,
                            minlength:3
                        }
                   
         },
         messages:{
            nuevaClaveLinea:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevaLinea:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            nuevaLineaMarca:{
              required:"Este campo es obligatorio"
            }
        
         }

    });

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
$("#formNuevaSubcategoria").validate({  
      rules: {              
        nuevaClaveSubcategoria:{
                            required:true,
                            minlength:2
                        },
        nuevaSubcategoria:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            nuevaClaveSubcategoria:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevaSubcategoria:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            }
         }

    })

$("#formNuevaCategoria").validate({  
      rules: {              
        nuevaClaveCategoria:{
                            required:true,
                            minlength:2
                        },
        nuevaCategoria:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            nuevaClaveCategoria:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevaCategoria:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            nuevaCategoriaDivision:{
                  required:"Este campo es obligatorio"
            }
         }

    })

$("#formNuevaTalla").validate({  
      rules: {              
        nuevaClaveTalla:{
                            required:true,
                            minlength:1
                        },
        nuevaTalla:{
                            required:true,
                            minlength:3
                        }
         },
         messages:{
            nuevaClaveTalla:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 1 caracter" 
            },
             nuevaTalla:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
               nuevaTallaGenero:{
                  required:"*"
            },
            nuevaTallaDivision:{
                  required:"*"
            },
            nuevaTallaOrden:{
                required:"Este campo es obligatorio",
                min:"Este campo debe ser mayor o igual a 1",
                max:"Este campo debe ser menor o igual a 15"
                   
            }

         }

    });




});
