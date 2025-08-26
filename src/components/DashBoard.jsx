import * as React from 'react';
import Box from '@mui/material/Box';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import CollectionsIcon from '@mui/icons-material/Collections';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';

const drawerWidth = 200;

const items = [
  { text: "Orders", icon: <CategoryIcon /> },
  { text: "Products", icon: <ShoppingCartIcon /> },
  { text: "Customers", icon: <PeopleIcon /> },
  { text: "Collections", icon: <CollectionsIcon /> },
];

const listItems = [
  { text: 'Analytics', icon: <TrendingUpIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
  { text: "Return/Refunds", icon: <PaymentIcon /> },
];

export default function DashboardWithSideDrawer() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth, color: 'white' }}>
      <Typography
        variant="h6"
        component="h6"
        sx={{ textAlign: 'center', py: 2, color: 'white' }}
      >
        MADAGASCAR
      </Typography>
      <Divider sx={{ bgcolor: "grey.700" }} />
      <List>
        {items.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ color: 'white', '&:hover': { bgcolor: 'grey.800' } }}>
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: "grey.700" }} />
      <List>
        {listItems.map((listItem) => (
          <ListItem key={listItem.text} disablePadding>
            <ListItemButton sx={{ color: 'white', '&:hover': { bgcolor: 'grey.800' } }}>
              <ListItemIcon sx={{ color: 'white' }}>{listItem.icon}</ListItemIcon>
              <ListItemText primary={listItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
          ml: open ? `${drawerWidth}px` : 0,
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            bgcolor: "#2980b9",
            color: 'white',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: open ? `${drawerWidth}px` : 0,
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar />

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 150, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Total Orders</Typography>
                <Typography variant="h4" color="primary">
                  1,245
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Orders</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 150, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Total Products</Typography>
                <Typography variant="h4" color="secondary">
                  356
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Manage Products</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 150, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Customers</Typography>
                <Typography variant="h4" color="success.main">
                  890
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Customers</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
