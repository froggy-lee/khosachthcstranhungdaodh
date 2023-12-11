import React from "react";
import Link from "next/link";
import BannerPage from "@/components/Banner";
import * as S from "./styles";

function HoaHocPage() {
  return (
    <>
      <BannerPage title={"Tài Liệu Hóa Học"} />
      <S.Wrapper className="container my-5">
        <h3 className="my-3">Học tốt Hóa Học 8 - Võ Đại Mau</h3>
        <div>
          <Link href={"/pdf-book/hoahoc/hoc-tot-hoa-hoc.pdf"} target="_blank">
            Học tốt Hóa Học 8
          </Link>
        </div>
      </S.Wrapper>
    </>
  );
}

export default HoaHocPage;
