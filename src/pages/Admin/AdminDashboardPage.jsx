import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import ChartBar from '../../components/ChartBar'
import Donut from '../../components/DonutGraph'
import CardActions from '@mui/material/CardActions'

const AdminDashboardPage = () => {
return (
    <Grid container spacing={1}>
        <Grid item xs={2} md={4} size={4}>
            <Card sx={{minHeight: 100,boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom> Orders</Typography>
                    <Typography variant="h4" sx={{ color: 'primary.main' }}>
                        245
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Orders</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={3} md={4} size={4}>
            <Card sx={{ minHeight: 100,boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom> Products</Typography>
                    <Typography variant="h4" sx={{ color: 'primary.main' }}>
                        245
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Orders</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={3} md={4} size={4}>
            <Card sx={{minHeight: 100, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Payments</Typography>
                    <Typography variant="h4" sx={{ color: 'primary.main' }}>
                        1,245
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Orders</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={2} md={4} size={6}>
            <Card sx={{ minHeight: 150, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h5" sx={{ color: 'black' }}>Profit</Typography>
                    <Typography variant="p" sx={{ color: 'grey' }}>Last Month</Typography>
                    <ChartBar/>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={2} md={4} size={6}>
            <Card sx={{ minHeight: 10, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h5" sx={{ color: 'black' }}>Report</Typography>
                    <Typography variant="p" sx={{ color: 'grey' }}>Monthly Report</Typography>
                    <Donut/>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
)
}

export default AdminDashboardPage
