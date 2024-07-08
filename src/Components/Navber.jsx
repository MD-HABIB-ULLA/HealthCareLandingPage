"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navber = () => {
  const pathName = usePathname();
  console.log(pathName);
  const lists = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
    { title: "Blog", link: "/contact/bloga" },
    {title:"NestedRoute", link : "/nested"}
  ];
  if(pathName.includes("/dashboard")){
    return(
      <>
      <div className="bg-gray-500">
        hello this is dashboard navber 
      </div>
      </>
    )
  }
  return (
    <div className="flex h-32 items-center justify-center">
      <ul className="flex justify-center gap-5 items-center">
        {lists.map((list) => (
          <li key={list.link}>
            <Link
              href={list.link}
              className={list.link === pathName ? "border-b border-white" : ""}
            >
              {list.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navber;
