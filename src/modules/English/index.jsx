import React from "react";
import BannerPage from "@/components/Banner";
import Link from "next/link";
import * as S from "./styles";

function English() {
  return (
    <>
      <BannerPage title={"Tài Liệu Tiếng Anh"} />
      <S.Wrapper className="container my-5">
        <h3 className="my-3">
          Chuyên đề ngữ pháp và bài tập bồi dưỡng HSG lớp 6
        </h3>
        <div>
          <Link
            href={
              "/pdf-book/english/cac-chuyen-de-ngu-phap-va-bai-tap-bs-hsg-6.pdf"
            }
            target="_blank"
          >
            Chuyên đề ngữ pháp và bài tập bồi dưỡng HSG lớp 6
          </Link>
        </div>
        <h3 className="my-3">Đề cương ôn tập đề thi vào lớp 6</h3>
        <div>
          <Link
            href={
              "/pdf-book/english/de-cuong-on-tap-de-thi-tieng-anh-vao-lop-6.pdf"
            }
            target="_blank"
          >
            Đề cương ôn tập đề thi tiếng anh vào lớp 6
          </Link>
        </div>
        <h3 className="my-3">
          Giáo trình bồi dưỡng học sinh giỏi thi chuyên Anh
        </h3>
        <div>
          <Link
            href={"/pdf-book/english/giao-trinh-bd-hs-gioi-thi-chuyen-anh.pdf"}
            target="_blank"
          >
            Giáo trình bồi dưỡng học sinh giỏi thi chuyên Anh
          </Link>
        </div>
      </S.Wrapper>
    </>
  );
}

export default English;
