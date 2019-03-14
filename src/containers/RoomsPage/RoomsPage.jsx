import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import RoomsList from '../../components/RoomsList/RoomsList';
import * as actions from '../../redux/actions';

class RoomsPage extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { rooms } = this.props;
    return <>{rooms ? <RoomsList rooms={rooms} /> : <Spinner />}</>;
  }
}

const mapStateToProps = ({ roomsData: { rooms } }) => ({
  rooms,
});

export default connect(
  mapStateToProps,
  actions,
)(RoomsPage);
