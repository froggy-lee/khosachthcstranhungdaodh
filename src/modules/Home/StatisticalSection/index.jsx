import React from "react";
import { FaUserCheck, FaUserGraduate } from "react-icons/fa6";
import { FaUserEdit, FaUser } from "react-icons/fa";
import * as S from "./styles";

function StatisticalSection() {
  return (
    <section className="container mt-5">
      <h3 className="title-section text-center">Thống kê truy cập</h3>
      <hr />
      <S.TableWrapper className="text-center">
        <div className="mt-3">
          <span>
            <FaUserCheck size={"1.5rem"} className="text-primary" /> Hôm nay:{" "}
          </span>
          <span className="fw-bold">5</span>
        </div>
        <div className="mt-3">
          <span>
            <FaUserEdit size={"1.5rem"} className="text-primary" /> Hôm qua:{" "}
          </span>
          <span className="fw-bold">0</span>
        </div>
        <div className="mt-3">
          <span>
            <FaUserGraduate size={"1.2rem"} className="text-primary" /> Tháng
            12:{" "}
          </span>
          <span className="fw-bold">5</span>
        </div>
        <div className="my-3">
          <span>
            <FaUser size={"1.2rem"} className="text-primary" /> Năm 2023:{" "}
          </span>
          <span className="fw-bold">5</span>
        </div>
      </S.TableWrapper>
    </section>
  );
}

export default StatisticalSection;
