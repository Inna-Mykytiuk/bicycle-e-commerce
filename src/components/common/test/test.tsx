import React from 'react';

const TestComponent = () => {
  return (
    <section
      className="after:bg-patternXs md:after:bg-patternSm lg:after:bg-patternLg relative pb-[300px] 
    
    
    pt-[50px] after:absolute after:top-[50px] after:h-[250px] after:w-full after:bg-cover after:bg-top after:content-['']

    lg:after:right-0 lg:after:h-[600px] lg:after:w-[600px]
    
    "
    >
      <div className="container  ">
        <div className="flex w-full flex-col">
          <div className="h-[300px] w-full bg-blue-200 lg:h-[600px] lg:w-[45%]">
            Form
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestComponent;
