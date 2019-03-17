import React, { useEffect, Fragment } from 'react';
import { useStore, useActions } from '../store';
import UserCard from './usercard';
import { Flex } from 'rebass';
import { User } from '../model/users';

export default function CRUD() {
  const { users, me } = useStore(state => state);

  const { getUsers, updateUser } = useActions(actions => ({
    getUsers: actions.users.getUsers,
    updateUser: actions.users.updateUser,
  }));

  useEffect(() => {
    if (me.details) {
      getUsers();
    }
  }, [me.details && me.details.user.id]);

  if (!me.details) {
    return null;
  }

  return (
    <Flex>
      {users.users.map(user => (
        <UserCard
          user={user}
          loading={users.loading}
          onUpdate={(id: string, user: Partial<User>) => updateUser({ id, user })}
        />
      ))}
    </Flex>
  );
}
