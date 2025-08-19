import React, { useContext } from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Hero() {
    const { user } = useContext(AuthContext); // get user from context

    return (
        <main className="hero-section">
            <img
                src="https://static.wixstatic.com/media/82fcd3_2740861c485d420c865a8738236a50d9~mv2_d_4804_3203_s_4_2.jpg/v1/fill/w_758,h_755,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_2740861c485d420c865a8738236a50d9~mv2_d_4804_3203_s_4_2.jpg"
                alt="Nature"
                className="hero-image"
            />

            <div className="hero-content">
                {user ? (
                    <h2 className="welcome-message">
                        Welcome, <span>{user.name}</span> 
                    </h2>
                ) : null}

                <h1>
                    BECOME <br /> ONE WITH <br /> NATURE
                </h1>
                <p>
                    Everything You Need for the Perfect <br /> Travel Experience
                </p>
                <Link to="/shop" className="cta-button">
                    Shop Our Range
                </Link>
            </div>
        </main>
    );
}

export default Hero;
