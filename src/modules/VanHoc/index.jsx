import React from "react";
import BannerPage from "@/components/Banner";
import Link from "next/link";
import * as S from "./styles";

function VanHoc() {
  return (
    <>
      <BannerPage title={"Tài Liệu Văn Học"} />
      <S.Wrapper className="container my-5">
        <h3 className="my-3">Truyện Mợ Du</h3>
        <div>
          <Link href={"/pdf-book/vanhoc/mo-du.pdf"} target="_blank">
            Mợ Du
          </Link>
        </div>
        <h3 className="my-3">Truyện Những ngày thơ ấu</h3>
        <div>
          <Link href={"/pdf-book/vanhoc/nhung-ngay-tho-au.pdf"} target="_blank">
            Những ngày thơ ấu
          </Link>
        </div>
        <h3 className="my-3">Truyện Sống chết mặc bay</h3>
        <div>
          <Link href={"/pdf-book/vanhoc/song-chet-mac-bay.pdf"} target="_blank">
            Sống chết mặc bay
          </Link>
        </div>
      </S.Wrapper>
    </>
  );
}

export default VanHoc;
