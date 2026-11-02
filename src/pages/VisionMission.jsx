
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

function VisionMission() {
    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />

            <main>
                <section className="px-6 py-16 md:py-24">
                    <div className="mx-auto max-w-5xl">

                        {/* Introduction */}
                        <div className="mb-16 max-w-3xl">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#18583D]">
                                Our Purpose & Direction
                            </p>

                            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                                Vision, Mission & Core Values
                            </h1>

                            <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                                Our vision, mission, and values express the
                                direction of MGAO Health Training Institute
                                and its commitment to healthcare education,
                                professional development, and service to
                                the community.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="grid gap-6 border-t border-gray-200 py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-12">
                            <div>
                                <div className="mb-3 h-1 w-12 bg-[#18583D]"></div>
                                <h2 className="text-2xl font-bold text-[#18583D]">
                                    Our Vision
                                </h2>
                            </div>

                            <p className="max-w-3xl text-lg leading-8 text-gray-700">
                                To have more trained, competent, reliable,
                                and trusted personnel who contribute to
                                building a healthier generation.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="grid gap-6 border-t border-gray-200 py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-12">
                            <div>
                                <div className="mb-3 h-1 w-12 bg-[#18583D]"></div>
                                <h2 className="text-2xl font-bold text-[#18583D]">
                                    Our Mission
                                </h2>
                            </div>

                            <p className="max-w-3xl text-lg leading-8 text-gray-700">
                                To continuously impart and strengthen
                                knowledge, skills, and quality of service
                                through a dynamic, culturally and
                                linguistically responsive, competency-based,
                                and data-driven learning environment.
                            </p>
                        </div>

                        {/* Core Values */}
                        <div className="grid gap-6 border-t border-b border-gray-200 py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-12">
                            <div>
                                <div className="mb-3 h-1 w-12 bg-[#18583D]"></div>
                                <h2 className="text-2xl font-bold text-[#18583D]">
                                    Our Core Values
                                </h2>
                            </div>

                            <div className="max-w-3xl">
                                <p className="text-lg leading-8 text-gray-700">
                                    Our core values guide our commitment
                                    to learning, professional conduct,
                                    quality healthcare education, and
                                    service to the community.
                                </p>

                                <p className="mt-4 text-sm italic leading-6 text-gray-500">
                                    The institute's official list of
                                    core values can be added here once
                                    confirmed.
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

export default VisionMission;
