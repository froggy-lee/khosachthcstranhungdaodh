import React from "react";
import { listBook } from "./data";
import ListBookItem from "./ListBookItem";

function ListBookSection() {
  return (
    <section className="container mt-5">
      <h3 className="title-section">Sách giáo khoa theo khối</h3>
      <hr />
      <div className="row">
        {listBook.map((item) => {
          return (
            <div
              key={item.grade}
              className="col-12 col-md-6 col-xxl-3 mt-3 d-flex justify-content-center"
            >
              <ListBookItem item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ListBookSection;
