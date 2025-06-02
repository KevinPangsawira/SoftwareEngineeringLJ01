import { useEffect, useState, useRef } from "react";
import ResepCard from "./komponen/ResepCard";
import "./Resep.css";

function Resep() {
    const [reseps, setReseps] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [currentBg, setCurrentBg] = useState(0);

    const backgroundImages = [
        "../src/assets/pngtree-person-cooking-at-the-kitchen-counter-picture-image_2625819.jpg",
        "../src/assets/1306038.jpg",
        "../src/assets/2305227.jpg"
    ];

    useEffect(() => {
        fetch("http://localhost:3000/api/resep")
            .then((res) => res.json())
            .then((data) => setReseps(data))
            .catch((error) => console.error("Error fetching resep:", error));

        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const scrollToIndex = (index) => {
        const carousel = carouselRef.current;
        const cardWidth = 500; 
        const scrollPosition = index * cardWidth - (carousel.offsetWidth / 2 - cardWidth / 2);
        carousel.scrollTo({ left: scrollPosition, behavior: "smooth" });
        setCurrentIndex(index);
    };

    const handleNext = () => {
        if (currentIndex < reseps.length - 1) scrollToIndex(currentIndex + 1);
    };

    const handlePrev = () => {
        if (currentIndex > 0) scrollToIndex(currentIndex - 1);
    };


    return (
        <div>
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${backgroundImages[currentBg]})`,
                }}
            >
                <div className="overlay">
                    <h1 className="hero-title" style={{ textAlign: "center" }}>
                        Resep Pilihan
                    </h1>
                </div>
            </div>

            <div className="carousel-container">
                <button className="nav-button left" onClick={handlePrev}>←</button>

                <div className="carousel-track" ref={carouselRef}  >
                    {reseps.map((resep, index) => {
                        // Hitung posisi relatif ke item tengah
                        const distanceFromCenter = Math.abs(index - currentIndex);
                        const scale = Math.max(1 - distanceFromCenter * 0.1, 0.8);
                        const opacity = Math.max(1 - distanceFromCenter * 0.3, 0.4);

                        return (
                            <div
                                key={resep.ResepID}
                                className="carousel-card"
                                style={{
                                    transform: `scale(${scale})`,
                                    opacity: opacity,
                                    transition: "transform 0.4s ease, opacity 0.4s ease",
                                }}
                            >
                                <ResepCard
                                    id={resep.ResepID}
                                    gambar={resep.images}
                                    deskripsi={resep.ResepName}
                                />
                            </div>
                        );
                    })}
                </div>

                <button className="nav-button right" onClick={handleNext}>→</button>
            </div>
        </div>
    );
}

export default Resep;
