import React from "react";
import Image from "next/image";
import * as S from "./styles";
import { FaUserGraduate } from "react-icons/fa";

function ListBookItem({ item }) {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image src={item?.image} fill alt={item?.grade} />
      </S.ImageWrapper>
      <div className="fs-4 mt-3">Sách Giáo Khóa Lớp {item?.grade}</div>
      <div className="d-flex align-item-center mt-2">
        <FaUserGraduate size={"1.2rem"} />: {item?.author}
      </div>
    </S.Wrapper>
  );
}

export default ListBookItem;
