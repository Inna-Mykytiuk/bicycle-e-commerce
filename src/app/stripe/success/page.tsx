import React from 'react';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h3 className="mb-4 text-center">
          Your Payment was successful! Thank You!
        </h3>
        <Link href="/" className="btn btn-primary mx-auto max-w-[200px]">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
