import React, { PureComponent } from 'react';

class RoomsPage extends PureComponent {
  render() {
    const { match } = this.props;
    return (
      <div>
        Page Room with id:
        <b>{match.params.id}</b>
      </div>
    );
  }
}

export default RoomsPage;
