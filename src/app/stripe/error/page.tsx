import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h3 className="mb-4 text-center">
          Something went wrong! Please try again later.
        </h3>
        <Link href="/" className="btn btn-primary mx-auto max-w-[200px]">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
