import React from "react";
import * as S from "./styles";

function BannerSection() {
  return (
    <section>
      <S.Banner>
        <div className="text-center">
          <h4 className="text-danger">Phòng giáo dục và đạo tạo Đông Hà</h4>
          <h1>trường THCS Trần Hưng Đạo</h1>

          <h3>Thư viện sách - Tài liệu học tập</h3>
        </div>
      </S.Banner>
    </section>
  );
}

export default BannerSection;
