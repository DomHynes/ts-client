import React from 'react';
import { Card } from 'rebass';
import { User } from '../model/users';
import { useFormState } from 'react-use-form-state';
import { fontSize, FontSizeProps } from 'styled-system';
import styled from 'styled-components';

const UserCardInput = styled.input<FontSizeProps>`
  ${fontSize}
`;

const UserCard: React.FC<{
  user: User;
  onUpdate: (id: string, user: Partial<User>) => void;
}> = ({ user, onUpdate }) => {
  const [formState, { text }] = useFormState<{ username: string }>({
    username: user.username,
  });

  return (
    <Card fontSize={6} width={[1, 1, 1 / 2]} p={5} my={5} borderRadius={8}>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log({ formState });
          onUpdate(user.id, formState.values);
        }}>
        <UserCardInput fontSize={6} {...text('username')} />
      </form>
    </Card>
  );
};

export default UserCard;
