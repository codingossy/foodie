import Link from "next/link";

const Navbar = () => {
  return (
    <div className="capitalize hidden md:flex">
      <ul className="flex items-center space-x-12 text-black">
        <li>
          <Link
            className="cursor-pointer hover:text-purple-600"
            href="/showcase"
          >
            showcase
          </Link>
        </li>

        <li>
          <Link className="cursor-pointer hover:text-purple-600" href="/about">
            about us
          </Link>
        </li>

        <li>
          <Link
            className="cursor-pointer hover:text-purple-600"
            href="/contact"
          >
            contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
