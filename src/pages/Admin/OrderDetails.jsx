import React, { useState } from "react";
import {Box,Paper,Typography,TextField,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Avatar,Chip,IconButton,MenuItem,Select,Button,Divider,Checkbox, Grid,} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const orders = [
    {
        id: "#6979",
        date: "Apr 15, 2023, 10:21",
        customer: "Cristine Easom",
        email: "example@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2015/04/24/20/58/girl-738303_1280.jpg",
        payment: "Pending",
        status: "Dispatched",
    },
    {
        id: "#6624",
        date: "Apr 17, 2023, 6:43",
        customer: "Fayre Screech",
        email: "example@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2015/04/24/20/58/girl-738303_1280.jpg",
        payment: "Failed",
        status: "Delivered",
    },
    {
        id: "#9305",
        date: "Apr 17, 2023, 8:05",
        customer: "Pauline Pfaffe",
        email: "example@gmail.com",
        avatar: "",
        payment: "Cancelled",
        status: "Out for Delivery",
    },
    {
        id: "#8005",
        date: "Apr 22, 2023, 3:01",
        customer: "Maurits Nealey",
        email: "example@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2015/04/24/20/58/girl-738303_1280.jpg",
        payment: "Paid",
        status: "Dispatched",
    },
];

const paymentChipColor = {
    Pending: "warning",
    Failed: "error",
    Cancelled: "default",
    Paid: "success",
};

const statusChipColor = {
    Delivered: "success",
    "Out for Delivery": "info",
    Dispatched: "warning",
};
const stats = [
    { label: "Pending Payment", value: 56, icon: <CalendarTodayIcon /> },
    { label: "Completed", value: 12689, icon: <DoneAllIcon /> },
    { label: "Refunded", value: 124, icon: <AccountBalanceWalletIcon /> },
    { label: "Failed", value: 32, icon: <ErrorOutlineIcon /> },
];
export default function OrdersDashboard() {
    const [search, setSearch] = useState("");
    const [selectedOrders, setSelectedOrders] = useState([]);

const filteredOrders = orders.filter(
    (order) =>
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.email.toLowerCase().includes(search.toLowerCase()) ||
        order.payment.toLowerCase().includes(search.toLowerCase()) ||
        order.status.toLowerCase().includes(search.toLowerCase())
);

const handleCheckboxChange = (id) => {
    setSelectedOrders((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
};

const handleSelectAll = (event) => {
    if (event.target.checked) {
        setSelectedOrders(filteredOrders.map((o) => o.id));
    } else {
        setSelectedOrders([]);
    }
};

return (
<Box sx={{ p: 3 }}>
    <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
            }}>
            {stats.map((item, index) => (
                <React.Fragment key={index}>
                    <Box sx={{ flexGrow: 1, p: 1 }}>
                        <Box 
                        sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between' 
                        }}>
                            <Box>
                                <Typography variant="h4" fontWeight="bold">
                                    {item.value}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.label}
                                </Typography>
                            </Box>
                            <Box color="text.secondary" sx={{ fontSize: 32 }}>
                                {item.icon}
                            </Box>
                        </Box>
                    </Box>
                    {index < stats.length - 1 && (
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    )}
                </React.Fragment>
            ))}
        </Box>
    </Paper>

    <Paper sx={{ p: 2, borderRadius: 2, mt: 3 }} elevation={2}>
    <Box
        sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
        }}
    >
        <TextField
        placeholder="Search Order / Customer / Email"
        size="small"
        sx={{ width: 250 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            size="small"
        >
            Export
        </Button>
        </Box>
    </Box>

    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox 
                        checked={
                            filteredOrders.length > 0 &&
                            selectedOrders.length === filteredOrders.length
                        }
                        indeterminate={
                            selectedOrders.length > 0 &&
                            selectedOrders.length < filteredOrders.length
                        }
                        onChange={handleSelectAll}
                        />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>Order</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Customers</TableCell>
                    <TableCell>Payment</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {filteredOrders.map((order, i) => (
                <TableRow key={i}>
                    <TableCell padding="checkbox">
                    <Checkbox
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleCheckboxChange(order.id)}
                    />
                    </TableCell>

                    <TableCell>
                    <IconButton size="small" color="primary">
                        <AddCircleOutlineIcon />
                    </IconButton>
                    </TableCell>

                    <TableCell>
                    <Typography color="primary">{order.id}</Typography>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Avatar src={order.avatar} />
                            <Box>
                            <Typography variant="body2">{order.customer}</Typography>
                            <Typography variant="caption" color="text.secondary">
                                {order.email}
                            </Typography>
                            </Box>
                        </Box>
                    </TableCell>
                    <TableCell>
                        <Chip
                            label={order.payment}
                            color={paymentChipColor[order.payment]}
                            variant="outlined"
                            size="small"
                        />
                    </TableCell>
                    <TableCell>
                        <Chip
                            label={order.status}
                            color={statusChipColor[order.status]}
                            variant="filled"
                            size="small"
                        />
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </Paper>
</Box>
);
}
