
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

const feeItems = [
    {
        title: "Tuition Fees",
        description:
            "Review the tuition fee applicable to your selected programme.",
    },
    {
        title: "Additional Costs",
        description:
            "Check whether other academic, practical training, or administrative costs apply.",
    },
    {
        title: "Payment Information",
        description:
            "Confirm the accepted payment methods, payment deadlines, and any instalment arrangements.",
    },
];

function FeeStructure() {
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
                        Fee Structure
                    </h1>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                        Plan for your studies by reviewing tuition fees,
                        additional costs, and payment information for your
                        chosen programme.
                    </p>
                </section>

                {/* Fee information */}
                <section className="px-6 pb-16 md:px-16">
                    <div className="mb-8">
                        <h2 className="font-serif text-2xl font-semibold">
                            Understanding Your Study Costs
                        </h2>

                        <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                            Before enrolling, confirm the current fees and
                            payment arrangements directly with the institute.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {feeItems.map((item, index) => (
                            <article
                                key={item.title}
                                className="rounded-lg border border-[#E8DFD0] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C99A52] hover:shadow-md"
                            >
                                <span className="font-serif text-3xl text-[#C99A52]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-5 font-serif text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    {/* Important information */}
                    <div className="mt-10 rounded-lg border border-[#E8DFD0] bg-white p-6 md:p-8">
                        <h2 className="font-serif text-xl font-semibold">
                            Request Current Fee Information
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            Fees may vary by programme and academic year.
                            Contact the institute to confirm the latest fee
                            structure before making payment.
                        </p>

                        <a
                            href="https://www.mgao.ac.tz/"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex rounded-md bg-[#18583D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#183B2D]"
                        >
                            Visit Official Website
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default FeeStructure;
