import SearchIcon from '@mui/icons-material/Search';
import { Grid, Input, List, ListItem, ListItemButton, ListItemText, Typography, FormControl, Box, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const TareasList = () => {

    const [categorias, setCategorias] = React.useState([
    {
      titulo : "Cluod", descripcion: "Hola cloud", fecha: "12/03/2024"
    },
    {
      titulo : "Matematica",
       descripcion: "Hola matematicasssss ssssssssssssssss sssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssss ssssssssssssssssss ssssssssssssssssssssssss sssssssssssssss",
      fecha: "12/03/2024"
    }
  ])



  return (
<Box>
  <Box sx={{m:3}}>
    <Box 
      sx={
    {display:"flex", 
    flexDirection: "row", 
    justifyContent:"space-evenly"}
    }>
      <Typography variant="h4">
          Calculo Diferencial
      </Typography>
      <IconButton aria-label="AddCircleIcon">
      <AddCircleIcon/>
      </IconButton>
    </Box>

  
    <Box 
      sx={
    {display:"flex",     
    flexDirection: "column",
    alignItems:"center",  
  }
    }>
          
      <Typography variant='body2'>
        {9} notas
      </Typography>
      <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon  />
            </InputAdornment>
          }
          placeholder='Buscar una tarea'
      />
    </Box>
  </Box>     
    <List>
        {categorias.map((tarea, titulo) => (
            <ListItem key={titulo} disablePadding>
                <ListItemButton>
                  <Grid xs={12}>                  
                    <Typography textAlign={'right'} variant="body2" color="grey">{tarea.fecha}</Typography>
                    <Typography variant="h5" color="black">{tarea.titulo.substring(0,20)}</Typography>                 
                    <Typography maxWidth={"300px"} variant="body2" color="grey">{tarea.descripcion.substring(0,80)} </Typography>   
                  </Grid>
                </ListItemButton>                
            </ListItem>
        ))}
    </List>
</Box>
  )
}

export default TareasList