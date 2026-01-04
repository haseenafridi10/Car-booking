'use client';

import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { CarProps, HomeProps } from "@/types";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";

export default function Home() {
   const [visibleCount, setvisibleCount] = useState(6);
  const [cars, setCars] = useState<CarProps[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const params = searchParams.toString();
      const res = await fetch(`/api/cars?${params}`);
      const data = await res.json();
      setCars(data);
      setvisibleCount(6)
    };

    fetchData();
  }, [searchParams]); // 🔥 REFETCH ON SEARCH CHANGE
  
  
  const isDataEmpty = !cars || cars.length === 0;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel_type" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars.slice(0, visibleCount).map((car, index) => (
                <CarCard
                 car={car}
                 key={`${car.make}-${car.model}-${car.year}`} />
              ))}
            </div>
            {/* <ShowMore /> */}
             {visibleCount < cars.length && (
                   <div className="flex justify-center">
                   <button
                     onClick={() => setvisibleCount(prev => prev + 3)}
                     className='mt-6 px-4 py-2 bg-black text-white rounded-lg'
                    >
                        Show More
                    </button>
                    </div>
                  )}
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Ooops, No cars
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
