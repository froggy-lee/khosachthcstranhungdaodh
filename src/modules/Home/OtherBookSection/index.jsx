"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { listBook } from "./data";
import Image from "next/image";
import * as S from "./styles";
import { useRouter } from "next/navigation";

function OtherBookSection() {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <section className="container mt-5">
      <h3 className="title-section">Sách tham khảo</h3>
      <hr />
      <S.SlideWrapper>
        <Slider {...settings}>
          {listBook.map((book) => {
            return (
              <S.BookItem key={book.id}>
                <S.BookWrapper onClick={() => router.push(book.href)}>
                  <Image src={book?.image} fill alt="Book" />
                </S.BookWrapper>
              </S.BookItem>
            );
          })}
        </Slider>
      </S.SlideWrapper>
    </section>
  );
}

export default OtherBookSection;
