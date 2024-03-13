import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import TareasList from './TareasList';
import TareasEdit from './TareasEdit';
import DeleteIcon from '@mui/icons-material/Delete';



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
  const [categorias, setCategorias] = React.useState(['Cloud Computing', 'Calculo Diferencial', 'Seminario', 'Base de Datos', 'DevOps', 'Arquitectura'])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{...(open && { display: 'none' }) }}
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
                <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </ListItem>    
        </List>

        <Divider />

        <List>

        <ListItem disablePadding>
          <ListItemButton disablePadding>
              <ListItemText primary={<Typography variant="h5" color="initial" textAlign={"center"}>Categoria</Typography>} />              
              <IconButton onClick={()=>{
                  setCategorias([...categorias,"Nuevo"])
              }}>
              <AddCircleOutlinedIcon/>
              </IconButton>
          </ListItemButton>
        </ListItem>
        </List>

        <Box sx = {{overflowY:"auto"}}>
          <List sx={{height:"510px"}}>
          {categorias.map((text, index) => (
              <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <IconButton aria-label="delete-category">
                      <DeleteIcon/>
                    </IconButton>                    
                      <ListItemText primary={<Typography variant="body1" color="initial" textAlign={"start"}>{text}</Typography>} />
                      <Badge badgeContent={index} color="primary" sx={{mr:3}}>                            
                      </Badge>
                  </ListItemButton>
              </ListItem>
          ))}
          </List>
          
        </Box>              
      

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
            <TareasList/>
        </Grid>
        <Grid  xs={8}>
            <TareasEdit/>
        </Grid>
        
        </Grid>
      </Main>
    </Box>
  );
}