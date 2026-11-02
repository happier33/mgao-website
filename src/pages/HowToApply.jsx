
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

const applicationSteps = [
    {
        number: "01",
        title: "Explore Programmes",
        description:
            "Review the available programmes and identify the course you wish to pursue.",
    },
    {
        number: "02",
        title: "Check Requirements",
        description:
            "Confirm that you meet the academic and other entry requirements for your chosen programme.",
    },
    {
        number: "03",
        title: "Prepare Your Details",
        description:
            "Gather the personal information and supporting documents requested for your application.",
    },
    {
        number: "04",
        title: "Apply Online",
        description:
            "Use the institute's application portal and follow the instructions provided to submit your application.",
    },
];

function HowToApply() {
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
                        How to Apply
                    </h1>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                        Follow these general steps to prepare for your
                        application to MGAO Health Training Institute.
                    </p>
                </section>

                {/* Application steps */}
                <section className="px-6 pb-16 md:px-16">
                    <div className="mb-8 border-b border-[#E8DFD0] pb-4">
                        <h2 className="font-serif text-2xl font-semibold">
                            Your Application Journey
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            Prepare carefully before submitting your application.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {applicationSteps.map((step) => (
                            <article
                                key={step.number}
                                className="flex gap-5 rounded-lg border border-[#E8DFD0] bg-white p-5 sm:p-6"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4EEE2] font-serif text-lg text-[#9A7541]">
                                    {step.number}
                                </div>

                                <div>
                                    <h3 className="font-serif text-xl font-semibold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Application portal */}
                    <div className="mt-10 rounded-lg bg-[#183B2D] p-7 text-white md:p-9">
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#E0BC7C]">
                            Ready to begin?
                        </p>

                        <h2 className="mt-3 font-serif text-2xl font-semibold">
                            Start Your Online Application
                        </h2>

                        <p className="mt-3 max-w-2xl leading-7 text-white/80">
                            Visit the existing MGAO application portal to
                            access the online application process.
                        </p>

                        <a
                            href="https://mgaoamis.ac.tz/Students/onlineprofile.php"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex rounded-md bg-[#C99A52] px-6 py-3 text-sm font-semibold text-[#183B2D] transition hover:bg-[#E0BC7C]"
                        >
                            Visit Application Portal
                        </a>
                    </div>

                    <p className="mt-6 text-sm leading-6 text-gray-500">
                        Application procedures, deadlines, and required
                        documents should be confirmed with the institute.
                    </p>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default HowToApply;
