import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Box,
  IconButton,
  Button,
} from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

const TareasList = ({categorias}) => {    
  let catFilter = categorias.filter(categoria => categoria.id ==="1")
  
  return (
    <Box sx={{ overflowY: 'auto', height: '82vh' }}>
      <List>
        {catFilter[0].tareas?.map((tarea) => (
          <ListItem
            key={tarea.id}
            sx={{
              paddingX: 0.5,
              paddingY: 0,
            }}
          >
            <ListItemButton
              sx={{
                bgcolor: '#fff',
                borderColor: 'grey',
                border: '1px solid grey',
              }}
            >
              <Grid xs={12}>
                <Typography
                  textAlign={'right'}
                  ml={22}
                  variant='body2'
                  color='grey'
                >
                  {tarea.fecha}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                >
                  <IconButton color='error' sx={{ paddingY: 0 }}>
                    <CloseIcon fontSize='medium' />
                  </IconButton>
                  <Typography variant='h5' color='black'>
                    {tarea.titulo}
                  </Typography>
                </Box>
                <Typography variant='body2' color='grey'>
                  {tarea.descripcion.substring(0, 60) + '...'}
                </Typography>
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default TareasList
