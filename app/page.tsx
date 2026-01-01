import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { CarProps, CarSpecs, CarTrim } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { Key } from "react";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars)

  const isDataEmpty = allCars.length < 1 || !allCars;
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
            <CustomFilter title='fuel'/>
            <CustomFilter title='year' />
          </div>
        </div>
        

        {!isDataEmpty ? (
          <section>
            <div>
              {allCars?.map((car: CarProps, i: Key) => (
                <CarCard car={car} key={i}/>
              ))}
              {/* {Object.entries(allCars)?.map((car,index) => (
                <CarCard car={car} key={index}/>
              ))} */}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, No cars</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>  
  );
}
