import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import Badge from '@mui/material/Badge'

const ListCategory = ({categorias}) => {
  
  return (
    
    <Box sx={{ overflowY: 'auto' }}>
      <List>
        {categorias?.map((categoria) => (
          <ListItem key={categoria.id} disablePadding>
            <ListItemButton>
              <IconButton aria-label='delete-category'>
                <DeleteIcon sx={{ color: '#D5D5D5' }} />
              </IconButton>
              <ListItemText
                primary={
                  <Typography variant='body1' textAlign={'start'}>
                    {categoria.nombre}
                  </Typography>
                }
              />
              <Badge
                badgeContent={categoria.tareas.length}
                color='primary'
                sx={{ mr: 3 }}
              ></Badge>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ListCategory
