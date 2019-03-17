import React from 'react';
import { useFormState } from 'react-use-form-state';

import { useStore, useActions } from '../store';
import { LoginRequest } from '../model/auth';
import { Flex, Card, FlexProps } from 'rebass';
import { height, HeightProps } from 'styled-system';
import styled from 'styled-components';

const LoginWrapper = styled(Flex)<FlexProps & HeightProps>`
  ${height}
`;

export default function Login() {
  const { auth, me } = useStore(state => state);

  const { login, getDetails } = useActions(actions => ({
    login: actions.auth.login,
    getDetails: actions.me.getDetails,
  }));

  const [formState, { text, password }] = useFormState<LoginRequest>();

  if (!auth.authenticated || !me.details) {
    return (
      <LoginWrapper alignItems="center" justifyContent="center" width="100%" height="100%">
        <form
          onSubmit={async e => {
            e.preventDefault();
            await login(formState.values);
            await getDetails();
          }}>
          <Card width={['100vw', 350]} p={3}>
            <Flex flexDirection="column">
              <input {...text('username')} required />
              <input {...password('password')} required />
              <button>Submit</button>
            </Flex>
          </Card>
        </form>
      </LoginWrapper>
    );
  }

  return null;
}
