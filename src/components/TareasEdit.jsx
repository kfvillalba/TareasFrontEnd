import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const TareasEdit = () => {
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column'
    }}>
       <TextField  
         id="titulo"  
         type='text' 
         sx={{mb:3, mt:3}} />  
       <TextField
         id="descripcion"                 
         type='text' 
         multiline
         rows={24}
       />
    </Box>
  )
}

export default TareasEdit