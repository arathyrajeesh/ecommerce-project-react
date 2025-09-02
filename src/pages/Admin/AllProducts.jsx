import React, { useState } from "react";
import {Box, Paper, TextField, Select, MenuItem, Button, Table,TableBody, TableCell, TableContainer, TableHead, TableRow,Avatar, Typography, Switch, IconButton, Menu, Dialog,DialogActions, DialogContent, DialogTitle, Divider} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";

import { useNavigate } from "react-router-dom";

const sampleProducts = [
    { name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike", img: "https://i.ibb.co/n7F4d5m/shoe.png", stock: false, sku: "31063", qty: "942" },
    { name: "Amazon Fire TV", desc: "4K UHD smart TV, stream live TV without cable", img: "https://i.ibb.co/hg3R2Mp/tv.png", stock: false, sku: "5829", qty: "587" },
    { name: "Apple iPad", desc: "10.2-inch Retina Display, 64GB", img: "https://i.ibb.co/pRtLq1F/ipad.png", stock: true, sku: "35946", qty: "468" },
];

const stats = [
    { label: "Pending Payment", value: 56, icon: <CalendarTodayIcon /> },
    { label: "Completed", value: 12689, icon: <DoneAllIcon /> },
    { label: "Refunded", value: 124, icon: <AccountBalanceWalletIcon /> },
    { label: "Failed", value: 32, icon: <ErrorOutlineIcon /> },
];

export default function ProductDashboard() {
    const [products, setProducts] = useState(sampleProducts);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("Status");
    const [stockFilter, setStockFilter] = useState("Stock");
    const [rowsPerPage, setRowsPerPage] = useState(7);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const [newProduct, setNewProduct] = useState({
        name: "", desc: "", img: "", stock: false, sku: "", qty: ""
    });

    const handleExportClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleStockToggle = (index) => {
        const updated = [...products];
        updated[index].stock = !updated[index].stock;
        setProducts(updated);
    };

    const filteredProducts = products.filter((p) => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === "Status" ? true : statusFilter === "Active" ? p.stock : !p.stock;
        const matchStock = stockFilter === "Stock" ? true : stockFilter === "In Stock" ? p.stock : !p.stock;
        return matchSearch && matchStatus && matchStock;
    });

    const handleClickOpen = () => setOpen(true);
    const handleCloseDialog = () => setOpen(false);

    const handleAddProduct = () => {
        setProducts([...products, newProduct]);
        setNewProduct({ name: "", desc: "", img: "", stock: false, sku: "", qty: "" });
        handleCloseDialog();
    };

return (
<Box sx={{ p: 3 }}>
    <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {stats.map((item, index) => (
        <React.Fragment key={index}>
            <Box sx={{ flexGrow: 1, p: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                <Typography variant="h4" fontWeight="bold">{item.value}</Typography>
                <Typography variant="body2" color="text.secondary">{item.label}</Typography>
                </Box>
                <Box color="text.secondary" sx={{ fontSize: 32 }}>{item.icon}</Box>
            </Box>
            </Box>
            {index < stats.length - 1 && <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "block" } }} />}
        </React.Fragment>
        ))}
    </Box>
    </Paper>

    <Paper sx={{ p: 2, mt: 2, borderRadius: 2 }} elevation={2}>
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, gap: 2, flexWrap: "wrap" }}>
        <TextField
        placeholder="Search Product"
        size="small"
        sx={{ width: 250 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button variant="outlined" startIcon={<DownloadIcon />} size="small" onClick={handleExportClick}>Export</Button>

        <Button variant="outlined" sx={{ bgcolor: 'blue', color: 'white' }} onClick={handleClickOpen}>Add Product</Button>
        </Box>
    </Box>

    <TableContainer>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell></TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>SKU</TableCell>
            <TableCell>QTY</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {filteredProducts.slice(0, rowsPerPage).map((content, i) => (
            <TableRow key={i}>
                <TableCell>
                <IconButton size="small" color="primary"><AddCircleOutlineIcon /></IconButton>
                </TableCell>
                <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar variant="rounded" src={content.img} alt={content.name} sx={{ width: 40, height: 40 }} />
                    <Box>
                    <Typography variant="body2">{content.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{content.desc}</Typography>
                    </Box>
                </Box>
                </TableCell>
                <TableCell><Switch checked={content.stock} onChange={() => handleStockToggle(i)} /></TableCell>
                <TableCell>{content.sku}</TableCell>
                <TableCell>{content.qty}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    </Paper>

    <Dialog open={open} onClose={handleCloseDialog}>
    <DialogTitle>Add New Product</DialogTitle>
    <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
        <TextField label="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} fullWidth />
        <TextField label="Description" value={newProduct.desc} onChange={(e) => setNewProduct({ ...newProduct, desc: e.target.value })} fullWidth />
        <TextField label="Image URL" value={newProduct.img} onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })} fullWidth />
        <TextField label="SKU" value={newProduct.sku} onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })} fullWidth />
        <TextField label="Quantity" value={newProduct.qty} onChange={(e) => setNewProduct({ ...newProduct, qty: e.target.value })} fullWidth />
        <Select
        value={newProduct.stock ? "In Stock" : "Out of Stock"}
        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value === "In Stock" })}
        >
        <MenuItem value="In Stock">In Stock</MenuItem>
        <MenuItem value="Out of Stock">Out of Stock</MenuItem>
        </Select>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        <Button onClick={handleAddProduct} variant="contained">Add</Button>
    </DialogActions>
    </Dialog>
</Box>
);
}
