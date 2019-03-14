import React from 'react';
import { Row, Col } from '../Layout/Grid';
import Room from '../Room/Room';

const RoomsList = ({ rooms }) => (
  <Row>
    {rooms.map(room => (
      <Col xs={12} sm={6} md={6} lg={4} key={room.uuid}>
        <Room room={room} />
      </Col>
    ))}
  </Row>
);

export default RoomsList;
