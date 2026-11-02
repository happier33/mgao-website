
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const programmes = [
    {
        category: "Clinical Care",
        title: "Clinical Medicine",
        description:
            "Prepare for a career supporting the diagnosis, treatment, and care of patients.",
    },
    {
        category: "Dental Health",
        title: "Clinical Dentistry",
        description:
            "Explore professional training focused on oral health and dental care.",
    },
    {
        category: "Laboratory Services",
        title: "Medical Laboratory Sciences",
        description:
            "Learn about laboratory investigations that support disease diagnosis and patient care.",
    },
    {
        category: "Pharmaceutical Care",
        title: "Pharmaceutical Sciences",
        description:
            "Explore the principles of medicines, pharmaceutical practice, and patient safety.",
    },
    {
        category: "Nursing Care",
        title: "Nursing and Midwifery",
        description:
            "Prepare for a healthcare career focused on nursing and maternal care.",
    },
    {
        category: "Community Services",
        title: "Social Work",
        description:
            "Explore ways to support individuals, families, and communities.",
    },
    {
        category: "Community Services",
        title: "Community Development",
        description:
            "Learn about community participation, development initiatives, and social improvement.",
    },
];

function Programmes() {
    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />

            <main className="bg-[#FCFAF6] text-[#183B2D]">

                {/* Page introduction */}
                <section className="px-6 py-12 md:px-16">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9A7541]">
                        Admissions
                    </p>

                    <h1 className="font-serif text-3xl font-semibold md:text-4xl">
                        Explore Our Programmes
                    </h1>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                        Discover study opportunities and explore the paths
                        that could help you build your future in healthcare
                        and community services.
                    </p>
                </section>

                {/* Programme cards */}
                <section className="px-6 pb-16 md:px-16">
                    <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#E8DFD0] pb-4">
                        <h2 className="font-serif text-xl font-semibold">
                            Available Programmes
                        </h2>

                        <span className="text-sm text-gray-500">
                            Explore your options
                        </span>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {programmes.map((programme, index) => (
                            <article
                                key={programme.title}
                                className="group flex flex-col rounded-lg border border-[#E8DFD0] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C99A52] hover:shadow-md"
                            >
                                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4EEE2] font-serif text-lg text-[#9A7541]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className="text-xs font-semibold uppercase tracking-wider text-[#9A7541]">
                                    {programme.category}
                                </p>

                                <h3 className="mt-3 font-serif text-xl font-semibold leading-snug">
                                    {programme.title}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                                    {programme.description}
                                </p>

                                {/* Link to requirements */}
                                <div className="mt-6 border-t border-[#F0E9DE] pt-4">
                                    <Link
                                        to="/admissions/requirements"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#18583D] transition hover:text-[#9A7541]"
                                    >
                                        View entry requirements
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <p className="mt-8 text-sm leading-6 text-gray-500">
                        Please contact the institute to confirm current
                        programme availability, entry requirements, and
                        admission details.
                    </p>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default Programmes;
