import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {Box,Drawer as MuiDrawer,AppBar as MuiAppBar,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItemIcon,ListItemText,Button,Collapse,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, ListItem, ListItemButton,} from "@mui/material";

import {Menu as MenuIcon,ChevronLeft as ChevronLeftIcon,ChevronRight as ChevronRightIcon,Dashboard as DashboardIcon,People as PeopleIcon,Category as CategoryIcon,ShoppingCart as ShoppingCartIcon,Settings as SettingsIcon,PanoramaFishEye as PanoramaFishEyeIcon,KeyboardArrowDown as KeyboardArrowDownIcon,} from "@mui/icons-material";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
    {
        text: "Products",
        icon: <ShoppingCartIcon />,
        children: [
        { text: "All Products", path: "/admin/all_product" },
        { text: "Add Product", path: "/admin/add_product" },
        ],
    },
    { text: "Orders", icon: <CategoryIcon />,
        children: [
            { text: "Order List", path: "/admin/order" },
            { text: "Order Details", path: "/admin/order_details" }
        ]
    },
    { text: "Customers", icon: <PeopleIcon />, path: "/admin/customer" },
];

function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [openMenus, setOpenMenus] = React.useState({});
    const [openDialog, setOpenDialog] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
};

const handleLogoutClick = () => setOpenDialog(true);
const handleCloseDialog = () => setOpenDialog(false);

const confirmLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/admin/login");
};

const isActive = (path) => location.pathname === path;

return (
    <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <AppBar position="fixed" open={open} sx={{ 
        backgroundColor: "black",  
        color: "white"                
    }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ marginRight: 5, ...(open && { display: "none" }) }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{fontWeight: "bold"}}>
                Dashboard
            </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" sx={{ ml: 2 }}>
                <SettingsIcon />
            </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
    <Drawer
    variant="permanent"
    open={open}
    sx={{
        "& .MuiDrawer-paper": {
        backgroundColor: "#fceaef",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", 
        },
    }}
    >
    <Box>
        <DrawerHeader>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            MADAGASCAR
        </Typography>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {menuItems.map((item) => (
            <React.Fragment key={item.text}>
            <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                onClick={() =>
                    item.children ? toggleMenu(item.text) : navigate(item.path)
                }
                sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: isActive(item.path) ? "grey" : "inherit",
                    fontWeight: isActive(item.path) ? "bold" : "normal",
                }}
                >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: isActive(item.path) ? "#fceaef" : "black",
                    }}
                >
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                {item.children && (
                    <KeyboardArrowDownIcon
                    sx={{
                        ml: "auto",
                        transition: "0.3s",
                        transform: openMenus[item.text]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                    />
                )}
                </ListItemButton>
            </ListItem>
            {item.children && (
                <Collapse
                in={openMenus[item.text] && open}
                timeout="auto"
                unmountOnExit
                >
                <List component="div" disablePadding>
                    {item.children.map((sub) => (
                    <ListItemButton
                        key={sub.text}
                        sx={{
                        pl: 4,
                        backgroundColor: isActive(sub.path)
                            ? "#e0e0e0"
                            : "inherit",
                        }}
                        onClick={() => navigate(sub.path)}
                    >
                        <ListItemIcon>
                        <PanoramaFishEyeIcon sx={{ fontSize: "small" }} />
                        </ListItemIcon>
                        <ListItemText primary={sub.text} />
                    </ListItemButton>
                    ))}
                </List>
                </Collapse>
            )}
            </React.Fragment>
        ))}
        </List>
    </Box>

    <Box sx={{ p: 2 }}>
        <IconButton color="black" onClick={handleLogoutClick}>
        <LogoutIcon />
        </IconButton>
    </Box>
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
    </Box>
    <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
            <DialogContentText>
            Are you sure you want to logout?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseDialog} color="inherit">
            Cancel
            </Button>
            <Button onClick={confirmLogout} color="error" autoFocus>
            Logout
            </Button>
        </DialogActions>
    </Dialog>
    </Box>
);
}
const AdminLayout = () => {
    const { user } = React.useContext(AuthContext);

    if (user?.role === "admin") {
        return <Dashboard />;
    } else {
        return <p>Unauthorized user</p>;
    }
};

export default AdminLayout;
