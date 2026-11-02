
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

function Background() {
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
                            About Our College
                        </p>

                        <h1 className="text-3xl font-bold md:text-5xl">
                            Background & History
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
                            Learn about MGAO Health Training Institute,
                            its location, and its commitment to healthcare education.
                        </p>
                    </div>
                </section> */}

                {/* Background and History */}
                <section className="px-6 py-16 md:py-20">
                    <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">

                        {/* Background Text */}
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#18583D]">
                                About the Institute
                            </p>

                            <h2 className="text-3xl font-bold leading-tight text-[#18583D] md:text-4xl">
                                Our Background & History
                            </h2>

                            <div className="mt-6 space-y-4 leading-8 text-gray-600">
                                <p>
                                    MGAO Health Training Institute is located
                                    approximately three kilometres from the
                                    centre of Njombe Town, in Njombe Region,
                                    within the Southern Highlands of Tanzania.
                                </p>

                                <p>
                                    The institute is dedicated to healthcare
                                    education and the development of
                                    knowledgeable, skilled, and competent
                                    professionals who can respond to the needs
                                    of the healthcare sector.
                                </p>

                                <p>
                                    Through education and practical learning,
                                    MGAO aims to prepare students with the
                                    knowledge, skills, and professional
                                    responsibility needed to contribute to
                                    quality healthcare services and healthier
                                    communities.
                                </p>

                                <p>
                                    Its commitment to healthcare training
                                    reflects the importance of developing
                                    capable professionals who can serve
                                    individuals, families, and communities.
                                </p>
                            </div>
                        </div>

                        {/* Institute Image */}
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="/images/college photo.jpeg"
                                alt="MGAO Health Training Institute"
                                className="h-72 w-full rounded-xl object-cover md:h-[440px]"
                            />
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Background;
