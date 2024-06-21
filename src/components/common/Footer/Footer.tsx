import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {
  RiYoutubeFill,
  RiFacebookFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
} from 'react-icons/ri';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 p-4 pt-12 text-center text-white lg:pt-24">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col gap-2 lg:gap-4">
          <h2 className="mb-2 capitalize leading-tight">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/60">
            Be the first to get latest news about trends, promotions and much
            more
          </p>
        </div>
        {/*form*/}
        <form className="mx-auto mb-10 flex max-w-[620px] flex-col gap-5 md:flex-row">
          <Input placeholder="Your email address" />
          <button className="btn btn-accent h-[50px] w-full md:max-w-[150px]">
            Join
          </button>
        </form>
        {/*socials*/}
        <div className="mx-auto mb-12 flex justify-center gap-8 text-[20px] text-white/60">
          <Link href="">
            <RiYoutubeFill />
          </Link>
          <Link href="">
            <RiFacebookFill />
          </Link>
          <Link href="">
            <RiInstagramFill />
          </Link>
          <Link href="">
            <RiPinterestFill />
          </Link>
          <Link href="">
            <RiTwitterFill />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 border-t border-white/50 py-6 sm:flex-row md:gap-12">
        <p className="text-sm text-white/80">
          ©Bikezz 2024. All Rights Reserved.
        </p>
        <p className="text-sm text-white/80">Made by Tokio❤️</p>
      </div>
    </footer>
  );
};
