
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />

            <main>
                {/* Page introduction */}
                {/* <section className="bg-[#18583D] px-6 py-16 text-center text-white md:py-20">
                    <div className="mx-auto max-w-4xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                            Get to Know Us
                        </p>

                        <h1 className="text-3xl font-bold md:text-5xl">
                            About MGAO Health Training Institute
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
                            Discover our history, purpose, leadership, and
                            commitment to developing competent healthcare
                            professionals.
                        </p>
                    </div>
                </section> */}

                {/* 1. Background and History */}
             
{/* 1. Background and History */}
<section
    id="background"
    className="px-6 py-16 md:py-20"
>
    <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">

        {/* Background Text */}
        <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#18583D]">
                About Our College
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#18583D] md:text-4xl">
                Our Background & History
            </h2>

            <div className="mt-6 space-y-4 leading-8 text-gray-600">
                <p>
                    MGAO Health Training Institute is located approximately
                    three kilometres from the centre of Njombe Town, in
                    Njombe Region, within the Southern Highlands of Tanzania.
                </p>

                <p>
                    The institute is dedicated to healthcare education
                    and the development of knowledgeable, skilled, and
                    competent professionals who can respond to the needs
                    of the healthcare sector.
                </p>

                <p>
                    Through education and practical learning, MGAO aims
                    to prepare students with the knowledge, skills, and
                    professional responsibility needed to contribute
                    to quality healthcare services and healthier communities.
                </p>

                <p>
                    Its commitment to healthcare training reflects the
                    importance of developing capable professionals who
                    can serve individuals, families, and communities.
                </p>
            </div>
        </div>

        {/* Institute Image */}
        <div className="overflow-hidden rounded-xl">
            <img
                src="/images/college photo.jpeg"
                alt="MGAO Health Training Institute"
                className="h-72 w-full object-cover md:h-[440px]"
            />
        </div>

    </div>
