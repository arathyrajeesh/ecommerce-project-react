import React from 'react'
import '../styles/Follow.css'
import '../'


const Follow = () => {
    return (
        <>
    <div className="slideshow-container">
        <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src="img_nature_wide.jpg" style={{ width: "100%" }} />
        <div className="text">Caption Text</div>
        </div>
        <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src="img_snow_wide.jpg" style={{ width: "100%" }} />
        <div className="text">Caption Two</div>
        </div>
        <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src="img_mountains_wide.jpg" style={{ width: "100%" }} />
        <div className="text">Caption Three</div>
        </div>
        <a className="prev" onclick="plusSlides(-1)">
        ❮
        </a>
        <a className="next" onclick="plusSlides(1)">
        ❯
        </a>
    </div>
    <br />
    <div style={{ textAlign: "center" }}>
        <span className="dot" onclick="currentSlide(1)" />
        <span className="dot" onclick="currentSlide(2)" />
        <span className="dot" onclick="currentSlide(3)" />
    </div>
    </>
    )
}

export default Follow
