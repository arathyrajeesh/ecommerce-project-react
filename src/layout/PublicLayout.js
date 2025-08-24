import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Homepage from "../pages/Homepage";
import { Outlet } from "react-router-dom";

function PublicLayout() {
    return (
        <>
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer />
        </>
    );
}

export default PublicLayout;
