"use client";
import styled from "styled-components";

export const Wrapper = styled.article`
  max-width: 450px;
  width: 100%;
  border: 1px solid darkgray;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: green;
    scale: 1.02;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`;
