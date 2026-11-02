
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

function Welcome() {
    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />

            <main>
                {/* Page heading */}
                {/* <section className="bg-[#18583D] px-6 py-12 text-center text-white md:py-16">
                    <div className="mx-auto max-w-4xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/80">
                            A Message from Our Principal
                        </p>

                        <h1 className="text-3xl font-bold md:text-5xl">
                            Welcome to MGAO
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
                            A message of welcome and commitment to healthcare education.
                        </p>
                    </div>
                </section> */}

                {/* Principal's Welcome Message */}
                <section className="px-6 py-16 md:py-20">
                    <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_2fr] md:gap-14">

                        {/* Principal's Photo */}
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="/images/Principal pic.jpg"
                                alt="Principal of MGAO Health Training Institute"
                                className="h-80 w-full object-cover object-top md:h-[420px]"
                            />
                        </div>

                        {/* Welcome Message */}
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#18583D]">
                                Welcome Message
                            </p>

                            <h2 className="text-3xl font-bold leading-tight text-[#18583D] md:text-4xl">
                                A Word from Our Principal
                            </h2>

                            <div className="mt-6 space-y-4 leading-8 text-gray-600">
                                <p>
                                    We are committed to supporting students
                                    in developing the knowledge, practical
                                    skills, and professional values needed
                                    in health training.
                                </p>

                                <p>
                                    We believe that quality education helps
                                    prepare responsible and competent
                                    healthcare professionals who can
                                    contribute positively to the well-being
                                    of their communities.
                                </p>

                                <p>
                                    Through learning, practical experience,
                                    and dedication, we aim to encourage our
                                    students to grow professionally and serve
                                    their communities with competence and care.
                                </p>

                                <p>
                                    We invite prospective students, parents,
                                    and partners to explore what MGAO has
                                    to offer and join us in our commitment
                                    to healthcare education.
                                </p>
                            </div>

                            {/* Signature */}
                            <div className="mt-8 border-l-4 border-[#18583D] pl-4">
                                <p className="font-bold text-gray-800">
                                    Migisha Hames Ruhuha
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    Principal, MGAO Health Training Institute
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

export default Welcome;
