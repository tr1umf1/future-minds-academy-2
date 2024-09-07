import React from "react";


import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Summer () {
    return (
        <div>
            <Nav/>
            <Hero
            caption="Welcome to Winter"
            image="assets/images/winter.png"
            />
            <Footer/>
        </div>
    )
}

