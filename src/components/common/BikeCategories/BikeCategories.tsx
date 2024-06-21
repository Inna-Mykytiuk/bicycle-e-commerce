'use client';

import React, { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { PopularBike } from '@/types/types';
import Bike from '../Bike/Bike';

type BikeCategoriesProps = {
  bikes: PopularBike[];
};

const BikeCategories: React.FC<BikeCategoriesProps> = ({ bikes }) => {
  const [category, setCategory] = useState('all');
  const [filteredBikes, setFilteredBikes] = useState<PopularBike[]>([]);
  const [price, setPrice] = useState(900);

  useEffect(() => {
    const filtered = bikes.filter(bike => {
      const categoryMatch =
        category === 'all' ||
        bike.categories.some(categ => categ.name === category);
      return categoryMatch && bike.price <= price;
    });
    setFilteredBikes(filtered);
  }, [category, price, bikes]);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col  md:flex-row">
          {/*sidebar*/}
          <aside className="mb-8 w-full p-4 sm:w-[240px] lg:h-[64vh]">
            <RadioGroup
              defaultValue="all"
              className="mb-12 flex flex-col gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory('all')}
                />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="road"
                  id="road"
                  onClick={() => setCategory('road')}
                />
                <Label htmlFor="road">Road</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="professional"
                  id="professional"
                  onClick={() => setCategory('professional')}
                />
                <Label htmlFor="professional">Professional</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="extreme"
                  id="extreme"
                  onClick={() => setCategory('extreme')}
                />
                <Label htmlFor="extreme">Extreme</Label>
              </div>
            </RadioGroup>
            {/*price slider*/}
            <div className="max-w-56">
              <p className="mb-4 text-base font-medium lg:text-lg">
                Max Price:{' '}
                <span className="ml-2 font-semibold text-accent">${price}</span>
                <span className="ml-2">({filteredBikes.length} items)</span>
              </p>
              <Slider
                defaultValue={[900]}
                max={1000}
                step={1}
                onValueChange={value => setPrice(value[0])}
              />
            </div>
          </aside>
          {/*bike list*/}
          <div className="w-fullxl:w-[1050px] md:ml-auto">
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
              {filteredBikes.map(bike => (
                <Bike key={bike.price_id} bike={bike} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeCategories;
