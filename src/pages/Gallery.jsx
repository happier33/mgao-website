
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    ChevronLeft,
    ChevronRight,
    Maximize2,
} from "lucide-react";

import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

const galleryImages = [
    {
        src: "/images/hero1.jpeg",
        alt: "MGAO students",
    },
    {
        src: "/images/hero2.jpeg",
        alt: "MGAO students",
    },
    {
        src: "/images/hero3.jpeg",
        alt: "MGAO students",
    },
    {
        src: "/images/news-practical-training.png",
        alt: "Students during practical training",
    },
    {
        src: "/images/news-patient-care.png",
        alt: "Patient care activities",
    },
    {
        src: "/images/news-community-health.png",
        alt: "Community health activities",
    },
];

const gallerySections = [
    {
        title: "Student Life",
        description:
            "A glimpse of our students and their experiences at MGAO.",
        images: galleryImages.slice(0, 3),
    },
    {
        title: "Practical Training & Community Engagement",
        description:
            "Moments from practical learning, hands-on training, and community activities.",
        images: galleryImages.slice(3, 6),
    },
];

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (index) => {
        setSelectedImage(index);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const showNext = () => {
        setSelectedImage((current) =>
            current === galleryImages.length - 1 ? 0 : current + 1
        );
    };

    const showPrevious = () => {
        setSelectedImage((current) =>
            current === 0 ? galleryImages.length - 1 : current - 1
        );
    };

    // Keyboard navigation for the lightbox
    useEffect(() => {
        if (selectedImage === null) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") closeImage();
            if (event.key === "ArrowRight") showNext();
            if (event.key === "ArrowLeft") showPrevious();
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedImage]);

    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />

            <main className="bg-[#FCFAF6] text-[#183B2D]">

                {/* Page introduction */}
                <section className="px-6 pb-12 pt-16 text-center md:pt-20">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7541]">
                        Explore MGAO
                    </p>

                    <h1 className="font-serif text-4xl font-medium md:text-5xl">
                        Life at{" "}
                        <span className="italic text-[#9A7541]">
                            MGAO
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64736A]">
                        A glimpse into our learning environment, student
                        experiences, practical training, and community
                        activities.
                    </p>
                </section>

                {/* Featured college image */}
                <section className="mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="group relative overflow-hidden rounded-2xl"
                    >
                        <img
                            src="/images/college photo.jpeg"
                            alt="MGAO Health Training Institute campus"
                            className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-[380px] lg:h-[480px]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 p-6 text-white md:p-10">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4D6A0]">
                                Our Institution
                            </p>

                            <h2 className="font-serif text-3xl md:text-4xl">
                                Welcome to MGAO
                            </h2>
                        </div>
                    </motion.div>
                </section>

                {/* Gallery sections */}
                <section className="mx-auto max-w-7xl space-y-16 px-6 pb-24 pt-20">

                    {gallerySections.map((section, sectionIndex) => (
                        <div key={section.title}>

                            {/* Section heading */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mb-8"
                            >
                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7541]">
                                    0{sectionIndex + 1} / Gallery
                                </p>

                                <h2 className="font-serif text-3xl font-medium md:text-4xl">
                                    {section.title}
                                </h2>

                                <p className="mt-3 max-w-xl text-sm leading-6 text-[#64736A]">
                                    {section.description}
                                </p>
                            </motion.div>

                            {/* Section images */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {section.images.map((image) => {
                                    const imageIndex =
                                        galleryImages.indexOf(image);

                                    return (
                                        <motion.button
                                            key={image.src}
                                            type="button"
                                            onClick={() =>
                                                openImage(imageIndex)
                                            }
                                            initial={{
                                                opacity: 0,
                                                y: 25,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.15,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            whileHover={{ y: -5 }}
                                            className="group overflow-hidden rounded-xl bg-[#F0E9DE] text-left focus:outline-none focus:ring-2 focus:ring-[#9A7541]"
                                            aria-label={`View ${image.alt} in full size`}
                                        >
                                            <div className="relative overflow-hidden">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    loading="lazy"
                                                    className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />

                                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
                                                    <Maximize2
                                                        size={28}
                                                        className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                    />
                                                </div>
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            {/* Full-screen image viewer */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-8"
                        onClick={closeImage}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={closeImage}
                            aria-label="Close image viewer"
                            className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                        >
                            <X size={24} />
                        </button>

                        {/* Previous button */}
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showPrevious();
                            }}
                            aria-label="Previous image"
                            className="absolute left-3 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        {/* Selected image */}
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="flex max-h-full max-w-5xl flex-col items-center"
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                        >
                            <img
                                src={galleryImages[selectedImage].src}
                                alt={galleryImages[selectedImage].alt}
                                className="max-h-[78vh] max-w-full rounded-lg object-contain"
                            />

                            <p className="mt-4 text-sm text-white/80">
                                {galleryImages[selectedImage].alt}
                                {" · "}
                                {selectedImage + 1} /{" "}
                                {galleryImages.length}
                            </p>
                        </motion.div>

                        {/* Next button */}
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showNext();
                            }}
                            aria-label="Next image"
                            className="absolute right-3 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </>
    );
}

export default Gallery;
