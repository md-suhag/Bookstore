import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-xl container mx-auto py-32 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something
              <span className="text-pink-500"> new everyday</span>
            </h1>
            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis architecto laboriosam animi, corporis nobis asperiores
              non doloribus voluptatibus pariatur harum quod consequatur ducimus
              ab distinctio nemo commodi iste rem dolor!
            </p>
            <label className="input input-bordered flex items-center gap-2 mt-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-secondary mt-5">Get Started</button>
          </div>
          <div className="order-1">
            <img src="book.png" className="h-96 w-96 mx-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
