import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary/5 py-48 md:h-[820px] md:py-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex w-full flex-col items-start justify-center md:h-[820px] lg:max-w-[580px]">
            <h1 className="mb-6 text-center lg:text-left">
              Where <span>Joyful</span> Cycling Begins
            </h1>
            <p className="mx-auto mb-10 max-w-[508px] text-center text-lg lg:mx-0 lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique neque aliquid esse excepturi debitis minus, iusto
              dolorem praesentium ipsa facilis voluptatum quo voluptas rerum
              natus ipsam magnam inventore doloremque iste.
            </p>
            {/*btn group*/}
            <div className="mx-auto flex items-center gap-4 lg:mx-0">
              <Link
                href="/our-bikes"
                className="btn btn-primary max-w-[200px]"
                aria-label="Shop bikes button"
              >
                Shop now
              </Link>
              <Link
                href="/our-bikes"
                className="btn btn-accent max-w-[200px]"
                aria-label="Our bikes"
              >
                Shop now
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Image
              src="/images/hero_bike.png"
              alt="bike"
              width={765}
              height={480}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
