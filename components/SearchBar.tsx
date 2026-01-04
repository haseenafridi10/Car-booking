"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
// import { URLSearchParams } from 'url'
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please Fill out the form");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (model) {
      params.set("model", model);
    } else {
      params.delete("model");
    }

    if (manufacturer) {
      params.set("manufacturer", manufacturer);
    } else {
      params.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${params.toString()}`;
    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="block" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setmodel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="block" />
      </div>
    </form>
  );
};

export default SearchBar;
