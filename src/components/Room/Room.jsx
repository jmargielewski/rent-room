import React from 'react';
import { Card } from './RoomStyles';

const Room = ({ room }) => (
  <Card>
    {room.rentPerMonth}
    {room.roomTitle}
    {room.area}
    {room.transport.name}
    {room.transport.type}
    {room.transport.distance.time}
    {room.transport.distance.type}
    roommates: .... photos: ....
  </Card>
);

export default Room;
