import Link from 'next/link';
import React from 'react'
import { IoFastFood } from 'react-icons/io5';


const Footer = () => {
  return (
    <footer className="w-full bg-purple-800 text-white text-xs py-6">
     <div className='my-5 container mx-auto'>
    <Link href={'/'} className='flex gap-x-3 items-center'>
       <h1 className='text-white text-2xl hover:text-red-600 capitalize'>Foodie</h1>
       <IoFastFood size={30} />
    </Link>
     </div>
      
      <div className="w-full grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-1 container mx-auto">

        <ul className="footerList">
          <li className="footerListItem">Countries</li>
          <li className="footerListItem">Regions</li>
          <li className="footerListItem">Cities</li>
          <li className="footerListItem">Districts</li>
          <li className="footerListItem">Airports</li>
          <li className="footerListItem">Hotels</li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Homes </li>
          <li className="footerListItem">Apartments </li>
          <li className="footerListItem">Resorts </li>
          <li className="footerListItem">Villas</li>
          <li className="footerListItem">Hostels</li>
          <li className="footerListItem">Guest houses</li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Unique places to stay </li>
          <li className="footerListItem">Reviews</li>
          <li className="footerListItem">Unpacked: Travel articles </li>
          <li className="footerListItem">Travel communities </li>
          <li className="footerListItem">Seasonal and holiday deals </li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Car rental </li>
          <li className="footerListItem">Flight Finder</li>
          <li className="footerListItem">Restaurant reservations </li>
          <li className="footerListItem">Travel Agents </li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Customer Service</li>
          <li className="footerListItem">Partner Help</li>
          <li className="footerListItem">Careers</li>
          <li className="footerListItem">Sustainability</li>
          <li className="footerListItem">Press center</li>
          <li className="footerListItem">Safety Resource Center</li>
          <li className="footerListItem">Investor relations</li>
          <li className="footerListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="capitalize container mx-auto my-5">Copyright © 2023 ossy</div>
    </footer>
  );
};

export default Footer;
