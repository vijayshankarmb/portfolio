interface NavItem {
    label: string
    href: string
}

export const NavbarConfig = {
    logo: {
        src: "/assets/logo2.jpg",
        alt: "logo",
        width: 100,
        height: 100
    },
    navItem: [
        {
            label: "Projects",
            href: "/projects"
        },
        {
            label: "Terminal🦚",
            href: "/terminal"
        }
    ] as NavItem[],
};