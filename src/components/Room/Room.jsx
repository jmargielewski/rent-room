import React from 'react';
import { withRouter } from 'react-router-dom';
import * as S from './RoomStyles';
import checkIcon from './checkIcon';

const Room = ({ room, history }) => {
  // TODO wrap Link in roder to redirect insted onClick
  const onClick = (e, id) => {
    e.preventDefault();
    history.push(`/profile/${id}`);
  };
  const renderAvatars = avat => avat.map(({ profilePic, uuid }) => (
      <S.Avatar
        key={uuid}
        src={profilePic.cdnUrl}
        onClick={e => onClick(e, uuid)}
      />
    ));

  return (
    <S.Card to={`/listings/${room.uuid}`}>
      <S.PictureWrap>
        <S.Picture src={room.photos[0].cdnUrl} alt={room.roomTitle} />
        <S.Avatars>{renderAvatars(room.roommates)}</S.Avatars>
      </S.PictureWrap>
      <S.SmallRow>
        <S.Price>
          <span>$</span>
          {room.rentPerMonth}
        </S.Price>
        <S.Separator />
        <S.Title>{room.roomTitle}</S.Title>
      </S.SmallRow>
      <div>
        <S.Area>{room.area}</S.Area>
        <S.Separator />
        <S.Icon
          src={checkIcon(room.transport.distance.type)}
          alt={room.transport.distance.type}
        />
        <S.Time>{room.transport.distance.time}</S.Time>
        <S.Icon
          src={checkIcon(room.transport.type)}
          alt={room.transport.distance.type}
        />
        <S.Area>{room.transport.name}</S.Area>
      </div>
    </S.Card>
  );
};

export default withRouter(Room);
