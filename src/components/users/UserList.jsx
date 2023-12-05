import React from 'react';
import { users } from './users';
import UserItem from './UserItem';

const UserList = () => {
  return users.map(element => (
    <UserItem user={element} key={element.id}>
      <span className="badge rounded-pill text-bg-danger">{element.id}</span>
    </UserItem>
  ));
};

export default UserList;
