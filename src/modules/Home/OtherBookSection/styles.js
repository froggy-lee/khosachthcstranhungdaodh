import styled from "styled-components";

export const SlideWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: #000;
    font-size: 25px;
  }
  @media (max-width: 600px) {
    .slick-next {
      right: -7px;
    }
    .slick-prev {
      left: -10px;
    }
  }
`;
export const BookItem = styled.div`
  padding: 1rem;
`;
export const BookWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  padding: 1rem;
  cursor: pointer;
`;
