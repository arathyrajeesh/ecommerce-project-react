// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Button from '@mui/material/Button';
// import PeopleIcon from '@mui/icons-material/People';
// import CollectionsIcon from '@mui/icons-material/Collections';
// import CategoryIcon from '@mui/icons-material/Category';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useNavigate } from "react-router-dom";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const Drawer = styled(MuiDrawer, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//         ...openedMixin(theme),
//         '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//         ...closedMixin(theme),
//         '& .MuiDrawer-paper': closedMixin(theme),
//     }),
// }));

// const items = [
//     { text: 'Orders', icon: <CategoryIcon /> },
//     { text: 'Products', icon: <ShoppingCartIcon /> },
//     { text: 'Customers', icon: <PeopleIcon /> },
//     { text: 'Collections', icon: <CollectionsIcon /> },
// ];

// export default function Dashboard() {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);
//     const navigate = useNavigate();

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     // 🔴 Logout function
//     const logout = () => {
//         localStorage.removeItem("loggedInUser");
//         navigate("/admin/login"); // redirect admin to login page
//     };

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar position="fixed" open={open}>
//                 <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//                     <Box sx={{ display: "flex", alignItems: "center" }}>
//                         <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             onClick={handleDrawerOpen}
//                             edge="start"
//                             sx={{
//                                 marginRight: 5,
//                                 ...(open && { display: 'none' }),
//                             }}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6" noWrap component="div">
//                             Dashboard
//                         </Typography>
//                     </Box>
                    
//                     {/* 🔴 Logout Button on right */}
//                     <Button color="inherit" onClick={logout}>
//                         Logout
//                     </Button>
//                 </Toolbar>
//             </AppBar>
//             <Drawer variant="permanent" open={open}>
//                 <DrawerHeader>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                         MADAGASCAR
//                     </Typography>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//                     </IconButton>
//                 </DrawerHeader>
//                 <Divider />
//                 <List>
//                     {items.map((item) => (
//                         <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
//                             <ListItemButton
//                                 sx={{
//                                     minHeight: 48,
//                                     justifyContent: open ? 'initial' : 'center',
//                                     px: 2.5,
//                                 }}
//                             >
//                                 <ListItemIcon
//                                     sx={{
//                                         minWidth: 0,
//                                         mr: open ? 3 : 'auto',
//                                         justifyContent: 'center',
//                                     }}
//                                 >
//                                     {item.icon}
//                                 </ListItemIcon>
//                                 <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
//                             </ListItemButton>
//                         </ListItem>
//                     ))}
//                 </List>
//             </Drawer>
//             <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//                 <DrawerHeader /> 
                
//             </Box>
//         </Box>
//     );
// }
