"use client";
import { usePathname } from "next/navigation";

const Page = ({params}) => {
 
  console.log(params);// here i can accaess every url querry items 

  return (
    <div className="">
      Hello, this is a form about the details page.
    </div>
  );
};

export default Page;

