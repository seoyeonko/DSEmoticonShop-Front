import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import DrawerMenu from '../mypage/DrawerMenu';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 110px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spacer = styled.div`
  height: 110px;
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    text-decoration: none;
    font-size: 20px;
  }

  .drawer {
    width: 25px;
    height: 25px;
    margin-left: 20px;
    margin-right: 40px;
  }

  .itemBox {
    display: flex;
    .search {
      width: 23px;
      height: 23px;

      .searchIcon {
        width: 23px;
        height: 23px;
        cursor: pointer;
      }
    }
  }
`;

const LoginLink = styled(Link)`
  width: 25px;
  height: 25px;
  margin-left: 20px;
  margin-right: 20px;

  img {
    width: 25px;
    height: 25px;
    border-radius: 8px;
  }
`;

const menuStyle = css`
  width: 150px;
  display: flex;
  justify-content: center;
  color: #7e7e7e;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
`;

const HeaderMenu = styled.div`
  width: 600px;
  height: 33px;
  display: flex;

  .check {
    color: black;
    font-weight: bold;
    border-bottom: 3px solid black;
  }
`;

const StyledLink = styled(Link)`
  ${menuStyle}

  &:hover {
    color: black;
    font-weight: bold;
    border-bottom: 3px solid black;
  }
`;

const Fullscreen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const SearchModalBlock = styled.div`
  width: 100%;
  height: 130px;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 500px;
    height: 45px;
    border-radius: 5px;
    border: 2px solid black;
    padding: 5px 10px;
    font-size: 15px;
  }
`;

const SearchLink = styled(Link)`
  width: 30px;
  height: 30px;
  margin-left: 25px;

  .searchImg {
    width: 30px;
    height: 30px;
  }
`;

const SearchSpaceBlock = styled.div`
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
`;

const DrawerMenuSpace = styled.div`
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
`;

const Header = ({ menu, hideSearch }) => {
  const searchInput = useRef();
  const [open, setOpen] = useState(false); // search
  const [hideIcon, setHideIcon] = useState(hideSearch);
  const [openMenu, setOpenMenu] = useState(false); // drawer menu

  // search
  const onSearch = () => {
    setOpen(true);
    setHideIcon(true);
  };

  const onClickOutside = () => {
    setOpen(false);
    setHideIcon(false);
  };

  // drawer menu
  const onMenu = () => {
    setOpenMenu(true);
  };

  const onClickOutsideMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <HeaderBlock>
        <HeaderTop>
          <AiOutlineMenu className="drawer" onClick={onMenu}></AiOutlineMenu>
          <div>
            <Link to="/" className="title">
              DS<b>emoticon</b> shop
            </Link>
          </div>
          <div className="itemBox">
            <div className="search">
              {!hideIcon && (
                <AiOutlineSearch
                  className="searchIcon"
                  onClick={onSearch}
                ></AiOutlineSearch>
              )}
            </div>
            <LoginLink to="/login">
              <img alt="프로필 기본이미지" src="/image/profile_default.png" />
            </LoginLink>
          </div>
        </HeaderTop>
        <HeaderMenu>
          <StyledLink to="/" className={menu === 'home' ? 'check' : ''}>
            홈
          </StyledLink>
          <StyledLink to="/item/new" className={menu === 'new' ? 'check' : ''}>
            신규
          </StyledLink>
          <StyledLink to="/item/hot" className={menu === 'hot' ? 'check' : ''}>
            인기
          </StyledLink>
          <StyledLink
            to="/item/style"
            className={menu === 'style' ? 'check' : ''}
          >
            스타일
          </StyledLink>
        </HeaderMenu>
      </HeaderBlock>
      {openMenu && (
        <Fullscreen>
          <DrawerMenu />
          <DrawerMenuSpace onClick={onClickOutsideMenu} />
        </Fullscreen>
      )}
      <Spacer />
      {open && (
        <Fullscreen>
          <SearchModalBlock ref={searchInput}>
            <input type="text" placeholder="이모티콘을 검색해보세요!" />
            <SearchLink to="/search">
              <AiOutlineSearch className="searchImg"></AiOutlineSearch>
            </SearchLink>
          </SearchModalBlock>
          <SearchSpaceBlock onClick={onClickOutside}></SearchSpaceBlock>
        </Fullscreen>
      )}
    </>
  );
};

export default Header;
