import React from "react";
import BannerPage from "@/components/Banner";
import Link from "next/link";
import * as S from "./styles";

function StudentPage() {
  return (
    <>
      <BannerPage title={"Bài Viết Của Học Sinh Qua Các Năm"} />
      <S.Wrapper className="container my-5">
        <h3 className="my-3">Bài viết của học sinh qua các năm</h3>
        <div>
          <Link
            href={"/pdf-book/students/bai-viet-cua-hs-qua-cac-nam.pdf"}
            target="_blank"
          >
            Bài viết
          </Link>
        </div>
      </S.Wrapper>
    </>
  );
}

export default StudentPage;
