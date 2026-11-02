
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

function Academics() {
    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />

            <main className="bg-[#FCFAF6] text-[#183B2D]">

                {/* Page heading */}
                <section className="px-6 py-12 md:px-16">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9A7541]">
                        Academic Life
                    </p>

                    <h1 className="font-serif text-3xl font-semibold md:text-4xl">
                        Teaching, Learning & Development
                    </h1>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                        Explore the learning experience at MGAO Health Training
                        Institute, where academic knowledge and practical
                        learning contribute to professional development.
                    </p>
                </section>

                {/* Teaching and Learning */}
                <section className="px-6 pb-16 md:px-16">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#9A7541]">
                                01 — Academic Learning
                            </p>

                            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
                                Teaching & Learning
                            </h2>

                            <p className="mt-5 leading-7 text-gray-600">
                                Academic learning provides students with
                                foundational knowledge and understanding
                                relevant to their chosen fields of study.
                                Through instruction and guided learning,
                                students develop the knowledge needed for
                                their professional journeys.
                            </p>
                        </div>

                        <div className="flex min-h-[280px] items-center justify-center rounded-lg bg-[#F4EEE2] p-8">
                            <div className="max-w-sm text-center">
                                <span className="text-5xl text-[#9A7541]">
                                    01
                                </span>
                                <p className="mt-4 font-serif text-xl text-[#183B2D]">
                                    Building Knowledge Through Learning
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practical Training */}
                <section className="bg-white px-6 py-16 md:px-16">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div className="order-2 flex min-h-[280px] items-center justify-center rounded-lg bg-[#F4EEE2] p-8 md:order-1">
                            <div className="max-w-sm text-center">
                                <span className="text-5xl text-[#9A7541]">
                                    02
                                </span>
                                <p className="mt-4 font-serif text-xl text-[#183B2D]">
                                    Developing Practical Skills
                                </p>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#9A7541]">
                                02 — Hands-on Experience
                            </p>

                            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
                                Practical & Clinical Training
                            </h2>

                            <p className="mt-5 leading-7 text-gray-600">
                                Practical learning helps students connect
                                theoretical knowledge with real-world
                                professional skills. It plays an important
                                role in preparing learners for the demands
                                of healthcare and community services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Examinations and Assessment */}
                <section className="px-6 py-16 md:px-16">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#9A7541]">
                                03 — Academic Progress
                            </p>

                            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
                                Examinations & Assessment
                            </h2>

                            <p className="mt-5 leading-7 text-gray-600">
                                Assessment is an important part of academic
                                development. It helps evaluate students'
                                understanding, monitor their progress and
                                identify areas where further learning
                                may be needed.
                            </p>
                        </div>

                        <div className="flex min-h-[280px] items-center justify-center rounded-lg bg-[#F4EEE2] p-8">
                            <div className="max-w-sm text-center">
                                <span className="text-5xl text-[#9A7541]">
                                    03
                                </span>
                                <p className="mt-4 font-serif text-xl text-[#183B2D]">
                                    Measuring Academic Progress
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default Academics;
