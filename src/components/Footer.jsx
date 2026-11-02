
import { Mail, Phone, MapPin, Link2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programmes", href: "#programmes" },
    {
        label: "Online Admission",
        href: "http://mgaoamis.ac.tz/Students/onlineprofile.php",
    },
    { label: "NACTVET", href: "https://www.nactvet.go.tz/" },
    { label: "Staff Portal", href: "https://mgao.ac.tz/site/login" },
];

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/people/Mgao-Health-Training-Institute-mgaohti/100065324386300/",
        Icon: FaFacebookF,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/mgaohti/",
        Icon: FaInstagram,
    },
    {
        name: "X",
        href: "https://x.com/mgaohti",
        Icon: FaXTwitter,
    },
];

function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-700">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 py-12 sm:px-8 md:grid-cols-3 md:gap-12 lg:gap-16">

                {/* Left: Logo, college name and tagline */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src="/images/logo.png"
                        alt="MGAO Health Training Institute logo"
                        className="mb-4 h-32 w-32 object-contain"
                    />

                    <h2 className="max-w-xs text-lg font-bold leading-7 text-[#18583D]">
                        MGAO Health Training Institute
                    </h2>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600">
                        Preparing skilled healthcare professionals for
                        healthier communities.
                    </p>
                </div>

                {/* Middle: Contact information and social media */}
                <div className="flex flex-col items-start text-left md:pl-4">
                    <h3 className="mb-5 text-lg font-bold text-[#18583D]">
                        Contact Us
                    </h3>

                    <div className="space-y-4 text-sm">
                        <a
                            href="tel:0756923999"
                            className="flex items-center justify-start gap-3 transition-colors hover:text-[#18583D]"
                        >
                            <Phone size={17} className="shrink-0 text-[#18583D]" />
                            <span>0756 923 999</span>
                        </a>

                        <a
                            href="mailto:info@mgao.ac.tz"
                            className="flex items-center justify-start gap-3 transition-colors hover:text-[#18583D]"
                        >
                            <Mail size={17} className="shrink-0 text-[#18583D]" />
                            <span>info@mgao.ac.tz</span>
                        </a>

                        <p className="flex items-center justify-start gap-3">
                            <MapPin size={17} className="shrink-0 text-[#18583D]" />
                            <span>Njombe, Tanzania</span>
                        </p>
                    </div>

                    <h4 className="mb-4 mt-7 font-semibold text-gray-800">
                        Follow Us
                    </h4>

                    <div className="flex items-center justify-start gap-4">
                        {socialLinks.map(({ name, href, Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit MGAO on ${name}`}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#18583D] transition-colors duration-200 hover:border-[#18583D] hover:bg-[#18583D] hover:text-white"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Quick links */}
                <div className="flex flex-col items-start text-left md:pl-4">
                    <h3 className="mb-5 text-lg font-bold text-[#18583D]">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-sm">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="flex items-center gap-2 transition-colors duration-200 hover:text-[#18583D]"
                                >
                                    <Link2
                                        size={15}
                                        className="shrink-0 text-[#18583D]"
                                    />
                                    <span>{link.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Copyright strip */}
            <div className="bg-[#18583D] px-4 py-4 text-center text-sm text-white">
                © {new Date().getFullYear()} MGAO Health Training Institute.
                All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
