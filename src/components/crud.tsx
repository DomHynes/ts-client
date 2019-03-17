import React, { useEffect, Fragment } from 'react';
import { useStore, useActions } from '../store';
import UserCard from './usercard';

export default function CRUD() {
  const { users, me } = useStore(state => state);

  const { getUsers, updateUser } = useActions(actions => ({
    getUsers: actions.users.getUsers,
    updateUser: actions.users.updateUser,
  }));

  useEffect(() => {
    console.warn({ me });
    if (me.details) {
      getUsers();
    }
  }, [me.details && me.details.user.id]);

  if (!me.details) {
    return null;
  }

  return (
    <Fragment>
      {users.users.map(user => (
        <UserCard user={user} onUpdate={(id, user) => updateUser({ id, user })} />
      ))}
    </Fragment>
  );
}
