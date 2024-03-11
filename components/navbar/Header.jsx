import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import { IoFastFood } from "react-icons/io5";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
// zustand
import { useCartStore } from "../../zustand/store";
// next auth
import { useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  // auth
  const { data: session } = useSession();
  // console.log(session);

  const { totalItems } = useCartStore();

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 20) {
        setColor("#fff");
        setTextColor("#fff");
      } else {
        setColor("transparent");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full transition-all ease-in duration-30 z-50"
    >
      <div className="container mx-auto">
        <div className="flex p-3 items-center justify-between border-b">
          <Link href="/" className="flex items-center gap-x-3">
            <h4 className="capitalize font-bold md:block">Woodsoft</h4>
          </Link>

          <Navbar />

          {/* cart */}
          <div className="flex gap-x-5 items-center justify-center">
            <Link href={`/cart`} className="relative cursor-pointer">
              <HiShoppingCart size={25} color="purple" />

              <span className="absolute bg-red-500 w-4 h-4 rounded-full text-white flex items-center justify-center text-xs -top-2 -right-2">
                {totalItems}
              </span>
            </Link>

            {/* mobile nav functionality */}
            <HiMenu
              onClick={() => setNavMobile(true)}
              className="md:hidden text-purple-800 text-3xl cursor-pointer"
            />
          </div>

          <div className={`${navMobile ? "right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
