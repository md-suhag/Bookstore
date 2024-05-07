import React from "react";
import list from "./../../public/list.json";
import Card from "./Card";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-xl container mx-auto  px-4 md:px-10">
        <div className="text-center">
          <h1 className="pt-20 text-2xl font-semi-bold md:text-4xl">
            We 're delighted to have you
            <span className="text-pink-500"> here!</span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            similique eum! At iste dicta beatae numquam. Temporibus deserunt
            cumque nobis autem voluptatem facilis ex ducimus earum
            reprehenderit, porro dolores! Sunt.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white rounded-md px-4 py-2 mt-5">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
