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
        <h3 className="my-3">Nhật kí Đặng Thùy Trâm</h3>
        <div>
          <Link
            href={"/pdf-book/vanhoc/nhat-ki-dang-thuy-tram.pdf"}
            target="_blank"
          >
            Nhật kí Đặng Thùy Trâm
          </Link>
        </div>
        <h3 className="my-3">
          Phương pháp làm bài văn nghị luận lớp 8-9 - Nguyễn Công Huấn
        </h3>
        <div>
          <Link
            href={"/pdf-book/vanhoc/pp-lam-bai-van-nghi-luan.pdf"}
            target="_blank"
          >
            Phương pháp làm bài văn nghị luận lớp 8-9
          </Link>
        </div>
      </S.Wrapper>
    </>
  );
}

export default VanHoc;
