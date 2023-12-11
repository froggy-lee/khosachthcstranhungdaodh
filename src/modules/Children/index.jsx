import React from "react";
import BannerPage from "@/components/Banner";
import Link from "next/link";
import * as S from "./styles";

function ChildrenPage() {
  return (
    <>
      <BannerPage title={"Sách Thiếu Nhi"} />
      <S.Wrapper className="container my-5">
        <h3 className="my-3">Truyện Bà Chúa Tuyết</h3>
        <div>
          <Link href={"/pdf-book/childrens/ba-chua-tuyet.pdf"} target="_blank">
            Bà Chúa Tuyết
          </Link>
        </div>
        <h3 className="my-3">Truyện Bầy chim thiên nga</h3>
        <div>
          <Link
            href={"/pdf-book/childrens/bay-chim-thien-nga.pdf"}
            target="_blank"
          >
            Bầy chim thiên nga
          </Link>
        </div>
        <h3 className="my-3">Truyện Bộ quần áo mới của Hoàng Đế</h3>
        <div>
          <Link
            href={"/pdf-book/childrens/bo-quan-ao-moi-cua-hoang-de.pdf"}
            target="_blank"
          >
            Bộ quần áo mới của Hoàng Đế
          </Link>
        </div>
        <h3 className="my-3">Truyện Chú lính Chì dũng cảm</h3>
        <div>
          <Link
            href={"/pdf-book/childrens/chu-linh-chi-dung-cam.pdf"}
            target="_blank"
          >
            Chú lính Chì dũng cảm
          </Link>
        </div>
        <h3 className="my-3">Truyện Cô bé bán diêm</h3>
        <div>
          <Link href={"/pdf-book/childrens/co-be-ban-diem.pdf"} target="_blank">
            Cô bé bán diêm
          </Link>
        </div>
        <h3 className="my-3">Truyện Cô bé tí hon</h3>
        <div>
          <Link href={"/pdf-book/childrens/co-be-ti-hon.pdf"} target="_blank">
            Cô bé tí hon
          </Link>
        </div>
        <h3 className="my-3">Truyện Nàng tiên cá</h3>
        <div>
          <Link href={"/pdf-book/childrens/nang-tien-ca.pdf"} target="_blank">
            Nàng tiên cá
          </Link>
        </div>
        <h3 className="my-3">Truyện Vịt con xấu xí</h3>
        <div>
          <Link href={"/pdf-book/childrens/vit-con-xau-xi.pdf"} target="_blank">
            Vịt con xấu xí
          </Link>
        </div>
      </S.Wrapper>
    </>
  );
}

export default ChildrenPage;
