"use client";
import React, { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
    MobileAnimatedMenuItem
} from "@/components/ui/Resizable-navbar";


const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Events", link: "/events" },
    { name: "Pronite", link: "/pronite" },
    { name: "Timeline", link: "/timeline" },
    { name: "Terms And Conditions", link: "/terms-and-conditions" },
    { name: "Merchandise", link: "/merchandise" },
    { name: "Sponsors", link: "/sponsors" },
    { name: "Contact Us", link: "#contact", isContact: true },
];

export default function NavigationPanel() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const toggleRef = React.useRef<HTMLDivElement>(null);


    const handleContactClick = (e: any) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        const footer = document.getElementById("contact");
        if (!footer) return;

        footer.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    useEffect(() => {
        if (!mobileMenuOpen) return;

        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            const target = event.target;

            if (
                target instanceof Node &&
                menuRef.current &&
                !menuRef.current.contains(target) &&
                toggleRef.current &&
                !toggleRef.current.contains(target)
            ) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <div ref={toggleRef}>
                        <MobileNavToggle
                            isOpen={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        />
                    </div>
                </MobileNavHeader>

                <MobileNavMenu
                    menuRef={menuRef}
                    isOpen={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <MobileAnimatedMenuItem
                            key={idx}
                            name={item.name}
                            link={item.link}
                            onClick={(e) => {
                                if (item.isContact) {
                                    handleContactClick(e);
                                } else {
                                    setMobileMenuOpen(false);
                                }
                            }}
                        />
                    ))}
                </MobileNavMenu>
            </MobileNav>
        </>
    )
}
