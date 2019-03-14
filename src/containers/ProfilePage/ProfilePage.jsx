import React, { PureComponent } from 'react';

class ProfilePage extends PureComponent {
  render() {
    const { match } = this.props;
    return (
      <div>
        Profile with id:
        <b>{match.params.id}</b>
      </div>
    );
  }
}

export default ProfilePage;
