import { useEffect, useState, useRef } from "react";
import ResepCard from "./komponen/ResepCard";
import "./Resep.css";

function Resep() {
    const [reseps, setReseps] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [currentBg, setCurrentBg] = useState(0);
    const [budgetKey, setBudgetKey] = useState("");
    const [stokBahan, setStokBahan] = useState("");
    const [showFilter, setShowFilter] = useState(false);

    const backgroundImages = [
        "../src/assets/pngtree-person-cooking-at-the-kitchen-counter-picture-image_2625819.jpg",
        "../src/assets/1306038.jpg",
        "../src/assets/2305227.jpg"
    ];

    useEffect(() => {
        fetchResepData();
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const fetchResepData = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/resep");
            const data = await res.json();
            setReseps(data);
        } catch (error) {
            console.error("Error fetching resep:", error);
        }
    };

    const applyFilter = async () => {
        try {
            let filtered = [];

            const bahanList = stokBahan
                .split(',')
                .map(b => b.trim())
                .filter(b => b.length > 0);

            const isFilterBahan = bahanList.length > 0;
            const isFilterHarga = budgetKey !== "";

            // CASE 1: Filter bahan saja
            if (isFilterBahan && !isFilterHarga) {
                const res = await fetch("http://localhost:3000/api/resep/filter/bahan", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ NamaBahan: bahanList }),
                });
                filtered = await res.json();
            }

            // CASE 2: Filter harga saja
            else if (!isFilterBahan && isFilterHarga) {
                const res = await fetch(`http://localhost:3000/api/resep/filter/harga/${budgetKey}`);
                filtered = await res.json();
            }

            // CASE 3: Kombinasi filter bahan dan harga
            else if (isFilterBahan && isFilterHarga) {
                const res = await fetch("http://localhost:3000/api/resep/filter/bahan", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ NamaBahan: bahanList }),
                });
                const data = await res.json();

                // filter tambahan harga di frontend
                filtered = data.filter(r => {
                    const harga = r.TotalHarga || 0;
                    if (budgetKey === "below50") return harga <= 50000;
                    if (budgetKey === "50to75") return harga > 50000 && harga <= 75000;
                    if (budgetKey === "75to100") return harga > 75000 && harga <= 100000;
                    return true;
                });
            }

            // CASE 4: Tanpa filter
            else {
                fetchResepData();
                return;
            }

            setReseps(filtered);
            setCurrentIndex(0);
        } catch (error) {
            console.error("Error applying filter:", error);
        }
    };

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
                className="resepContainer"
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
                    <div className="filter-inputs" style={{ fontFamily: "sans-serif" }}>
                        <label>
                            Budget Harian:
                            <select
                                value={budgetKey}
                                onChange={(e) => setBudgetKey(e.target.value)}
                            >
                                <option value="">Semua</option>
                                <option value="<10">Di bawah Rp. 10.000</option>
                                <option value="<20">Di bawah Rp. 20.000</option>
                                <option value="<35">Di bawah Rp. 35.000</option>
                            </select>
                        </label>
                        <label>
                            Bahan Tersedia (pisahkan dengan koma):
                            <input
                                type="text"
                                value={stokBahan}
                                onChange={(e) => setStokBahan(e.target.value)}
                                placeholder="Contoh: Daging Ayam Ras"
                            />
                        </label>
                        <button onClick={applyFilter}>Terapkan Filter</button>
                    </div>
                )}
            </div>

            <div className="carousel-container">
                <button className="nav-button left" onClick={handlePrev}>❮</button>

                <div className="carousel-track" ref={carouselRef}>
                    {reseps.map((resep, index) => {
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
                            >{console.log("Resep di Resep.jsx:", resep)}
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

                <button className="nav-button right" onClick={handleNext}>❯</button>
            </div>
        </div>
    );
}

export default Resep;
