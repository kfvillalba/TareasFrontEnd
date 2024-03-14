import { Box, Button, FormControl, TextField} from '@mui/material'
import React, { useState } from 'react'
import FormCategoria from './FormCategoria'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import EditorToolbar, { modules, formats } from "./EditorToolbar";

const TareasEdit = () => {

  const {
    register,
    handleSubmit,        
    formState: { errors },
  } = useForm()
     
  const [userInfo, setuserInfo] = useState({
    titulo: '',
    description: '',
   });
   const ontitulo = (value) => {
    setuserInfo({ ...userInfo,
      titulo:value
    });
    console.log(value)
    }
  const ondescription = (value) => {
    setuserInfo({ ...userInfo,
      description:value
    });
    console.log(value)
    }
  return (
    <Box sx={{
      
      
    }}>
      <form onSubmit={handleSubmit((data)=>{
        console.log(data) 
        ontitulo(data.titulo)           
      })}>
            <FormControl sx={{mt:3}}>                
                <TextField
                autoComplete='off'
                sx={{mt:3, mb:3, height:"60px"}}
                id='tituloTarea' 
                variant='outlined'               
                label="Título"                
                {...register("titulo",{required:"Campo obligatorio"})}
                helperText= {errors?.titulo? errors.titulo.message: ""}
                error ={errors?.titulo? true:false}
                />
                <EditorToolbar toolbarId={'t1'}/>
                <Box sx={{
                     height:"61vh",
                     overflowY:"auto"
                }}>
                <ReactQuill
                  theme="snow"
                  value={userInfo.description}
                  onSubmit={ondescription}
                  placeholder={"Escribe la descripción aquí..."}
                  modules={modules('t1')}
                  formats={formats}  
                               
                  />             
                </Box>   
                              
            </FormControl>
            <Box sx={{
               display:"flex",
               flexDirection:"row",
               justifyContent:"center"
            }}>
                <Button type='submit' variant='contained' sx={{mx:3 ,mt:3}} >Guardar               
                </Button>
                <Button type='reset' variant='contained' sx={{mt:3}} >Cancelar               
                </Button>
            </Box>
        </form>              
    </Box>    
    
  )
}

export default TareasEdit