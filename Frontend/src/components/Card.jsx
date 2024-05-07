import React from "react";

function Card({ item }) {
  return (
    <>
      <div className="card  bg-base-100 shadow-xl m-2 hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white dark:border">
        <figure className="fix-img">
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">Free</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline p-4 cursor-pointer">
              ${item.price}
            </div>
            <div className="badge badge-outline p-4 cursor-pointer hover:bg-pink-500 hover:text-white">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
