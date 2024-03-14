import React  from 'react'
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box, FormControl } from '@mui/material'



const FormCategoria = () => {
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
            <FormControl>                
                <TextField
                id='nombreCategoria' 
                autoComplete='off'
                variant='outlined'               
                label="Nombre"
                {...register("nombre",{required:"Campo obligatorio"})}
                helperText= {errors?.nombre? errors.nombre.message: ""}
                error ={errors?.nombre? true:false}
                />                
                <Button type='submit' variant='contained' color="primary" sx={{mt:3}} >Guardar               
                </Button>
            </FormControl>
        </form>
    </Box>
    
       
  )
}

export default FormCategoria