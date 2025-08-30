import React from "react";
import {Box,Grid,Paper,Typography,Divider,TextField,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Avatar,Chip,IconButton,MenuItem,Select,Button,} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";

const stats = [
    { label: "Pending Payment", value: 56, icon: <CalendarTodayIcon /> },
    { label: "Completed", value: 12689, icon: <DoneAllIcon /> },
    { label: "Refunded", value: 124, icon: <AccountBalanceWalletIcon /> },
    { label: "Failed", value: 32, icon: <ErrorOutlineIcon /> },
];

const orders = [
    {
        id: "#6979",
        date: "Apr 15, 2023, 10:21",
        customer: "Cristine Easom",
        email: "ceasomw@theguardian.com",
        avatar: "",
        payment: "Pending",
        status: "Delivered",
    },
    {
        id: "#6624",
        date: "Apr 17, 2023, 6:43",
        customer: "Fayre Screech",
        email: "fscreechs@army.mil",
        avatar: "",
        payment: "Failed",
        status: "Delivered",
    },
    {
        id: "#9305",
        date: "Apr 17, 2023, 8:05",
        customer: "Pauline Pfaffe",
        email: "ppfaffel@wikia.com",
        avatar: "",
        payment: "Cancelled",
        status: "Out for Delivery",
    },
    {
        id: "#8005",
        date: "Apr 22, 2023, 3:01",
        customer: "Maurits Nealey",
        email: "mnealeyf@japanpost.jp",
        avatar: "",
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

export default function OrdersDashboard() {
return (
<Box sx={{ p: 3 }}>
    <Grid container spacing={2} sx={{ mb: 3 }}>
    {stats.map((s, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
        <Paper
            sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            borderRadius: 2,
            }}
            elevation={2}
        >
            {s.icon}
            <Box>
            <Typography variant="h6">{s.value}</Typography>
            <Typography variant="body2" color="text.secondary">
                {s.label}
            </Typography>
            </Box>
        </Paper>
        </Grid>
    ))}
    </Grid>

    <Paper sx={{ p: 2, borderRadius: 2 }} elevation={2}>
    <Box
        sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 2,
        gap: 2,
        }}
    >
        <TextField
        placeholder="Search Order"
        size="small"
        sx={{ width: 250 }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Select size="small" defaultValue={10}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
        </Select>
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
            <TableCell></TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Customers</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Status</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {orders.map((o, i) => (
            <TableRow key={i}>
                <TableCell>
                <IconButton size="small" color="primary">
                    <AddCircleOutlineIcon />
                </IconButton>
                </TableCell>
                <TableCell>
                <Typography color="primary">{o.id}</Typography>
                </TableCell>
                <TableCell>{o.date}</TableCell>
                <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar src={o.avatar} />
                    <Box>
                    <Typography variant="body2">{o.customer}</Typography>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        {o.email}
                    </Typography>
                    </Box>
                </Box>
                </TableCell>
                <TableCell>
                <Chip
                    label={o.payment}
                    color={paymentChipColor[o.payment]}
                    variant="outlined"
                    size="small"
                />
                </TableCell>
                <TableCell>
                <Chip
                    label={o.status}
                    color={statusChipColor[o.status]}
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
