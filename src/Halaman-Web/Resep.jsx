import { useEffect, useState, useRef } from "react";
import ResepCard from "./komponen/ResepCard";
import "./Resep.css";

function Resep() {
    const [reseps, setReseps] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [currentBg, setCurrentBg] = useState(0);
    const [budget, setBudget] = useState(0);
    const [stokBahan, setStokBahan] = useState("");
    const [filteredReseps, setFilteredReseps] = useState([]);
    const [showFilter, setShowFilter] = useState(false); // ← kontrol visibilitas input filter

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

    const filterReseps = () => {
        // jika tidak ada input filter, tampilkan semua resep
        if (budget === 0 && stokBahan.trim() === "") {
            setFilteredReseps([]);
            return;
        }

        const bahanList = stokBahan.split(',').map(b => b.trim().toLowerCase());

        const filtered = reseps.filter((resep) => {
            const cocokBudget = budget === 0 || resep.TotalHarga <= budget;
            const cocokBahan =
                stokBahan === "" || resep.bahan?.some(b => bahanList.includes(b.toLowerCase()));
            return cocokBudget && cocokBahan;
        });

        setFilteredReseps(filtered);
    };

    useEffect(() => {
        filterReseps();
    }, [budget, stokBahan]);

    const dataToShow = filteredReseps.length > 0 ? filteredReseps : reseps;

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

            <div className="filter-container">
                <button onClick={() => setShowFilter(!showFilter)}>
                    {showFilter ? "Tutup Filter" : "Filter"}
                </button>

                {showFilter && (
                    <div className="filter-inputs" style={{fontFamily: "sans-serif"}}>
                        <label>
                            Budget Harian (Rp):
                            <select
                                value={budget}
                                onChange={(e) => setBudget(Number(e.target.value))}
                            >
                                <option value={0}>Semua</option>
                                <option value={10000}>&lt;Rp. 10.000</option>
                                <option value={15000}>&lt;Rp. 15.000</option>
                                <option value={20000}>&lt;Rp. 20.000</option>
                                <option value={50000}>&lt;Rp. 50.000</option>
                                <option value={100000}>&lt;Rp. 100.000</option>
                            </select>
                        </label>


                        {/* <label>
                            Bahan Tersedia (pisahkan dengan koma):
                            <input
                                type="text"
                                value={stokBahan}
                                onChange={(e) => setStokBahan(e.target.value)}
                                placeholder="contoh: telur, bayam"
                            />
                        </label> */}

                        {/* <button onClick={filterReseps}>Terapkan Filter</button> */}
                    </div>
                )}
            </div>

            <div className="carousel-container">
                <button className="nav-button left" onClick={handlePrev}>←</button>

                <div className="carousel-track" ref={carouselRef}>
                    {dataToShow.map((resep, index) => {
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
                                    harga={resep.TotalHarga}
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
