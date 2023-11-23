import React from "react";
import * as S from "./styles";

function BannerPage({ title }) {
  return (
    <section>
      <S.Banner>
        <div className="text-center">
          <h1>{title}</h1>
        </div>
      </S.Banner>
    </section>
  );
}

export default BannerPage;
