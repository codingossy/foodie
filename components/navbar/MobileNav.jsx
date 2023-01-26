import Link from "next/link";
import { IoClose } from "react-icons/io5";




const MobileNav = ({ setNavMobile }) => {
  return (
    <nav className="block md:hidden bg-purple-600 text-gray-300 w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute right-6 top-6 cursor-pointer "
      />

      <ul className="flex flex-col justify-center space-y-8 h-full items-center capitalize font-secondary">
        <Link href="/" onClick={() => setNavMobile(false)}>
          <li className="text-md">food</li>
        </Link>
        <Link href="/dishes" onClick={() => setNavMobile(false)}>
          <li className="text-md">local dishes</li>
        </Link>
        <Link href="/menu" onClick={() => setNavMobile(false)}>
          <li className="text-md">drinks</li>
        </Link>
        <Link href="/contact" onClick={() => setNavMobile(false)}>
          <li className="text-md">contact us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default MobileNav;
