import React from 'react';
import { useFormState } from 'react-use-form-state';

import { useStore, useActions } from '../store';
import { LoginRequest } from '../model/auth';
import { Box, Flex } from 'rebass';

export default function Login() {
  const { auth, me } = useStore(state => state);

  const { login, getDetails } = useActions(actions => ({
    login: actions.auth.login,
    getDetails: actions.me.getDetails,
  }));

  const [formState, { text, password }] = useFormState<LoginRequest>();

  if (!auth.authenticated || !me.details) {
    return (
      <form
        onSubmit={async e => {
          e.preventDefault();
          await login(formState.values);
          await getDetails();
        }}>
        <Box width={600}>
          <Flex flexDirection="column">
            <input {...text('username')} required />
            <input {...password('password')} required />
            <button>Submit</button>
          </Flex>
        </Box>
      </form>
    );
  }

  return <div>{`Hello, ${me.details.user.username}`}</div>;
}
