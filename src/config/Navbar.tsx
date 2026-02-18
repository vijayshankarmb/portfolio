interface NavItem {
    label: string
    href: string
}

export const NavbarConfig = {
    logo: {
        src: "/assets/logo.jpg",
        alt: "logo",
        width: 100,
        height: 100
    },
    navItem: [
        {
            label: "Projects",
            href: "/projects"
        },
    ] as NavItem[],
};