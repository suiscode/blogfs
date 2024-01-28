"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

function Links() {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className="flex items-center gap-[10px] max-[768px]:hidden">
        {links.map((item) => (
          <NavLink key={item.path} item={item} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="p-[10px] cursor-pointer font-bold bg-white text-black rounded-lg">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <div className="max-[768px]:flex hidden">
        <Image onClick={() => setOpen((prev) => !prev)} className="cursor-pointer" src='/menu.png' alt="menu" width={30} height={30}/>
        {open && (
          <div className="flex bg-[#0d0c22] z-10 text-white absolute top-[100px] w-1/2 h-[calc(100vh-100px)] right-0 flex-col items-center justify-center gap-[10px]">
            {links.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Links;
