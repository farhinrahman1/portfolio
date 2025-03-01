"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Home,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Github,
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const socialIcons = [
  // { Icon: Home, href: "/", label: "Home" },
  {
    Icon: Linkedin,
    href: "https://linkedin.com/in/farhin-rahman00",
    label: "LinkedIn",
  },
  {
    Icon: Facebook,
    href: "https://facebook.com/farhin.rahman.169",
    label: "Facebook",
  },
  {
    Icon: Github,
    href: "https://github.com/farhinrahman1",
    label: "GitHub",
  },
  {
    Icon: Twitter,
    href: "https://twitter.com/farhinrahman_",
    label: "Twitter",
  },
];

const Header = () => {
  return (
    <header className="bg-black text-white py-4 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          {socialIcons.map(({ Icon, href, label }) => (
            <motion.li
              key={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={href} className="block" target="_blank">
                <Icon className="w-6 h-6 hover:text-gray-300 transition-colors duration-200" />
                <span className="sr-only">{label}</span>
              </Link>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="block">
                  <Mail className="w-6 h-6 hover:text-gray-300 transition-colors duration-200" />
                  <span className="sr-only">Contact</span>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="text-lg font-semibold mb-4">
                  Reach out to me
                </DialogTitle>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
