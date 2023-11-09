"use client";
import styled from "styled-components";

export const BannerWrapper = styled.section``;

export const Banner = styled.article`
  min-height: 500px;
  background: url("/images/banner.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: green;
  text-transform: uppercase;
  @media (max-width: 991px) {
    min-height: 300px;
    h1 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
  }
  @media (max-width: 767px) {
    min-height: 220px;
    background-size: 115% 100%;
    h1 {
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;
