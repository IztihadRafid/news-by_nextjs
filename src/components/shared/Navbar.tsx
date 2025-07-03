"use client"
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: ()=>void
}
const Navbar = () => {

  const pathname = usePathname()
  const {isDarkMode,toggleTheme}:any= useContext(ThemeContext)

  return (
    <header className={`py-4 shadow-md ${isDarkMode ? "bg-gray-900 text-white":""}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* icon */}
        <div className="text-xl font-bold">
          <Link href={"/"}>News Today</Link>
        </div>

        {/* main menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/news" className={`hover:text-red-600 link ${pathname === '/news' ? 'text-red-500 underline' : ''}`}>News</NavigationMenuLink>
              <NavigationMenuLink href="/services" className={`hover:text-red-600 link ${pathname === '/services' ? 'text-red-500 underline' : ''}`}>
                <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="">
                    <li>
                      <NavigationMenuLink href="/services/web">Web Development</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/apps">Mobile App</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/seo">SEO</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>
                <NavigationMenuLink href="/about" className={`hover:text-red-600 link ${pathname === '/about' ? 'text-red-500 underline' : ''}`}>About</NavigationMenuLink>
                  <NavigationMenuLink href="/contact" className={`hover:text-red-600 link ${pathname === '/contact' ? 'text-red-500 underline' : ''}`}>Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


        {/* theme mode and login */}
        <div className="hidden lg:flex items-center space-x-4">
          <div onClick={toggleTheme} className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>


        {/* mobile hamber menu */}
        <MobileMenu></MobileMenu>
       
      </nav>
    </header>
  );
};

export default Navbar;
