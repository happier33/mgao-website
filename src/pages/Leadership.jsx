
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

const officers = [
    {
        name: "Mwalose Kigaha",
        role: "IT Officer",
        initials: "MK",
    },
    {
        name: "Lainess Mwenda",
        role: "Academic Officer",
        initials: "LM",
    },
    {
        name: "Yohan Gongo",
        role: "Examination Officer",
        initials: "YG",
    },
];

function Leadership() {
    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />

            <main className="bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-8">

                    {/* Page heading */}
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#18583D]">
                            Our Team
                        </p>

                        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Institute Leadership
                        </h1>

                        <p className="mt-5 leading-7 text-gray-600">
                            Meet the people responsible for guiding the institute
                            and supporting its academic and administrative work.
                        </p>
                    </div>

                    {/* Principal */}
                    <section className="flex flex-col items-center">
                        <div className="text-center">
                            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#18583D] text-3xl font-semibold text-white ring-8 ring-[#18583D]/10">
                                MH
                            </div>

                            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#18583D]">
                                Principal
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-gray-900">
                                Migisha Hames Ruhuha
                            </h2>
                        </div>

                        {/* Connector lines */}
                        <div className="mt-8 h-10 w-px bg-gray-300" />
                        <div className="h-px w-full max-w-2xl bg-gray-300" />
                    </section>

                    {/* Other officers */}
                    <section>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
                            {officers.map((officer) => (
                                <article
                                    key={officer.name}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="h-10 w-px bg-gray-300" />

                                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#18583D]/20 bg-gray-50 text-xl font-semibold text-[#18583D]">
                                        {officer.initials}
                                    </div>

                                    <h3 className="mt-5 text-lg font-semibold text-gray-900">
                                        {officer.name}
                                    </h3>

                                    <p className="mt-2 text-sm font-medium text-[#18583D]">
                                        {officer.role}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </>
    );
}

export default Leadership;
