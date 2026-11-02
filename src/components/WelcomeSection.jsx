import { motion } from "framer-motion";

function WelcomeSection() {
  return (
    <section className="bg-white px-4 py-6 sm:py-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_280px] md:gap-4 lg:gap-5">

          {/* Welcome message */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#18583D]">
              Welcome to MGAO
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              A Message from the Principal
            </h2>

            <div className="mt-4 space-y-3 text-base leading-7 text-gray-600">
              <p>
                Welcome to MGAO Health Training Institute. We are committed
                to helping students develop the knowledge, practical skills,
                and professional values needed in healthcare.
              </p>

              <p>
                We believe that quality education prepares competent and
                responsible healthcare professionals who can make a positive
                difference in their communities. We welcome students,
                parents, and partners to learn more about MGAO.
              </p>
            </div>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#18583D]" />
          </motion.div>

          {/* Portrait frame */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[280px] justify-self-center md:justify-self-start"
          >
            <div className="relative h-[290px] overflow-hidden rounded-2xl border-[5px] border-white bg-[#EAF2ED] shadow-[0_0_0_1px_#18583D,0_6px_18px_rgba(24,88,61,0.12)]">

              {/* Soft green backdrop */}
              <div className="absolute left-1/2 top-5 h-48 w-48 -translate-x-1/2 rounded-full bg-[#D2E4D8]" />

              {/* Fill the frame and clip overflow */}
              <img
                src="/images/Principal-pic.png"
                alt="Portrait of the Principal"
                className="absolute inset-0 z-10 h-full w-full object-cover object-[center_25%]"
              />

              <div className="absolute bottom-0 left-0 z-20 h-1.5 w-full bg-[#18583D]" />
            </div>

            {/* Principal's designation */}
            <div className="mx-3 rounded-b-xl bg-[#18583D] px-3 py-2.5 text-center text-white shadow-md">
              <p className="text-sm font-semibold">The Principal</p>
              <p className="mt-1 text-xs text-white/85">
                MGAO Health Training Institute
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;