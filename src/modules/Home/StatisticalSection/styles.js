"use client";
import styled from "styled-components";

export const TableWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  border: 1px solid darkgrey;
  border-radius: 10px;
  padding: 1rem 2rem;
  background: #fffbeb;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
