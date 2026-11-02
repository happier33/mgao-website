
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

function Achievements() {
    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />

            <main className="overflow-hidden bg-[#FCFAF6]">

                {/* Page introduction */}
                <section className="px-5 py-16 sm:px-8 sm:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">

                            <div>
                                <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#18583D]">
                                    <span className="h-px w-9 bg-[#C99A52]" />
                                    Our Achievements
                                </p>

                                <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#183B2D] sm:text-5xl lg:text-6xl">
                                    A Legacy of
                                    <span className="block font-serif font-normal italic text-[#9A7541]">
                                        Excellence
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
                                    MGAO Health Training Institute takes pride
                                    in its institutional recognition, commitment
                                    to quality healthcare education, and the
                                    achievements of its graduates across
                                    different fields.
                                </p>
                            </div>

                            {/* Featured recognition */}
                            <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
                                <div className="absolute -right-3 -top-3 h-full w-full rounded-tl-[5rem] rounded-br-[5rem] border border-[#C99A52]/50" />

                                <div className="relative flex min-h-[290px] flex-col justify-between rounded-tl-[5rem] rounded-br-[5rem] bg-[#18583D] p-8 text-white sm:p-10">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 text-2xl text-[#E7C58A]">
                                        ★
                                    </div>

                                    <div className="mt-10">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C58A]">
                                            Institutional Recognition
                                        </p>

                                        <h2 className="mt-3 font-serif text-3xl leading-snug sm:text-4xl">
                                            Autonomous
                                            <br />
                                            Status
                                        </h2>

                                        <p className="mt-4 text-sm leading-6 text-white/80">
                                            A recognition highlighted in the
                                            institute's profile.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* College achievements — original layout retained */}
                <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9A7541]">
                                    01 / Recognition
                                </p>

                                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#183B2D] sm:text-4xl">
                                    College
                                    <br />
                                    Achievements
                                </h2>

                                <p className="mt-5 leading-7 text-gray-600">
                                    The institute's stated achievements reflect
                                    its development and commitment to
                                    healthcare education.
                                </p>
                            </div>

                            <div>
                                <p className="text-base leading-8 text-gray-600">
                                    MGAO Health Training Institute reports
                                    Autonomous Status as a significant
                                    institutional recognition. The institute's
                                    profile also identifies its role in the
                                    development of education in Nursing,
                                    Pharmacy, Clinical Medicine and Social Work.
                                </p>

                                <div className="mt-8 divide-y divide-[#E8E2D7] border-y border-[#E8E2D7]">

                                    <div className="flex gap-5 py-6">
                                        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4EEE2] text-lg text-[#9A7541]">
                                            ✓
                                        </span>

                                        <div>
                                            <h3 className="text-lg font-semibold text-[#183B2D]">
                                                Autonomous Status
                                            </h3>
                                            <p className="mt-2 leading-7 text-gray-600">
                                                The institute identifies
                                                Autonomous Status among its
                                                institutional recognitions.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5 py-6">
                                        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4EEE2] text-lg text-[#9A7541]">
                                            ✓
                                        </span>

                                        <div>
                                            <h3 className="text-lg font-semibold text-[#183B2D]">
                                                Centre of Development
                                            </h3>
                                            <p className="mt-2 leading-7 text-gray-600">
                                                Nursing, Pharmacy, Clinical
                                                Medicine and Social Work
                                                Education.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Recognition and accreditation */}
                <section className="px-5 py-16 sm:px-8 sm:py-20">
                    <div className="mx-auto max-w-6xl">

                        <div className="grid gap-8 border-t border-[#DCD4C6] pt-8 md:grid-cols-[0.75fr_1.25fr] md:gap-20">

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9A7541]">
                                    02 / Recognition &amp; Accreditation
                                </p>

                                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#183B2D] sm:text-4xl">
                                    Institutional
                                    <span className="block font-serif font-normal italic text-[#9A7541]">
                                        Accreditation
                                    </span>
                                </h2>
                            </div>

                            <div className="md:pt-1">
                                <p className="text-base leading-8 text-gray-600">
                                    The institute's published profile identifies
                                    the National Council for Technical Education
                                    (NACTE) in connection with its institutional
                                    recognition and accreditation status.
                                </p>

                                <div className="mt-7 flex items-start gap-4 border-l-2 border-[#C99A52] pl-5">
                                    <div>
                                        <h3 className="font-semibold text-[#183B2D]">
                                            Institutional Standards
                                        </h3>
                                        <p className="mt-2 text-sm leading-7 text-gray-600">
                                            Current accreditation details and
                                            recognition status should be confirmed
                                            against the institute's latest official
                                            documentation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Graduate achievements */}
                <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
                    <div className="mx-auto max-w-6xl">

                        <div className="grid gap-8 border-t border-[#DCD4C6] pt-8 md:grid-cols-[0.75fr_1.25fr] md:gap-20">

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9A7541]">
                                    03 / Our Graduates
                                </p>

                                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#183B2D] sm:text-4xl">
                                    Beyond the
                                    <span className="block font-serif font-normal italic text-[#9A7541]">
                                        Classroom
                                    </span>
                                </h2>
                            </div>

                            <div className="md:pt-1">
                                <p className="text-base leading-8 text-gray-600">
                                    The institute's published profile states
                                    that its graduates have excelled in national
                                    board examinations for nurses, Pharmacy
                                    Council examinations and medical technology
                                    examinations.
                                </p>

                                <p className="mt-5 text-base leading-8 text-gray-600">
                                    It also highlights alumni working across
                                    health sciences, communication, education,
                                    entertainment, business, hospitality and
                                    social work. Their diverse career paths
                                    reflect the range of fields in which
                                    graduates contribute to society.
                                </p>

                                <div className="mt-8 flex items-center gap-4">
                                    <span className="h-px w-12 bg-[#C99A52]" />
                                    <p className="font-serif text-lg italic text-[#9A7541]">
                                        Learning. Growth. Contribution.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default Achievements;
