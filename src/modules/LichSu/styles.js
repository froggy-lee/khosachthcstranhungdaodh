"use client";
import styled from "styled-components";

export const Wrapper = styled.main`
  background: #fffbeb;
  border: 1px solid darkgray;
  border-radius: 10px;
  padding: 1rem 2rem;
  a {
    color: var(--primary);
    text-decoration: none;
  }
  h3 {
    color: #008000;
  }
  @media (max-width: 567px) {
    font-size: 14px;
    padding: 1rem;
    h3 {
      font-size: 18px;
    }
  }
`;
