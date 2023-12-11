import React from "react";
import Link from "next/link";
import BannerPage from "@/components/Banner";
import * as S from "./styles";

function LichSu() {
  return (
    <>
      <BannerPage title={"Tài Liệu Lịch Sử"} />
      <S.Wrapper className="container my-5">
        <h3 className="my-3">Lịch sử Việt Nam</h3>
        {total.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href={`/pdf-book/history/lich-su-viet-nam-bang-tranh-tap-${item.id}.pdf`}
                target="_blank"
              >
                Lịch sử Việt Nam tập {item.id} - {item.title}
              </Link>
            </div>
          );
        })}
        <h3 className="my-3">
          Các trận đánh quan trọng trong lịch sử Việt Nam
        </h3>
        <div>
          <Link
            href={
              "/pdf-book/history/Cac-tran-dau-quan-trong-trong-lich-su-viet-nam.pdf"
            }
            target="_blank"
          >
            Các trận đánh quan trọng trong lịch sử Việt Nam
          </Link>
        </div>
        <h3 className="my-3">Theo dòng Lịch sử</h3>
        <div>
          <Link
            href={"/pdf-book/history/Theo-dong-lich-su.pdf"}
            target="_blank"
          >
            Theo dòng Lịch sử
          </Link>
        </div>
        <h3 className="my-3">Việt Nam thời Tây Sơn</h3>
        <div>
          <Link
            href={
              "/pdf-book/history/Viet-nam-thoi-tay-son-lich-su-noi-chien-1771-1802.pdf"
            }
            target="_blank"
          >
            Thời nội chiến 1771 - 1802
          </Link>
        </div>
      </S.Wrapper>
    </>
  );
}

export default LichSu;

const total = [
  {
    id: 1,
    title: "Thời Hùng Vương",
  },
  {
    id: 2,
    title: "Chống quân xâm lược phương Bắc",
  },
  {
    id: 3,
    title: "Thời nhà Ngô - Đinh - Tiền Lê",
  },
  {
    id: 4,
    title: "Thời nhà Lý",
  },
  {
    id: 5,
    title: "Nhà Trần thắng giặc Nguyên Mông",
  },
  {
    id: 6,
    title: "Thời nhà Hồ",
  },
  {
    id: 7,
    title: "Khởi nghĩa Lam Sơn",
  },
  {
    id: 8,
    title: "Thời Lê Sơ",
  },
];
