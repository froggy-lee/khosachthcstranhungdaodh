"use client";
import React from "react";
import * as S from "./styles";
import { FcSearch } from "react-icons/fc";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const pathName = usePathname();
  return (
    <header>
      <S.NavWrapper
        className="navbar navbar-expand-lg py-3 "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            Trang Chủ
          </Link>
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
              {menu.map((item) => {
                return (
                  <li className="nav-item" key={item.id}>
                    <Link
                      className={
                        pathName === item.href ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
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

const menu = [
  {
    id: 1,
    href: "#",
    title: "Sách Giáo Khoa",
  },
  {
    id: 2,
    href: "lich-su",
    title: "Sách Lịch Sử",
  },
  {
    id: 3,
    href: "english",
    title: "Sách Tiếng Anh",
  },
  {
    id: 4,
    href: "van-hoc",
    title: "Sách Văn Học",
  },
];
