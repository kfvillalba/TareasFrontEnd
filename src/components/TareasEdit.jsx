import { Box, Typography } from '@mui/material'
import React from 'react'

const TareasEdit = () => {
  return (
    <Box>
                    <Typography variant="body2" color="grey">{"tarea.fecha"}</Typography>
                    <Typography variant="h5" color="black" mb={3}>{"tarea.titulo"}</Typography>                 
                    <Typography variant="body2" color="grey">{"tarea.descripcion"}</Typography>   
    </Box>
  )
}

export default TareasEdit