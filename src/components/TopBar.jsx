
import {
    Phone,
    MapPin,
    Mail,
    ClipboardList,
    LockKeyhole,
    GraduationCap,
    MailCheck,
    ExternalLink,
} from "lucide-react";

const usefulLinks = [
    {
        label: "Apply Online",
        href: "https://mgaoamis.ac.tz/",
        icon: ClipboardList,
    },
    {
        label: "Admin Login",
        href: "https://mgao.ac.tz/",
        icon: LockKeyhole,
    },
    {
        label: "NACTVET",
        href: "https://www.nactvet.go.tz/",
        icon: GraduationCap,
    },
    {
        label: "Staff Mail",
        href: "#",
        icon: MailCheck,
    },
];

function TopBar() {
    const contactHover =
        "flex items-center gap-2 rounded-md px-2 py-2 transition-colors duration-200 hover:bg-white/15";

    return (
        <div className="bg-green-900 text-white text-sm">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
                {/* Contact details */}
                <div className="flex flex-wrap items-center gap-1">
                    <a href="tel:+255756923999" className={contactHover}>
                        <Phone size={15} />
                        <span>0756 923 999</span>
                    </a>

                    <span className="flex items-center gap-2 px-2 py-2">
                        <MapPin size={15} />
                        <span>Njombe, Tanzania</span>
                    </span>

                    <a href="mailto:info@mgao.ac.tz" className={contactHover}>
                        <Mail size={15} />
                        <span>info@mgao.ac.tz</span>
                    </a>
                </div>

                {/* Useful links */}
                <div className="flex flex-wrap items-center gap-1">
                    {usefulLinks.map((link) => {
                        const Icon = link.icon;

                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href === "#" ? undefined : "_blank"}
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-white/15"
                            >
                                <Icon size={15} />
                                <span>{link.label}</span>
                                <ExternalLink size={12} className="opacity-70" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TopBar;
