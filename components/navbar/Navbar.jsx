import Link from "next/link";

const Navbar = () => {
  return (
    <div className="capitalize hidden md:flex">
      <ul className="flex items-center space-x-12 text-black">
        <li>
          <Link className="cursor-pointer" href="/">
            food
          </Link>
        </li>
        <li>
          <Link href="/dishes">local dishes</Link>
        </li>
        <li>
          <Link href="/menu">drinks</Link>
        </li>

        <li>
          <Link href="/contact">contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
