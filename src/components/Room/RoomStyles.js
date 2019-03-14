import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: block;
  background: #f6f7f7;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

const PictureWrap = styled.div`
  position: relative;
`;

const Picture = styled.img`
  object-fit: contain;
  display: inline-block;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
`;

const Avatars = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  &:hover {
    img {
      margin-right: 5px;
    }
  }
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: -25px;
  transition: 0.3s;
  &:last-of-type {
    margin-right: 0px !important;
  }
`;

const SmallRow = styled.div`
  padding: 3px 0;
`;

const Separator = styled.span`
  width: 1px;
  height: 15px;
  display: inline-block;
  background: #aaa;
  margin: 0 8px;
  vertical-align: middle;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const Area = styled.span`
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 37%;
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.img`
  vertical-align: middle;
  padding: 0 10px 0 5px;
`;

const Time = styled.time`
  font-size: 12px;
`;

export {
  Card,
  PictureWrap,
  Picture,
  Avatars,
  Avatar,
  SmallRow,
  Separator,
  Price,
  Title,
  Area,
  Icon,
  Time,
};
