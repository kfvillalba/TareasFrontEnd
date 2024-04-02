import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import Grid from '@mui/material/Grid'
import TareasList from './TareasList'
import TareasEdit from './TareasEdit'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Avatar from '@mui/material/Avatar'
import ImageIcon from '@mui/icons-material/Image'
import { Input, ListItemAvatar } from '@mui/material'
import FormCategoria from './FormCategoria'
import ListCategory from './ListCategory'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const drawerWidth = 300

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    position: 'relative',
    height: '100vh',
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
)

export default function CategoriaSideNavBar({categorias}) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)
  const [registerCategory, setRegisterCategory] = React.useState(false)
  const [registerTarea, setRegisterTarea] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleRegisterCategory = () => {
    setRegisterCategory(registerCategory ? false : true)
  }
  const handleRegisterTarea = () => {
    setRegisterTarea(registerTarea ? false : true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <IconButton
        color='info'
        aria-label='open drawer'
        onClick={handleDrawerOpen}
        edge='start'
        sx={{ ...(open && { display: 'none' }) }}
      >
        <ChevronRightIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#202123',
            color: '#8c8c8d',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Kevin Villalba' />
            <IconButton onClick={handleDrawerClose} color='info'>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </ListItem>
          <Divider color='#D5D5D5' />
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography
                    variant='h5'
                    textAlign={'center'}
                    sx={{ color: '#fff9' }}
                  >
                    Categoria
                  </Typography>
                }
              />
              <IconButton sx={{ mr: 2.4 }} onClick={handleRegisterCategory}>
                <AddCircleOutlinedIcon sx={{ color: '#fff9' }} />
              </IconButton>
            </ListItemButton>
          </ListItem>
        </List>

        {registerCategory ? <FormCategoria /> : <ListCategory categorias={categorias} />}

        <Box
          sx={{
            mt: 'auto',
          }}
        >
          <Divider color='#D5D5D5' />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: '#D5D5D5' }} />
                </ListItemIcon>
                <ListItemText primary='LogOut' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Main open={open} sx={{ bgcolor: '#EEEEEE' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={4} sx={{ borderRight: '1px solid grey' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',

                    justifyContent: 'space-evenly',
                  }}
                >
                  <Typography variant='h5' color={'initial'}>
                    Calculo Diferencial
                  </Typography>
                  <IconButton
                    aria-label='AddCircleIcon'
                    onClick={handleRegisterTarea}
                  >
                    <AddCircleIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='body2'>{9} notas</Typography>
                  <form>
                    <Box
                      sx={{
                        borderRadius: 5, // Modifica este valor según el radio de borde que desees
                        border: '1px solid #ced4da', // Añade un borde para resaltar el contenedor
                        alignItems: 'center',
                        padding: '10px',
                      }}
                    >
                      <Input
                        fullWidth
                        placeholder='Buscar una tarea'
                        startAdornment={
                          <InputAdornment position='start'>
                            <SearchIcon />
                          </InputAdornment>
                        }
                      />
                    </Box>
                  </form>
                </Box>
              </Box>
              <TareasList categorias={categorias} />
            </Box>
          </Grid>

<<<<<<< HEAD
          <Grid xs={8} sx={{ paddingLeft: '1.3rem' }}>
            {registerTarea ? <TareasEdit /> : ''}
          </Grid>
        </Grid>
=======
          <Box
            sx={{
              position: 'relative',
              height: '100%',
              width: '59%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            {registerTarea? <TareasEdit /> : ""}
          </Box>
        </Box>
>>>>>>> 768feb40965bcd6e2a4a95cb272270f47851858f
      </Main>
    </Box>
  )
}
