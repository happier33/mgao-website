
import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    ExternalLink,
} from "lucide-react";

import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

const contactDetails = [
    {
        icon: Phone,
        title: "Telephone",
        value: "0756 923 999",
        link: "tel:+255756923999",
    },
    {
        icon: Mail,
        title: "Email Address",
        value: "info@mgao.ac.tz",
        link: "mailto:info@mgao.ac.tz",
    },
    {
        icon: MapPin,
        title: "Physical Address",
        value: "Block X, Plot 34, Nazareth Street, Njombe, Tanzania",
        link: "https://www.google.com/maps/search/?api=1&query=Block+X+Plot+34+Nazareth+Street+Njombe+Tanzania",
    },
];

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        const emailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
        `;

        const mailtoLink = `mailto:info@mgao.ac.tz?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;
    };

    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />

            <main className="bg-white text-[#183B2D]">

                {/* Page Introduction */}
                <section className="border-b border-[#EAEDE9] bg-[#FCFAF6] px-6 py-16 md:py-20">
                    <div className="mx-auto max-w-7xl text-center">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7541]">
                            Contact MGAO
                        </p>

                        <h1 className="font-serif text-4xl font-medium md:text-5xl">
                            Get in Touch with{" "}
                            <span className="italic text-[#9A7541]">
                                Our Institution
                            </span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64736A]">
                            For enquiries regarding our academic programmes,
                            admission procedures, or other institutional
                            matters, please contact us through the details
                            provided below.
                        </p>
                    </div>
                </section>

                {/* Main Contact Content */}
                <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-20">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7541]">
                            Institutional Information
                        </p>

                        <h2 className="font-serif text-3xl font-medium md:text-4xl">
                            Contact Information
                        </h2>

                        <p className="mt-4 max-w-md text-sm leading-7 text-[#64736A]">
                            Our office is available to assist prospective
                            students, parents, current students, and other
                            visitors seeking information about MGAO.
                        </p>

                        <div className="mt-9 divide-y divide-[#EAEDE9] border-y border-[#EAEDE9]">
                            {contactDetails.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-5 py-6"
                                    >
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F4EEE2] text-[#18583D]">
                                            <Icon size={20} strokeWidth={1.7} />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-sm font-semibold text-[#183B2D]">
                                                {item.title}
                                            </h3>

                                            <a
                                                href={item.link}
                                                target={
                                                    item.title === "Physical Address"
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    item.title === "Physical Address"
                                                        ? "noreferrer"
                                                        : undefined
                                                }
                                                className="mt-2 inline-block break-words text-sm leading-6 text-[#64736A] transition-colors hover:text-[#18583D]"
                                            >
                                                {item.value}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Block+X+Plot+34+Nazareth+Street+Njombe+Tanzania"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#18583D] transition-colors hover:text-[#9A7541]"
                        >
                            View Location on Map
                            <ExternalLink size={15} />
                        </a>
                    </motion.div>

                    {/* Enquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="border border-[#EAEDE9] bg-[#FCFAF6] p-6 md:p-9"
                    >
                        <div className="border-b border-[#EAEDE9] pb-6">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7541]">
                                Enquiries
                            </p>

                            <h2 className="font-serif text-3xl font-medium">
                                Send Us a Message
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-[#64736A]">
                                Complete the form below to send your
                                enquiry to the institute.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-7 space-y-5"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-[#183B2D]"
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full border border-[#DCE2DC] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#18583D] focus:ring-1 focus:ring-[#18583D]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-[#183B2D]"
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    required
                                    className="w-full border border-[#DCE2DC] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#18583D] focus:ring-1 focus:ring-[#18583D]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-medium text-[#183B2D]"
                                >
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Enter the subject of your enquiry"
                                    required
                                    className="w-full border border-[#DCE2DC] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#18583D] focus:ring-1 focus:ring-[#18583D]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-[#183B2D]"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your enquiry here..."
                                    required
                                    className="w-full resize-y border border-[#DCE2DC] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#18583D] focus:ring-1 focus:ring-[#18583D]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-3 bg-[#18583D] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#183B2D]"
                            >
                                Send Enquiry
                                <Send size={16} />
                            </button>
                        </form>

                        <p className="mt-5 text-xs leading-5 text-[#7A857D]">
                            Your message will be prepared in your default
                            email application for sending.
                        </p>
                    </motion.div>
                </section>

                {/* Location Section */}
                {/* <section className="border-t border-[#EAEDE9] bg-[#FCFAF6] px-6 py-16 md:py-20">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">

                        <div>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7541]">
                                Find Our Location
                            </p>

                            <h2 className="font-serif text-3xl font-medium md:text-4xl">
                                Visit MGAO Health Training Institute
                            </h2>

                            <p className="mt-5 max-w-lg text-sm leading-7 text-[#64736A]">
                                We welcome prospective students, parents,
                                and visitors to our institution. You can
                                use the location details to plan your visit
                                to our campus in Njombe.
                            </p>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Block+X+Plot+34+Nazareth+Street+Njombe+Tanzania"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-7 inline-flex items-center gap-2 bg-[#18583D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#183B2D]"
                            >
                                Get Directions
                                <ExternalLink size={15} />
                            </a>
                        </div>

                        <div className="flex min-h-[280px] items-center justify-center border border-[#E3DCCF] bg-[#F4EEE2] p-8 text-center md:min-h-[340px]">
                            <div>
                                <MapPin
                                    size={36}
                                    strokeWidth={1.5}
                                    className="mx-auto text-[#9A7541]"
                                />

                                <h3 className="mt-5 font-serif text-2xl">
                                    MGAO Health Training Institute
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#64736A]">
                                    Block X, Plot 34, Nazareth Street,
                                    <br />
                                    Njombe, Tanzania.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>

            <Footer />
        </>
    );
}

export default Contact;
