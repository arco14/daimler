$( document ).ready(function() {
$("#formNuevaComposicion").validate({  
      rules: {
      
                         
        nuevaClaveComposicion:{
                            required:true,
                            minlength:3
                        },
        nuevaComposicion:{
                            required:true,
                            minlength:10
                        }
                   
         },
         messages:{
            nuevaClaveComposicion:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
             nuevaComposicion:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 10 caracteres" 
            },
            nuevoLavado:{
                required:"Este campo es obligatorio"
            }
        
         }

    })
$("#formEditarComposicion").validate({  
      rules: {
        editarComposicion:{
                            required:true,
                            minlength:3
                        }, 
                       editarClaveComposicion:{
                            required:true,
                            minlength:3
                        },
                        editarLavado:{
                          required:true
                        }
         },
         messages:{
            editarComposicion:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            editarClaveComposicion:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            editarLavado:{
               required:"Este campo es obligatorio"
            }

         }

    })
$("#formNuevoDiseno").validate({  
      rules: {              
        nuevaClaveDiseño:{
                            required:true,
                            minlength:2
                        },
        nuevoDiseño:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            nuevaClaveDiseño:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevoDiseño:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            }
         }

    })


$("#formNuevoColor").validate({  
      rules: {              
        nuevaClaveColor:{
                            required:true,
                            minlength:2
                        },
        nuevoColor:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            nuevaClaveColor:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevoColor:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            nuevaColorSubcolor:{
                  required:"Este campo es obligatorio"
            }
         }

    })
$("#formEditarColor").validate({  
      rules: {              
        editarClaveColor:{
                            required:true,
                            minlength:2
                        },
        editarColor:{
                            required:true,
                            minlength:3
                        }        
         },
         messages:{
            editarClaveColor:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             editarColor:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            }
         }

    });
$("#formNuevoTipo").validate({  
      rules: {              
        nuevaClaveTipo:{
                            required:true,
                            minlength:2
                        },
        nuevoTipo:{
                            required:true,
                            minlength:3
                        }
         },
         messages:{
            nuevaClaveTipo:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
             nuevoTipo:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            }

         }

    });
$("#formNuevaTela").validate({  
      rules: {              
       nuevaClaveTela:{
                            required:true,
                            minlength:2
                        },
        nuevaTela:{
                            required:true,
                            minlength:3
                        }
         },
         messages:{
             nuevaClaveTela:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
            nuevaTela:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            nuevoTipoTela:{
                 required:"*"
            },
            nuevoColorTela:{
                 required:"*" 
            },
            nuevoDiseñoTela:{
                 required:"*"
            },
            nuevoMedidaTela:{
                 required:"*"
            },
            nuevaComposicionTela:{
                 required:"*"
            },
            
            nuevoAncho:{
                required:"Este campo es obligatorio",
                min:"Este campo debe ser mayor o igual a 1",
                max:"Este campo debe ser menor o igual a 2"
                   
            },
            nuevoOz:{
                required:"Este campo es obligatorio",
                min:"Este campo debe ser mayor o igual a 0.2",
                max:"Este campo debe ser menor o igual a 15"
            }

         }

    });

$("#formEditarTela").validate({  
      rules: {              
       editarClaveTela:{
                            required:true,
                            minlength:2
                        },
        editarTela:{
                            required:true,
                            minlength:3
                        }
         },
         messages:{
             editarClaveTela:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 2 caracteres" 
            },
            editarTela:{
                required:"Este campo es obligatorio",
                minlength:"Este campo requiere minimo 3 caracteres" 
            },
            editarTipoTela:{
                 required:"*"
            },
            editarColorTela:{
                 required:"*" 
            },
            editarDiseñoTela:{
                 required:"*"
            },
            editarMedidaTela:{
                 required:"*"
            },
            editarComposicionTela:{
                 required:"*"
            },
            
            editarAncho:{
                required:"Este campo es obligatorio",
                min:"Este campo debe ser mayor o igual a 1",
                max:"Este campo debe ser menor o igual a 2"
                   
            },
            editarOz:{
                required:"Este campo es obligatorio",
                min:"Este campo debe ser mayor o igual a 0.2",
                max:"Este campo debe ser menor o igual a 15"
            }

         }

    });




});
