
import { Grid,List, ListItem, ListItemButton, Typography,  Box,  } from '@mui/material'
import React from 'react'


const TareasList = () => {

    const [categorias, setCategorias] = React.useState([
    {
      titulo : "Cluod", descripcion: "Hola cloud", fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematic asssss ssssssss ssssssss sssssssss ssssssssssss ssssssssss ssssssssss ssssssssssssssss sssssssssss ssssssssss ssssssss ssssssssss ssssss ssssssss ssssssssss ssss sssssssssss",
      fecha: "12/03/2024"
    },
  ])



  return (
    <Box sx={{overflowY:"auto", height:"82vh",} }>
    <List >
        {categorias.map((tarea, titulo) => (
            <ListItem key={titulo}>
                <ListItemButton >
                  <Grid xs={12}>                  
                    <Typography textAlign={'right'} variant="body2" color="grey">{tarea.fecha}</Typography>
                    <Typography variant="h5" color="black">{tarea.titulo.substring(0,20)}</Typography>                 
                    <Typography variant="body2" color="grey">{tarea.descripcion.substring(0,80)+ "..."} </Typography>   
                  </Grid>
                </ListItemButton>                
            </ListItem>
        ))}
    </List>
  </Box>
  )
}

export default TareasList