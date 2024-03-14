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

const ListCategory = () => {
  const [categorias, setCategorias] = React.useState([
    'Cloud Computing',
    'Calculo Diferencial',
    'Seminario',
    'Base de Datos',
    'DevOps',
    'Arquitectura',
  ])
  return (
    <Box sx={{ overflowY: 'auto' }}>
      <List>
        {categorias.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <IconButton aria-label='delete-category'>
                <DeleteIcon sx={{ color: '#D5D5D5' }} />
              </IconButton>
              <ListItemText
                primary={
                  <Typography variant='body1' textAlign={'start'}>
                    {text}
                  </Typography>
                }
              />
              <Badge
                badgeContent={index}
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
