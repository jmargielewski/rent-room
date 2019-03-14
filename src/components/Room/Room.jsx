import React from 'react';
import {
  Card,
  Picture,
  Separator,
  Price,
  Title,
  Area,
  Icon,
  Time,
} from './RoomStyles';
import { Row, Col } from '../Layout/Grid';

const Room = ({ room }) => {
  console.log(room);
  return (
    <Card>
      <Picture src={room.photos[0].cdnUrl} alt={room.roomTitle} />
      <div>
        <Price>{room.rentPerMonth}</Price>
        <Separator />
        <Title>{room.roomTitle}</Title>
      </div>
      <div>
        <Area>{room.area}</Area>
        <Separator />
        <Icon />
        <Time>{room.transport.distance.time}</Time>
        <Icon />
        <Area>{room.transport.name}</Area>
      </div>

      {/* <Row>
        <Col xs={2} sm={2} md={2} lg={2}>
          {room.rentPerMonth}
        </Col>
        <Col xs={10} sm={10} md={10} lg={10}>
          {room.roomTitle}
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={2} md={2} lg={2}>
          {room.area}
        </Col>
        <Col xs={10} sm={10} md={10} lg={10}>
          {room.transport.distance.type && 'ludzik'}
          {room.transport.distance.time}
          {room.transport.type}
          {room.transport.name}
        </Col>
      </Row> */}
    </Card>
  );
};

export default Room;
