import { motion } from "framer-motion";

function AboutCollege() {
  return (
    <section id="about" className="bg-white px-4 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-10">
        {/* College image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl shadow-md"
        >
          <img
            src="/images/college%20photo.jpeg"
            alt="MGAO Health Training Institute campus"
            className="h-72 w-full object-cover sm:h-80"
          />
        </motion.div>

        {/* About the college */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#18583D]">
            About Our College
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            MGAO Health Training Institute
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600">
            MGAO Health Training Institute is located approximately 3
            kilometres from the centre of Njombe Town, in the Southern
            Highlands of Tanzania. The institute provides a setting for
            students to pursue healthcare training and prepare for their
            future careers.
          </p>

          <a
            href="#about-us"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#18583D] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#12432E]"
          >
            Learn More About Us
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutCollege;