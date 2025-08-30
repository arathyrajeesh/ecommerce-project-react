import React from "react";
import {
    Box,
    Typography,
    Paper,
    Grid,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Avatar,
    Divider,
} from "@mui/material";

const order = {
    
    products: [
        { name: "Oneplus 10", details: "Storage:128gb", price: 896, qty: 3 },
        { name: "Nike Jordan", details: "Size:8UK", price: 392, qty: 1 },
        { name: "Wooden Chair", details: "Material: Wooden", price: 841, qty: 2 },
        { name: "Face cream", details: "Gender:Women", price: 813, qty: 2 },
    ],
    customer: {
        name: "Shamus Tuttle",
        id: "#58909",
        email: "Shamus889@yahoo.com",
        phone: "+1 (609) 972-22-22",
        orders: 12,
        avatar: "https://i.pravatar.cc/100",
    },
    shipping: {
        address: "45 Roker Terrace\nLatheronwheel\nKW5 8NW, London, UK",
    },
};

export default function OrderDetails() {
    const subtotal = order.products.reduce(
        (acc, p) => acc + p.price * p.qty,
        0
    );
    const discount = 2;
    const total = subtotal - discount;

return (
<Box p={3}>

    <Grid container spacing={3}>
    <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
        <Typography variant="h6" mb={2}>
            Order details
        </Typography>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Products</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Total</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {order.products.map((p, index) => (
                <TableRow key={index}>
                <TableCell>
                    <Typography>{p.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                    {p.details}
                    </Typography>
                </TableCell>
                <TableCell>${p.price}</TableCell>
                <TableCell>{p.qty}</TableCell>
                <TableCell>${p.price * p.qty}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="flex-end" flexDirection="column">
            <Typography>Subtotal: ${subtotal}</Typography>
            <Typography>Discount: ${discount}</Typography>
            <Typography fontWeight="bold">Total: ${total}</Typography>
        </Box>
        </Paper>
    </Grid>
    </Grid>
</Box>
);
}
