import React from "react";
import Image from "next/image";
import * as S from "./styles";

function QRCode() {
  return (
    <S.Wrapper>
      <Image
        src={"/images/qr_code.jpg"}
        width={100}
        height={100}
        alt="qr code"
      />
    </S.Wrapper>
  );
}

export default QRCode;
