import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class RoomsPage extends Component {
  componentDidMount() {}

  render() {
    return <div>RoomPage</div>;
  }
}

export default connect(
  null,
  actions,
)(RoomsPage);
