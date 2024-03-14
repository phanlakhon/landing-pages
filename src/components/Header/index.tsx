import { Icon } from "@iconify/react";
import { Container } from "../Container";
import { Menu, MenuAccount } from "./Menu";
import { Search } from "./Search";
import Link from "next/link";
import { Logo } from "../Icons/Logo";

export function Header() {
  return (
    <>
      <div className="w-full shadow-md">
        <Container>
          <div className="flex justify-between items-center min-h-[55px]">
            <Icon icon="heroicons-outline:menu-alt-1" className="text-3xl" />
            <Menu />
            <div className="block sm:hidden">
              <Logo />
            </div>
            <Link href="/" className="flex justify-end items-center gap-1">
              <Icon icon="ph:phone" className="text-xl" />
              <span className="hidden sm:block">+123 ( 456 ) ( 7890 )</span>
            </Link>
          </div>
        </Container>
      </div>

      <div className="hidden sm:block">
        <Container>
          <div className="flex justify-between items-center min-h-[86px]">
            <Logo />
            <Search />
            <MenuAccount />
          </div>
        </Container>
      </div>
    </>
  );
}
