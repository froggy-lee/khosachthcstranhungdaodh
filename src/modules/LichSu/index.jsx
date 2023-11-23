import React from "react";
import Link from "next/link";

function LichSu() {
  return (
    <main className="container my-5">
      <h3>Lịch sử Việt Nam</h3>
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
    </main>
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
