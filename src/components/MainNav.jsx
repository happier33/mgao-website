
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const aboutLinks = [
    { label: "Background & History", href: "/about/background" },
    { label: "Welcome Message", href: "/about/welcome" },
    { label: "Vision, Mission & Values", href: "/about/vision-mission" },
    { label: "Leadership & Management", href: "/about/leadership" },
    { label: "Accreditation & Achievements", href: "/about/achievements" },
];

const admissionsLinks = [
    { label: "Programmes Offered", href: "/admissions/programmes" },
    { label: "Admission Requirements", href: "/admissions/requirements" },
    { label: "How to Apply", href: "/admissions/how-to-apply" },
    { label: "Fee Structure", href: "/admissions/fees" },
];

const navLinks = [
    { label: "Academics", href: "/academics" },
    // { label: "Events", href: "#events" },
    { label: "Gallery", href: "/gallery" },
    // { label: "Contact Us", href: "#contact" },
    { label: "Contact Us", href: "/contact" },
];

function MainNav() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [admissionsOpen, setAdmissionsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white text-gray-800 shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-1 px-4 py-2">

                <Link
                    to="/"
                    className="rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200 hover:bg-green-50 hover:text-green-800 sm:px-4"
                >
                    Home
                </Link>

                {/* About dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                >
                    <button
                        type="button"
                        onClick={() => setAboutOpen((open) => !open)}
                        aria-expanded={aboutOpen}
                        className="flex items-center gap-1 rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200 hover:bg-green-50 hover:text-green-800 sm:px-4"
                    >
                        About
                        <ChevronDown
                            size={16}
                            className={`transition-transform ${
                                aboutOpen ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {aboutOpen && (
                        <div className="absolute left-0 top-full z-50 w-64 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                            {aboutLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setAboutOpen(false)}
                                    className="block px-4 py-3 text-sm transition-colors hover:bg-green-50 hover:text-[#18583D]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Admissions dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setAdmissionsOpen(true)}
                    onMouseLeave={() => setAdmissionsOpen(false)}
                >
                    <button
                        type="button"
                        onClick={() => setAdmissionsOpen((open) => !open)}
                        aria-expanded={admissionsOpen}
                        className="flex items-center gap-1 rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200 hover:bg-green-50 hover:text-green-800 sm:px-4"
                    >
                        Admissions
                        <ChevronDown
                            size={16}
                            className={`transition-transform ${
                                admissionsOpen ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {admissionsOpen && (
                        <div className="absolute left-0 top-full z-50 w-64 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                            {admissionsLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setAdmissionsOpen(false)}
                                    className="block px-4 py-3 text-sm transition-colors hover:bg-green-50 hover:text-[#18583D]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Other navigation links */}
                {navLinks.map((link) => (
                    link.href.startsWith("/") ? (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200 hover:bg-green-50 hover:text-green-800 sm:px-4"
                        >
                            {link.label}
                        </Link>
                    ) : (
                        <a
                            key={link.label}
                            href={link.href}
                            className="rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200 hover:bg-green-50 hover:text-green-800 sm:px-4"
                        >
                            {link.label}
                        </a>
                    )
                ))}

            </div>
        </nav>
    );
}

export default MainNav;
