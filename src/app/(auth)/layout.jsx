"use client"
import "./style.css";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const navlinks=[
    {
        name:"login",href:"/login"
    },
    {
        name:"register",href:"/register"
    },
    {
        name:"forgot_password",href:"/forgot_password"
    }
]

export default function AuthLayout({ children }) {
    const pathname=usePathname();
  return (
      <div>
        {navlinks.map((link)=>{
            const isActive=pathname.startsWith(link.href);
            return(
        <Link
          href={link.href}
          key={link.name} 
          className={isActive?"font-bold mr-4":"text-blue-500 mr-4"} 
           >
        {link.name}
        </Link>

            )

        })}
         {children}

      </div>

  );
}
