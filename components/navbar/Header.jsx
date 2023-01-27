import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import { IoFastFood } from "react-icons/io5";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
// zustand
import { useStore } from "../../zustand/store";
// next auth
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaRegHandPaper } from "react-icons/fa";

const Header = () => {
  // auth
  const { data: session } = useSession();
  // console.log(session);

  // check state
  const state = useStore((state) => state);

  // console.log(state);

  // zustand
  const totalItems = useStore((state) => state.cart.foods.length);

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
            <h4 className="capitalize hidden md:block">Foodie</h4>
            <IoFastFood size={30} color="purple" />
          </Link>

          <Navbar />

          {/* cart */}
          <div className="flex gap-x-3 items-center justify-center">
            <Link href={`/cart`} className="relative cursor-pointer">
              <HiShoppingCart size={25} color="purple" />

              <span className="absolute bg-red-500 w-4 h-4 rounded-full text-white flex items-center justify-center text-xs -top-2 -right-2">
                {totalItems}
              </span>
            </Link>

          

            {session ? (
              <div className="ml-5">
                <Link
                  href={`/account`}
                  className="flex items-center gap-x-2 justify-center"
                >
                  <p className="text-[15px]">{session.user.name}</p>
                  <Image
                    alt="user image"
                    src={session.user.image}
                    width={50}
                    height={50}
                    className="w-5 h-5 rounded-full"
                  />
                </Link>
              </div>
            ) : (
              <div className="flex items-center ml-5">
                <Link href={`/account`}>
                  <button className="font-semibold bg-purple-600 hover:bg-purple-300 w-20 p-1 capitalize rounded-md text-white">sign up</button>
                </Link>
              </div>
            )}
          </div>

          {/* mobile nav functionality */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="md:hidden text-purple-800 text-3xl cursor-pointer"
          />

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
