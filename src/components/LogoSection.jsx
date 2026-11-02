function LogoSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-5 sm:py-6">                {/* Institute logo */}
                <img
                    src="/images/logo.png"
                    alt="MGAO Health Training Institute logo"
                    className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                />

                {/* Institute name */}
                <div>
                    <h1 className="text-xl font-bold leading-tight text-green-900 sm:text-2xl md:text-3xl">
                        MGAO Health Training Institute
                    </h1>

                    <p className="mt-1 text-sm text-gray-600 sm:text-base">
                        Accredited Institution by NACTVET
                    </p>
                </div>
            </div>
        </section>
    );
}

export default LogoSection;