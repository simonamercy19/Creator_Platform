import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class User extends React.Component {
  changeUsers = () => {
    const { userStore } = this.props;
    userStore.changeUser([{ name: 'new user', id: 1 }]);
  };

  render() {
    const { userStore } = this.props;
    return (
      <>
        {userStore.users.map(user => (
          <div key={user.id}>
            {user.name}
            {user.id}
          </div>
        ))}
        <button type="button" onClick={this.changeUsers}>
          Change Users
        </button>
      </>
    );
  }
}

export default User;
