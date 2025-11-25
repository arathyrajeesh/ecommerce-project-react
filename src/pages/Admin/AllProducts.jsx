import React, { useState } from "react";
import {Box, Paper, TextField, Select, MenuItem, Button, Table,TableBody, TableCell, TableContainer, TableHead, TableRow,Avatar, Typography, Switch, IconButton, Menu, Dialog,DialogActions, DialogContent, DialogTitle, Divider, Stack, Pagination, Checkbox} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DownloadIcon from "@mui/icons-material/Download";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const sampleProducts = [
    { name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike", img: "", stock: false, sku: "31063", qty: "942" },
    { name: "Amazon Fire TV", desc: "4K UHD smart TV, stream live TV without cable", img: "", stock: false, sku: "5829", qty: "587" },
    { name: "Apple iPad", desc: "10.2-inch Retina Display, 64GB", img: "", stock: true, sku: "35946", qty: "468" },
    { name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike", img: "", stock: false, sku: "31063-2", qty: "942" },
    { name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike", img: "", stock: false, sku: "31063-3", qty: "942" },
    { name: "Apple iPad", desc: "10.2-inch Retina Display, 64GB", img: "", stock: true, sku: "35946-2", qty: "468" },
    { name: "Apple iPad", desc: "10.2-inch Retina Display, 64GB", img: "", stock: true, sku: "35946-3", qty: "468" },
    { name: "Apple iPad", desc: "10.2-inch Retina Display, 64GB", img: "", stock: true, sku: "35946-4", qty: "468" },
    { name: "Amazon Fire TV", desc: "4K UHD smart TV, stream live TV without cable", img: "", stock: false, sku: "5829-2", qty: "587" },
    { name: "Amazon Fire TV", desc: "4K UHD smart TV, stream live TV without cable", img: "", stock: false, sku: "5829-3", qty: "587" },
    { name: "Amazon Fire TV", desc: "4K UHD smart TV, stream live TV without cable", img: "", stock: false, sku: "5829-4", qty: "587" },
    { name: "Amazon Fire TV", desc: "4K UHD smart TV, stream live TV without cable", img: "", stock: false, sku: "5829-5", qty: "587" },
    { name: "Amazon Fire TV", desc: "4K UHD smart TV, stream live TV without cable", img: "", stock: false, sku: "5829-6", qty: "587" },
    { name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike", img: "", stock: false, sku: "31063-4", qty: "942" },
    { name: "Air Jordan", desc: "Air Jordan is a line of basketball shoes produced by Nike", img: "", stock: false, sku: "31063-5", qty: "942" },
    { name: "Apple iPad", desc: "10.2-inch Retina Display, 64GB", img: "", stock: true, sku: "35946-5", qty: "468" },
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
    const [stockFilter, setStockFilter] = useState("Stock");
    const [rowsPerPage, setRowsPerPage] = useState(7);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    

    const [newProduct, setNewProduct] = useState({
        name: "", desc: "", img: "", stock: false, sku: "", qty: ""
    });

    const handleExportClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleStockToggle = (sku) => {
        const updatedProducts = products.map(product =>
            product.sku === sku ? { ...product, stock: !product.stock } : product
        );
        setProducts(updatedProducts);
    };

    const handleMoreMenuOpen = (event, product) => {
        setMoreMenuAnchorEl(event.currentTarget);
        setSelectedProduct(product);
    };

    const handleMoreMenuClose = () => {
        setMoreMenuAnchorEl(null);
        setSelectedProduct(null);
    };

    const handleDeleteProduct = () => {
        if (selectedProduct) {
            const updatedProducts = products.filter(p => p.sku !== selectedProduct.sku);
            setProducts(updatedProducts);
            handleMoreMenuClose();
        }
    };
    
    const handleCheckboxChange = (sku) => {
        if (selectedItems.includes(sku)) {
            setSelectedItems(selectedItems.filter(item => item !== sku));
        } else {
            setSelectedItems([...selectedItems, sku]);
        }
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            const allSKUs = productsToShow.map(product => product.sku);
            setSelectedItems(allSKUs);
        } else {
            setSelectedItems([]);
        }
    };

    const filteredProducts = products.filter((p) => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
        const matchStock = stockFilter === "Stock" ? true : stockFilter === "In Stock" ? p.stock : !p.stock;
        return matchSearch && matchStock;
    });

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    const handleClickOpen = () => setOpen(true);
    const handleCloseDialog = () => setOpen(false);

    const handleAddProduct = () => {
        setProducts([...products, newProduct]);
        setNewProduct({ name: "", desc: "", img: "", stock: false, sku: "", qty: "" });
        handleCloseDialog();
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
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
                        <Select
                            value={stockFilter}
                            onChange={(e) => setStockFilter(e.target.value)}
                            size="small"
                        >
                            <MenuItem value="Stock">Stock</MenuItem>
                            <MenuItem value="In Stock">In Stock</MenuItem>
                            <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                        </Select>
                        <Button variant="outlined" sx={{p: 1}}startIcon={<DownloadIcon />} size="small" onClick={handleExportClick}>Export</Button>
                        <Button variant="contained" sx={{p: 1}} onClick={handleClickOpen}>Add Product</Button>
                    </Box>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        onChange={handleSelectAll}
                                        checked={selectedItems.length === productsToShow.length && productsToShow.length > 0}
                                        indeterminate={selectedItems.length > 0 && selectedItems.length < productsToShow.length}
                                    />
                                </TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Stock</TableCell>
                                <TableCell>SKU</TableCell>
                                <TableCell>QTY</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productsToShow.map((content) => (
                                <TableRow key={content.sku} selected={selectedItems.includes(content.sku)}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedItems.includes(content.sku)}
                                            onChange={() => handleCheckboxChange(content.sku)}
                                        />
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
                                    <TableCell>
                                        <Switch
                                            checked={content.stock}
                                            onChange={() => handleStockToggle(content.sku)}
                                        />
                                    </TableCell>
                                    <TableCell>{content.sku}</TableCell>
                                    <TableCell>{content.qty}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            onClick={(e) => handleMoreMenuOpen(e, content)}
                                            aria-label="more"
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Menu
                anchorEl={moreMenuAnchorEl}
                open={Boolean(moreMenuAnchorEl)}
                onClose={handleMoreMenuClose}
            >
                <MenuItem onClick={() => { handleMoreMenuClose(); }}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteProduct}>Delete</MenuItem>
            </Menu>

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
            <Stack spacing={2} sx={{ mt: 3, alignItems: "flex-end" }}>
                <Pagination
                    count={Math.ceil(filteredProducts.length / rowsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                />
            </Stack>
        </Box>
    );
}