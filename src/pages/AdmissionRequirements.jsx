
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

const requirements = [
    {
        number: "01",
        title: "Academic Qualifications",
        description:
            "Applicants should review the academic qualifications required for their chosen programme.",
    },
    {
        number: "02",
        title: "Supporting Documents",
        description:
            "Prepare the academic certificates and identification documents requested during the application process.",
    },
    {
        number: "03",
        title: "Programme-Specific Criteria",
        description:
            "Some programmes may require particular science subjects or additional qualifications.",
    },
];

function AdmissionRequirements() {
    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />

            <main className="bg-[#FCFAF6] text-[#183B2D]">
                <section className="px-6 py-12 md:px-16">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9A7541]">
                        Admissions
                    </p>

                    <h1 className="font-serif text-3xl font-semibold md:text-4xl">
                        Admission Requirements
                    </h1>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                        Understand the qualifications and documents you may
                        need before applying to a programme at MGAO Health
                        Training Institute.
                    </p>
                </section>

                <section className="px-6 pb-16 md:px-16">
                    <div className="grid gap-6 md:grid-cols-3">
                        {requirements.map((item) => (
                            <article
                                key={item.number}
                                className="rounded-lg border border-[#E8DFD0] bg-white p-6"
                            >
                                <span className="font-serif text-3xl text-[#C99A52]">
                                    {item.number}
                                </span>

                                <h2 className="mt-5 font-serif text-xl font-semibold">
                                    {item.title}
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-lg border-l-4 border-[#C99A52] bg-[#F4EEE2] p-6">
                        <h2 className="font-serif text-xl font-semibold">
                            Before You Apply
                        </h2>

                        <p className="mt-3 leading-7 text-gray-700">
                            Entry grades, required subjects, and supporting
                            documents can differ by programme. Contact the
                            institute or consult its official admission
                            guidance to confirm the current requirements.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default AdmissionRequirements;
