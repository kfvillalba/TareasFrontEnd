import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Grid from '@mui/material/Grid';
import TareasList from './TareasList';
import TareasEdit from './TareasEdit';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { Input, ListItemAvatar } from '@mui/material';
import FormCategoria from './FormCategoria';
import ListCategory from './ListCategory';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormTarea from './FormTarea';



const drawerWidth = 300;



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
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
  }),
);






export default function CategoriaSideNavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [registerCategory, setRegisterCategory] = React.useState(false);
  const [registerTarea, setRegisterTarea] = React.useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleRegisterCategory = () => {
    setRegisterCategory (registerCategory? false : true)
    
  };
  const handleRegisterTarea = () => {
    setRegisterTarea (registerTarea? false : true)
    
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <IconButton
            color="info"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{...(open && { display: 'none',  }) }}
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
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >

        <List>
          <ListItem>                
              <ListItemAvatar>
              <Avatar>
                  <ImageIcon />
              </Avatar>
              </ListItemAvatar>
              <ListItemText  primary="Kevin Villalba"/> 
              <IconButton onClick={handleDrawerClose} color='info'>
                      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
          </ListItem>    
          <Divider />
        </List>      


        <List>
        <ListItem disablePadding>
          <ListItemButton >
              <ListItemText primary={<Typography variant="h5" color="initial" textAlign={"center"}>Categoria</Typography>} />              
              <IconButton sx={{mr:2.4}} onClick={handleRegisterCategory}>
              <AddCircleOutlinedIcon/>
              </IconButton>
          </ListItemButton>
        </ListItem>
        </List>

        {registerCategory? <FormCategoria/>:<ListCategory/>}
        
        <Box sx={{
          mt:"auto"
        }}>
        <Divider/>
          <List>                
          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                  <LogoutIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="LogOut" />
              </ListItemButton>   
          </ListItem>          
          </List>
        </Box>    
      </Drawer>
      

      <Main open={open}>     
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  xs={4}>
          <Box sx={{display:"flex", flexDirection:"column"}}>
            <Box>
              <Box 
                sx={
              {display:"flex", 
              
              justifyContent:"space-evenly"}
              }>
                <Typography variant="h5" color={"initial"}>
                    Calculo Diferencial
                </Typography>
                <IconButton aria-label="AddCircleIcon" onClick={handleRegisterTarea}>
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
                <form >
                <Input 
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon  />
                      </InputAdornment>
                    }
                    placeholder='Buscar una tarea'
                />
                </form>
              </Box>
            </Box >
              {registerTarea? <FormTarea/>:<TareasList/>} 
          </Box>
        </Grid>

        <Grid  xs={8}>
            <TareasEdit/>
        </Grid>
        
      </Grid>
      </Main>
    </Box>
  );
}