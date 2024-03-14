import { menuAccount, menus } from "@/datas";
import Link from "next/link";
import { Icon } from "@iconify/react";

export function Menu() {
  return (
    <ul className="list-none  justify-between items-center gap-8 hidden lg:flex ">
      {menus.map((menu: any, index: number) => {
        return (
          <li key={index}>
            <Link href={menu.link}>{menu.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export function MenuAccount() {
  return (
    <div className="flex justify-between items-center gap-8">
      {menuAccount.map((menu: any, index: number) => {
        return (
          <div key={index}>
            <Link href={menu.link} className="flex items-center gap-2">
              <Icon icon={menu.icon} />
              <span className="hidden sm:block">{menu.name}</span>
            </Link>
          </div>
        );
      })}

      <Icon
        icon="bitcoin-icons:search-filled"
        className="text-xl block xl:hidden"
      />
    </div>
  );
}
