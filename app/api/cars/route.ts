// import { NextResponse } from "next/server";

// const makes = ["Honda", "Toyota", "BMW", "Audi", "Tesla", "Ford"];
// const models = ["Civic", "Corolla", "Model S", "Mustang", "A4", "X5"];
// const drives = ["fwd", "rwd", "awd"];
// const fuelTypes = ["gas", "electric", "hybrid"];
// const classes = ["compact", "sedan", "suv"];

// function generateCar() {
//   return {
//     city_mpg: Math.floor(Math.random() * 15) + 15,
//     class: classes[Math.floor(Math.random() * classes.length)],
//     combination_mpg: Math.floor(Math.random() * 10) + 20,
//     cylinders: [4, 6, 8][Math.floor(Math.random() * 3)],
//     displacement: +(Math.random() * 3 + 1).toFixed(1),
//     drive: drives[Math.floor(Math.random() * drives.length)],
//     fuel_type: fuelTypes[Math.floor(Math.random() * fuelTypes.length)],
//     highway_mpg: Math.floor(Math.random() * 15) + 25,
//     make: makes[Math.floor(Math.random() * makes.length)],
//     model: models[Math.floor(Math.random() * models.length)],
//     transmission: Math.random() > 0.5 ? "a" : "m",
//     year: Math.floor(Math.random() * 10) + 2015,
//   };
// }

// export async function GET() {
//   const cars = Array.from({ length: 50 }, generateCar);
//   return NextResponse.json(cars);
// }

import { NextResponse } from "next/server";
import {cars} from "@/data/cars"; // wherever your car list is

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const fuelType = searchParams.get("fuel_type");
  const year = searchParams.get("year");
  const manufacturer = searchParams.get("manufacturer");

  let filteredCars = cars;

  if (fuelType) {
    filteredCars = filteredCars.filter(
      (car) => car.fuel_type.toLowerCase() === fuelType.toLowerCase()
    );
  }

  if (year) {
    filteredCars = filteredCars.filter(
      (car) => car.year === Number(year)
    );
  }

  if (manufacturer) {
    filteredCars = filteredCars.filter(
      (car) => car.make.toLowerCase() === manufacturer.toLowerCase()
    );
  }

  return NextResponse.json(filteredCars);
}
