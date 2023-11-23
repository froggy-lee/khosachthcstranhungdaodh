import React from "react";
import * as S from "./styles";
import { FcSearch } from "react-icons/fc";

function Header() {
  return (
    <header>
      <S.NavWrapper
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Trang Chủ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Page 3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Page 4
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm Kiếm"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                <FcSearch size={25} />
              </button>
            </form>
          </div>
        </div>
      </S.NavWrapper>
    </header>
  );
}

export default Header;
