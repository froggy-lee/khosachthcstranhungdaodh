import React from "react";
import BannerPage from "@/components/Banner";
import Link from "next/link";
import * as S from "./styles";

function AotherPage() {
  return (
    <>
      <BannerPage title={"Thể Loại Khác"} />
      <S.Wrapper className="container my-5">
        <h3 className="my-3">Truyện Nguyễn Nhật Ánh</h3>
        <div>
          <Link href={"/pdf-book/aother/bi-an-cua-mot.pdf"} target="_blank">
            Bí ẩn của Mốt
          </Link>
        </div>
        <div className="mt-2">
          <Link
            href={"/pdf-book/aother/cho-toi-mot-ve-di-tuoi-tho.pdf"}
            target="_blank"
          >
            Cho tôi một vé đi tuổi thơ
          </Link>
        </div>
        <div className="mt-2">
          <Link
            href={"/pdf-book/aother/co-hai-con-meo-ben-cua-so.pdf"}
            target="_blank"
          >
            Có hai con mèo ngồi bên cửa sổ
          </Link>
        </div>
        <div className="mt-2">
          <Link href={"/pdf-book/aother/dao-mong-mo.pdf"} target="_blank">
            Đảo mộng mơ
          </Link>
        </div>
        <h3 className="my-3">Truyện Nguyễn Công Hoan</h3>
        <div>
          <Link href={"/pdf-book/aother/dong-hao-co-ma.pdf"} target="_blank">
            Đồng Hào có ma
          </Link>
        </div>
        <h3 className="my-3">Truyện Nguyễn Ngọc Tư</h3>
        <div>
          <Link
            href={"/pdf-book/aother/truyen-ngan-nguyen-ngoc-tu.pdf"}
            target="_blank"
          >
            Tập truyện ngắn của Nguyễn Ngọc Tư
          </Link>
        </div>
      </S.Wrapper>
    </>
  );
}

export default AotherPage;
