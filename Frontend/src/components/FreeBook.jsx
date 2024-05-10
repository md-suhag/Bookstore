import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import list from "./../../public/list.json";
import Card from "./Card";
function FreeBook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:4000/book");
        const data = res.data.filter((data) => data.category === "free");

        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  // const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-xl container mx-auto my-10 px-4 md:px-10 overflow-hidden">
        <h1 className="font-semibold text-xl pb-2">Free offered courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque
          quidem architecto repellendus eaque, vero veritatis culpa doloribus
          suscipit harum consequuntur quis facilis provident. Cum, nisi a? A,
          recusandae rem!
        </p>

        <div className="slider-container mt-10">
          <Slider {...settings}>
            {book.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