</section>


                {/* 2. Welcome Message */}

                {/* 2. Welcome Message from the Principal */}
                <section
                    id="welcome"
                    className="bg-gray-50 px-6 py-16 md:py-20"
                >
                    <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_2fr]">

                        {/* Principal's Photo */}
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="/images/Principal pic.jpg"
                                alt="Principal of MGAO Health Training Institute"
                                className="h-80 w-full object-cover object-top md:h-[420px]"
                            />
                        </div>

                        {/* Principal's Message */}
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#18583D]">
                                A Message from Our Principal
                            </p>

                            <h2 className="text-3xl font-bold leading-tight text-[#18583D] md:text-4xl">
                                Welcome to MGAO Health Training Institute
                            </h2>

                            <div className="mt-6 space-y-4 leading-8 text-gray-600">
                                <p>
                                    We are committed to supporting students in developing
                                    the knowledge, practical skills, and professional
                                    values needed in health training.
                                </p>

                                <p>
                                    We believe that quality education helps prepare
                                    responsible and competent healthcare professionals
                                    who can contribute positively to the well-being
                                    of their communities.
                                </p>

                                <p>
                                    Through learning, practical experience, and dedication,
                                    we aim to encourage our students to grow professionally
                                    and serve their communities with competence and care.
                                </p>

                                <p>
                                    We invite prospective students, parents, and partners
                                    to explore what MGAO has to offer and join us in our
                                    commitment to healthcare education.
                                </p>
                            </div>

                            <div className="mt-7 border-l-4 border-[#18583D] pl-4">
                                <p className="font-bold text-gray-800">
                                    The Principal
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    MGAO Health Training Institute
                                </p>
                            </div>
                        </div>

                    </div>
                </section>



                {/* 3. Vision, Mission and Core Values */}

                {/* 3. Vision, Mission and Core Values */}
                <section
                    id="vision-mission"
                    className="bg-gray-50 px-6 py-16 md:py-20"
                >
                    <div className="mx-auto max-w-6xl">

                        {/* Section Heading */}
                        <div className="mb-12 text-center">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#18583D]">
                                Who We Are
                            </p>

                            <h2 className="text-3xl font-bold text-[#18583D] md:text-4xl">
                                Our Vision, Mission & Values
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                                We are committed to healthcare education that develops
                                competent professionals and contributes to healthier
                                communities.
                            </p>
                        </div>

                        {/* Three Cards */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                            {/* Vision */}
                            <div className="rounded-lg border border-gray-200 bg-white p-7">
                                <h3 className="mb-4 text-xl font-bold text-[#18583D]">
                                    Our Vision
                                </h3>

                                <div className="mb-5 h-1 w-12 bg-[#18583D]"></div>

                                <p className="leading-8 text-gray-600">
                                    To have more trained, competent, reliable, and trusted
                                    personnel who contribute to building a healthier
                                    generation.
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="rounded-lg border border-gray-200 bg-white p-7">
                                <h3 className="mb-4 text-xl font-bold text-[#18583D]">
                                    Our Mission
                                </h3>

                                <div className="mb-5 h-1 w-12 bg-[#18583D]"></div>

                                <p className="leading-8 text-gray-600">
                                    To continuously impart and strengthen knowledge, skills,
                                    and quality of service through a dynamic, culturally
                                    and linguistically responsive, competency-based, and
                                    data-driven learning environment.
                                </p>
                            </div>

                            {/* Core Values */}
                            <div className="rounded-lg border border-gray-200 bg-white p-7">
                                <h3 className="mb-4 text-xl font-bold text-[#18583D]">
                                    Our Core Values
                                </h3>

                                <div className="mb-5 h-1 w-12 bg-[#18583D]"></div>

                                <p className="leading-8 text-gray-600">
                                    Our core values guide our commitment to learning,
                                    professional conduct, quality healthcare education,
                                    and service to the community.
                                </p>

                                <p className="mt-3 text-sm italic text-gray-500">
                                    Official core values to be confirmed.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 4. Leadership and Management */}

                {/* 4. Leadership and Management */}
                <section
                    id="leadership"
                    className="px-6 py-16 md:py-20"
                >
                    <div className="mx-auto max-w-5xl">

                        {/* Section Heading */}
                        <div className="mb-14 text-center">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#18583D]">
                                Our Team
                            </p>

                            <h2 className="text-3xl font-bold text-[#18583D] md:text-4xl">
                                Leadership & Management
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                                Meet the team responsible for guiding the institute,
                                supporting academic activities, and managing essential
                                institutional operations.
                            </p>
                        </div>

                        {/* Principal - Top of the Hierarchy */}
                        <div className="flex flex-col items-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#18583D] text-2xl font-bold text-white shadow-md ring-2 ring-[#18583D]/20">
                                MH
                            </div>

                            <div className="mt-4 w-full max-w-sm rounded-xl border border-gray-200 bg-white px-6 py-5 text-center shadow-sm">
                                <h3 className="text-lg font-bold text-[#18583D]">
                                    Migisha Hames Ruhuha
                                </h3>

                                <p className="mt-2 text-sm font-medium text-gray-600">
                                    Principal
                                </p>
                            </div>

                            {/* Connection to the Officers */}
                            <div className="h-10 w-px bg-[#18583D]/40"></div>
                            <div className="hidden h-px w-2/3 bg-[#18583D]/40 md:block"></div>
                        </div>

                        {/* Officers */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                            {/* IT Officer */}
                            <div className="flex flex-col items-center text-center">
                                <div className="h-8 w-px bg-[#18583D]/40 md:hidden"></div>

                                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xl font-bold text-[#18583D] shadow-sm ring-2 ring-[#18583D]/15">
                                    MK
                                </div>

                                <div className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-5 py-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Mwalose Kigaha
                                    </h3>

                                    <p className="mt-2 text-sm font-medium text-[#18583D]">
                                        IT Officer
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-gray-500">
                                        Supports the institute's information technology
                                        and digital systems.
                                    </p>
                                </div>
                            </div>

                            {/* Academic Officer */}
                            <div className="flex flex-col items-center text-center">
                                <div className="h-8 w-px bg-[#18583D]/40 md:hidden"></div>

                                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xl font-bold text-[#18583D] shadow-sm ring-2 ring-[#18583D]/15">
                                    LM
                                </div>

                                <div className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-5 py-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Lainess Mwenda
                                    </h3>

                                    <p className="mt-2 text-sm font-medium text-[#18583D]">
                                        Academic Officer
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-gray-500">
                                        Supports academic coordination and teaching
                                        and learning activities.
                                    </p>
                                </div>
                            </div>

                            {/* Examination Officer */}
                            <div className="flex flex-col items-center text-center">
                                <div className="h-8 w-px bg-[#18583D]/40 md:hidden"></div>

                                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xl font-bold text-[#18583D] shadow-sm ring-2 ring-[#18583D]/15">
                                    YG
                                </div>

                                <div className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-5 py-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Yohan Gongo
                                    </h3>

                                    <p className="mt-2 text-sm font-medium text-[#18583D]">
                                        Examination Officer
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-gray-500">
                                        Supports the coordination and administration
                                        of examinations.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* 5. Awards, Accreditation and Achievements */}

                {/* 5. Accreditation and Achievements */}
                <section
                    id="achievements"
                    className="bg-gray-50 px-6 py-16 md:py-20"
                >
                    <div className="mx-auto max-w-6xl">

                        {/* Section Heading */}
                        <div className="mb-12 text-center">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#18583D]">
                                Institutional Recognition
                            </p>

                            <h2 className="text-3xl font-bold text-[#18583D] md:text-4xl">
                                Accreditation & Achievements
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                                MGAO Health Training Institute is committed to healthcare
                                education, professional development, and preparing learners
                                for service in their communities.
                            </p>
                        </div>

                        {/* Achievement Cards */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                            {/* Autonomous Status */}
                            <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                <div className="mb-4 h-1 w-12 rounded-full bg-[#18583D]"></div>

                                <h3 className="text-xl font-bold text-[#18583D]">
                                    Autonomous Status
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    The institute identifies autonomous status as part of
                                    its institutional profile. Official details can be
                                    provided here to explain the recognition and its scope.
                                </p>
                            </div>

                            {/* Centre of Development */}
                            <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                <div className="mb-4 h-1 w-12 rounded-full bg-[#18583D]"></div>

                                <h3 className="text-xl font-bold text-[#18583D]">
                                    Centre of Development
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    The institute's profile highlights development in
                                    Nursing, Pharmacy, Clinical Medicine, and Social Work
                                    education. The official designation and scope should
                                    be confirmed before publication.
                                </p>
                            </div>

                            {/* Institutional Accreditation */}
                            <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                <div className="mb-4 h-1 w-12 rounded-full bg-[#18583D]"></div>

                                <h3 className="text-xl font-bold text-[#18583D]">
                                    Institutional Accreditation
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    This section can present the institute's accreditation
                                    status, relevant regulatory body, and supporting
                                    documentation once the current official details
                                    have been confirmed.
                                </p>
                            </div>

                            {/* Graduate Achievements */}
                            <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                <div className="mb-4 h-1 w-12 rounded-full bg-[#18583D]"></div>

                                <h3 className="text-xl font-bold text-[#18583D]">
                                    Graduate Achievements
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    The institute highlights its graduates' participation
                                    in different professional fields. Verified examination
                                    results, professional registrations, or alumni
                                    achievements can be added here to demonstrate their
                                    contributions.
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

export default About;
