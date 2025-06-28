import Link from "next/link";
import React from "react";
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
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* icon */}
        <div className="text-xl font-bold">
          <Link href={"/"}>News Today</Link>
        </div>

        {/* main menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/news" className="hover:text-red-600 ">News</NavigationMenuLink>
              <NavigationMenuLink href="/services"  className="hover:text-red-600">
                <NavigationMenuTrigger className="text-gray-700">Services</NavigationMenuTrigger>
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
                <NavigationMenuLink href="/about" className="hover:text-red-600">About</NavigationMenuLink>
                  <NavigationMenuLink href="/contact" className="hover:text-red-600">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


        {/* theme mode and login */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>


        {/* mobile hamber menu */}
        <div className="lg:hidden">
          <Button variant={'default'}><AiOutlineMenu size={24}/></Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
