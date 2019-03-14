import React from 'react';
import { Row, Col } from '../Layout/Grid';
import Room from '../Room/Room';

const RoomsList = ({ rooms }) => (
  <Row>
    {rooms.map(room => (
      <Col xs={12} sm={6} md={4} lg={3} key={room.uuid}>
        <Room room={room} />
      </Col>
    ))}
  </Row>
);

export default RoomsList;
