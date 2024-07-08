"use client";
import { usePathname } from "next/navigation";

const Page = ({params}) => {
 
  console.log(params);

  return (
    <div className="">
 
 
      Hello, this is a form about the details page.
    </div>
  );
};

export default Page;

