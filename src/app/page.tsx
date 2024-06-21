import Hero from '@/components/common/Hero/Hero';
import PopularBikes from '@/components/common/PopularBikes/PopularBikes';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <PopularBikes />
    </main>
  );
}
