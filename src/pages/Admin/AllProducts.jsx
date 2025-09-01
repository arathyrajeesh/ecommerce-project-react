import React, { useState } from "react";
import {Box,Paper,TextField,Select,MenuItem,Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Avatar,Typography,Switch,IconButton,Menu} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GridOnIcon from "@mui/icons-material/GridOn";
import TableChartIcon from "@mui/icons-material/TableChart";

import { useNavigate } from "react-router-dom";

const sampleProducts = [
    {
        name: "Air Jordan",
        desc: "Air Jordan is a line of basketball shoes produced by Nike",
        img: "https://i.ibb.co/n7F4d5m/shoe.png",
        stock: false,
        sku: "31063",
        qty: "942",
    },
    {
        name: "Amazon Fire TV",
        desc: "4K UHD smart TV, stream live TV without cable",
        img: "https://i.ibb.co/hg3R2Mp/tv.png",
        stock: false,
        sku: "5829",
        qty: "587",
    },
    {
        name: "Apple iPad",
        desc: "10.2-inch Retina Display, 64GB",
        img: "https://i.ibb.co/pRtLq1F/ipad.png",
        stock: true,
        sku: "35946",
        qty: "468",
    },
    {
        name: "Apple Watch Series 7",
        desc: "Starlight Aluminum Case with Starlight Sport Band",
        img: "https://i.ibb.co/c2Yy7wK/watch.png",
        stock: false,
        sku: "46658",
        qty: "301",
    },
    {
        name: "BANGE Anti Theft Backpack",
        desc: "Stylish anti-theft backpack for daily use",
        img: "https://i.ibb.co/pKr0mFj/bag.png",
        stock: true,
        sku: "41867",
        qty: "579",
    },
];

export default function ProductDashboard() {
    const navigate = useNavigate();

    const [products, setProducts] = useState(sampleProducts);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("Status");
    const [stockFilter, setStockFilter] = useState("Stock");
    const [rowsPerPage, setRowsPerPage] = useState(7);

    const [anchorEl, setAnchorEl] = useState(null);
    const handleExportClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleExport = (type) => {
        if (type === "csv") {
            let csv = "Name,Stock,SKU,Qty\n";
            products.forEach((p) => {
                csv += `${p.name},${p.stock ? "In Stock" : "Out of Stock"},${p.sku},${p.qty}\n`;
            });
            const blob = new Blob([csv], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "products.csv";
            link.click();
        }
        if (type === "print") window.print();
        if (type === "copy") navigator.clipboard.writeText(JSON.stringify(products, null, 2));
        if (type === "pdf") alert("PDF export needs jsPDF or similar lib ");
        if (type === "excel") alert("Excel export needs SheetJS (xlsx) ");

        handleClose();
    };

    const handleStockToggle = (index) => {
        const updated = [...products];
        updated[index].stock = !updated[index].stock;
        setProducts(updated);
    };

    const filteredProducts = products.filter((p) => {
        const matchSearch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.desc.toLowerCase().includes(search.toLowerCase());

        const matchStatus =
            statusFilter === "Status"
                ? true
                : statusFilter === "Active"
                ? p.stock
                : !p.stock;

        const matchStock =
            stockFilter === "Stock"
                ? true
                : stockFilter === "In Stock"
                ? p.stock
                : !p.stock;

        return matchSearch && matchStatus && matchStock;
    });

    return (
        <Box sx={{ p: 3 }}>
            <Paper sx={{ p: 2, mb: 2, borderRadius: 2 }} elevation={2}>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <Select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        size="small"
                    >
                        <MenuItem value="Status">Status</MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>
                    <Select
                        value={stockFilter}
                        onChange={(e) => setStockFilter(e.target.value)}
                        size="small"
                    >
                        <MenuItem value="Stock">Stock</MenuItem>
                        <MenuItem value="In Stock">In Stock</MenuItem>
                        <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                    </Select>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                        gap: 2,
                    }}
                >
                    <TextField
                        placeholder="Search Product"
                        size="small"
                        sx={{ width: 250 }}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Select
                            size="small"
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(e.target.value)}
                        >
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                        </Select>

                        <Button
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            size="small"
                            onClick={handleExportClick}
                        >
                            Export
                        </Button>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleExport("print")}>
                                <PrintIcon fontSize="small" sx={{ mr: 1 }} /> Print
                            </MenuItem>
                            <MenuItem onClick={() => handleExport("csv")}>
                                <TableChartIcon fontSize="small" sx={{ mr: 1 }} /> CSV
                            </MenuItem>
                            <MenuItem onClick={() => handleExport("excel")}>
                                <GridOnIcon fontSize="small" sx={{ mr: 1 }} /> Excel
                            </MenuItem>
                            <MenuItem onClick={() => handleExport("pdf")}>
                                <PictureAsPdfIcon fontSize="small" sx={{ mr: 1 }} /> PDF
                            </MenuItem>
                            <MenuItem onClick={() => handleExport("copy")}>
                                <FileCopyIcon fontSize="small" sx={{ mr: 1 }} /> Copy
                            </MenuItem>
                        </Menu>

                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            size="small"
                            sx={{ backgroundColor: "#6c5ce7" }}
                            onClick={() => navigate("/admin/add_product")}
                        >
                            Add Product
                        </Button>
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
                                        <IconButton size="small" color="primary">
                                            <AddCircleOutlineIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                            }}
                                        >
                                            <Avatar
                                                variant="rounded"
                                                src={content.img}
                                                alt={content.name}
                                                sx={{ width: 40, height: 40 }}
                                            />
                                            <Box>
                                                <Typography variant="body2">
                                                    {content.name}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                >
                                                    {content.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Switch
                                            checked={content.stock}
                                            onChange={() => handleStockToggle(i)}
                                        />
                                    </TableCell>
                                    <TableCell>{content.sku}</TableCell>
                                    <TableCell>{content.qty}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
