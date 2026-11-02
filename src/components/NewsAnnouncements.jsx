
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const announcements = [
  {
    title: "Important Notice to Students",
    date: "Date to be announced",
  },
  {
    title: "Admission Information for Prospective Students",
    date: "Date to be announced",
  },
  {
    title: "Academic Calendar and Important Dates",
    date: "Date to be announced",
  },
  {
    title: "Student Registration Updates",
    date: "Date to be announced",
  },
];

const latestNews = [
  {
    title: "Healthcare Students Building Practical Skills",
    description:
      "Practical learning helps prepare future healthcare professionals for the responsibilities of patient care.",
    date: "Demonstration content",
    image: "/images/news-practical-training.png",
    alt: "Healthcare students participating in practical training",
  },
  {
    title: "Learning the Importance of Community Health",
    description:
      "Community health education helps raise awareness and supports healthier communities.",
    date: "Demonstration content",
    image: "/images/news-community-health.png",
    alt: "Healthcare workers engaging with a community",
  },
  {
    title: "Developing Essential Skills for Patient Care",
    description:
      "Healthcare training combines knowledge, practical skills, and professional responsibility.",
    date: "Demonstration content",
    image: "/images/news-patient-care.png",
    alt: "Healthcare professional demonstrating patient care",
  },
];

function NewsAnnouncements() {
  const [selectedNews, setSelectedNews] = useState(null);

  // Close the popup when Escape is pressed.
  useEffect(() => {
    if (!selectedNews) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedNews(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedNews]);

  return (
    <section
      id="events"
      className="border-t border-gray-200 bg-gray-50 px-4 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#18583D]">
            Stay Informed
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#18583D] sm:text-4xl">
            News & Announcements
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-[#18583D]" />

          <p className="mt-3 whitespace-nowrap text-base leading-7 text-gray-600">
            Keep up with important notices, learning activities, and healthcare education updates from MGAO Health Training Institute.
          </p>
        </motion.div>

        {/* Equal-height cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {/* Announcements panel */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
          >
            <h3 className="mb-5 border-b border-gray-200 pb-4 text-xl font-bold text-[#18583D]">
              Announcements
            </h3>

            <ul>
              {announcements.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start justify-between gap-4 border-b border-dashed border-gray-200 py-4 last:border-b-0"
                >
                  <a
                    href="#admissions"
                    className="text-sm font-medium leading-6 text-gray-800 transition-colors hover:text-[#18583D]"
                  >
                    {item.title}
                  </a>

                  <span className="shrink-0 pt-1 text-right text-xs text-gray-500">
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#admissions"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#18583D] transition-colors hover:text-[#12432E]"
            >
              Admission Information
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          {/* Latest news panel */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
          >
            <h3 className="mb-2 border-b border-gray-200 pb-4 text-xl font-bold text-[#18583D]">
              Latest News
            </h3>

            <div className="flex-1">
              {latestNews.map((item) => (
                <article
                  key={item.title}
                  className="flex items-start gap-4 border-b border-gray-200 py-5 last:border-b-0"
                >
                  {/* Clickable news thumbnail */}
                  <button
                    type="button"
                    onClick={() => setSelectedNews(item)}
                    aria-label={`Enlarge image: ${item.title}`}
                    className="group h-20 w-24 shrink-0 overflow-hidden rounded-md bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18583D] focus-visible:ring-offset-2 sm:h-20 sm:w-28"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </button>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold leading-5 text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm">
                      {item.description}
                    </p>

                    <span className="mt-2 inline-block text-xs text-gray-500">
                      {item.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <a
              href="#gallery"
              className="mt-3 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#18583D] transition-colors hover:text-[#12432E]"
            >
              Explore College Activities
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Enlarged image popup */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedNews(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={selectedNews.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white p-4 shadow-2xl sm:p-6"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                aria-label="Close enlarged image"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-3xl leading-none text-gray-800 shadow transition-colors hover:bg-green-50 hover:text-[#18583D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18583D]"
              >
                <span aria-hidden="true">×</span>
              </button>

              {/* Enlarged image */}
              <div className="flex max-h-[65vh] items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.alt}
                  className="max-h-[65vh] max-w-full object-contain"
                />
              </div>

              {/* News information */}
              <div className="pt-4">
                <h3 className="pr-8 text-xl font-bold text-[#18583D] sm:text-2xl">
                  {selectedNews.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {selectedNews.description}
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  {selectedNews.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default NewsAnnouncements;
