import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class RoomsPage extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return <div>RoomsPage</div>;
  }
}

export default connect(
  null,
  actions,
)(RoomsPage);
