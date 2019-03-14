import styled from "styled-components";

const Card = styled.div`
  background: #f6f7f7;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
`;

const Picture = styled.img`
  object-fit: contain;
  display: inline-block;
  width: 100%;
  border-radius: 3px;
`;

const Separator = styled.span`
  width: 1px;
  height: 15px;
  display: inline-block;
  background: #aaa;
  margin: 0 10px;
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
  font-size: 12px;
`;

const Icon = styled.i``;

const Time = styled.time`
  font-size: 12px;
`;

export { Card, Picture, Separator, Price, Title, Area, Icon, Time };
