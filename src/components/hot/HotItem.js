import React from 'react';
import styled from 'styled-components';

const HotItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  padding: 0px;
  height: 130px;
  width: 450px;

  .itemBlock {
    display: flex;
    align-items: center;
    height: 130px;
    border-bottom: 1px solid #ebebeb;
  }

  &:hover {
    img {
      display: block;
    }
    .title {
      color: #000000;
      font-weight: bold;
      text-decoration: underline;
    }
    .thumbnail {
      img:first-child {
        display: none;
      }
      img:last-child {
        display: inline;
      }
    }
  }
`;

const HotTopBlock = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  font-size: 25px;

  span.redPoint {
    color: red;
  }
`;

const HotNameBlock = styled.div`
  .textBox {
    width: 200px;
    height: 120px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    font-size: 1.025rem;
    padding-bottom: 0.5rem;
    color: #313131;
  }
  .author {
    font-size: 0.725rem;
    padding-bottom: 0.3rem;
    color: #7e7e7e;
  }
  img {
    height: 30px;
    width: 30px;
    display: none;
  }
  &:hover {
    display: block;
  }
`;

const HotImageBlock = styled.ul`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 150px;

  li {
    margin-top: 0;
    list-style: none;
    padding-left: 10px;
    padding-right: 10px;

    img {
      width: 100px;
      height: 100px;
    }
    img:last-child {
      display: none;
    }
  }
`;
const HotItem = ({ top }) => {
  return (
    <HotItemWrapper>
      <HotTopBlock>
        <span className={top < 4 ? 'redPoint' : ''}>{top}</span>
      </HotTopBlock>
      <div className="itemBlock">
        <HotNameBlock>
          <div className="textBox">
            <span className="title">이모티콘 제목</span>
            <span className="author">작가 이름</span>
            <img src="/image/like1.png" alt="like" />
          </div>
        </HotNameBlock>
        <HotImageBlock>
          <li className="thumbnail">
            <img src="/image/emoticon1.png" alt="emoticon1" />
            <img src="/image/emoticon2.png" alt="emoticon1" />
          </li>
        </HotImageBlock>
      </div>
    </HotItemWrapper>
  );
};

export default HotItem;
