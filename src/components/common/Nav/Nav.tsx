'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Our Bikes', path: '/our-bikes' },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="flex gap-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${link.path === pathname && 'text-accent'}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
