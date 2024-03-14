import React from 'react'
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box, FormControl } from '@mui/material'



const FormTarea = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      
    
      
  return ( 
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }}>
        <form onSubmit={handleSubmit((data)=>{     
        })}>
            <FormControl sx={{mt:3}}>                
                <TextField
                sx={{mt:3}}
                id='tituloTarea' 
                variant='filled'               
                label="Titulo"
                {...register("titulo",{required:"Campo obligatorio"})}
                helperText= {errors?.titulo? errors.titulo.message: ""}
                error ={errors?.titulo? true:false}
                />                
                <TextField
                sx={{mt:3}}
                multiline
                id='descripcionTarea' 
                variant='filled'               
                label="Descripcion"                
                {...register("descripcion",{required:"Campo obligatorio"})}
                helperText= {errors?.descripcion? errors.descripcion.message: ""}
                error ={errors?.descripcion? true:false}
                />                
                <Button type='submit' variant='contained' sx={{mt:3}} >Guardar               
                </Button>
            </FormControl>
        </form>
    </Box>
    
       
  )
}
export default FormTarea
