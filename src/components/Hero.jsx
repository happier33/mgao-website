
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/images/hero1.jpeg",
  "/images/hero2.jpeg",
  "/images/hero3.jpeg",
];

function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="bg-white px-4 pt-6 pb-10 sm:pt-8 sm:pb-14"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left side: Welcome text */}
        <div className="flex flex-col justify-start">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-800"
          >
            MGAO Health Training Institute
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl"
          >
            Your Future in Healthcare Starts Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg"
          >
            Build the knowledge and practical skills needed to pursue a
            future in healthcare. Explore our training opportunities,
            develop your potential, and take the next step towards making
            a difference in the health and well-being of your community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#admissions"
              className="rounded-md bg-green-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-900"
            >
              Apply for Admission
            </a>

            <a
              href="#academics"
              className="rounded-md border border-green-800 px-6 py-3 font-semibold text-green-800 transition-colors hover:bg-green-50"
            >
              Explore Programmes
            </a>
          </motion.div>
        </div>

        {/* Right side: Automatic image carousel */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.img
                  key={images[activeImage]}
                  src={images[activeImage]}
                  alt={`MGAO Health Training Institute photo ${activeImage + 1}`}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{
                    duration: 0.45,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Image navigation dots */}
          <div className="mt-5 flex justify-center gap-3">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-pressed={activeImage === index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeImage === index
                    ? "w-8 bg-green-800"
                    : "w-2.5 bg-gray-300 hover:bg-green-500"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
