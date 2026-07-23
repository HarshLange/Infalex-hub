import { siteConfig } from "./site";

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  footer: [
    {
      title: "Resumetra",
      links: [
        { name: "Launch App", href: siteConfig.links.resumetra, external: true },
        { name: "Features", href: "/#features" },
        { name: "How it works", href: "/#how-it-works" },
        { name: "Pricing", href: "/#pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Infalex Hub", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "All Plans", href: "/pricing" },
        { name: "Contact & Support", href: "/contact" },
        { name: "Blog", href: siteConfig.links.blog, external: true },
        { name: "Tools", href: siteConfig.links.tools, external: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Refund Policy", href: "/refund" },
        { name: "Delivery Policy", href: "/delivery" },
        { name: "Disclaimer", href: "/disclaimer" },
      ],
    },
  ],
};
