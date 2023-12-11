import React from "react";
import BannerPage from "@/components/Banner";
import Link from "next/link";
import * as S from "./styles";

function ChildrenPage() {
  return (
    <>
      <BannerPage title={"Sách Thiếu Nhi"} />
      <S.Wrapper className="container my-5">
        <h3 className="my-3">Bài viết của học sinh qua các năm</h3>
        <div>
          <Link
            href={"/pdf-book/vanhoc/bai-viet-cua-hs-qua-cac-nam.pdf"}
            target="_blank"
          >
            Bài viết
          </Link>
        </div>
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
        <h3 className="my-3">Truyện Nguyễn Nhật Ánh</h3>
        <div>
          <Link href={"/pdf-book/vanhoc/bi-an-cua-mot.pdf"} target="_blank">
            Bí ẩn của Mốt
          </Link>
        </div>
        <div className="mt-2">
          <Link
            href={"/pdf-book/vanhoc/cho-toi-mot-ve-di-tuoi-tho.pdf"}
            target="_blank"
          >
            Cho tôi một vé đi tuổi thơ
          </Link>
        </div>
        <div className="mt-2">
          <Link
            href={"/pdf-book/vanhoc/co-hai-con-meo-ben-cua-so.pdf"}
            target="_blank"
          >
            Có hai con mèo ngồi bên cửa sổ
          </Link>
        </div>
        <div className="mt-2">
          <Link href={"/pdf-book/vanhoc/dao-mong-mo.pdf"} target="_blank">
            Đảo mộng mơ
          </Link>
        </div>
        <h3 className="my-3">Truyện Nguyễn Công Hoan</h3>
        <div>
          <Link href={"/pdf-book/vanhoc/dong-hao-co-ma.pdf"} target="_blank">
            Đồng Hào có ma
          </Link>
        </div>
        <h3 className="my-3">Truyện Nguyễn Ngọc Tư</h3>
        <div>
          <Link
            href={"/pdf-book/vanhoc/truyen-ngan-nguyen-ngoc-tu.pdf"}
            target="_blank"
          >
            Tập truyện ngắn của Nguyễn Ngọc Tư
          </Link>
        </div>
      </S.Wrapper>
    </>
  );
}

export default ChildrenPage;
