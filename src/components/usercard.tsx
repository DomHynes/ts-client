import React from 'react';
import { Card } from 'rebass';
import { User } from '../model/users';
import { useFormState } from 'react-use-form-state';
import { fontSize, FontSizeProps, WidthProps, width, space, SpaceProps } from 'styled-system';
import styled from 'styled-components';

const UserCardInput = styled.input<FontSizeProps & WidthProps & SpaceProps>`
  ${fontSize}
  ${space}

  border: none;
  display: inline;
  font-family: inherit;
  padding: none;
  width: 100%;
`;

type UserCardProps = {
  user: User;
  onUpdate: (id: string, user: Partial<User>) => void;
};

const UserCard: React.FC<UserCardProps> = ({ user, onUpdate }) => {
  const [formState, { text }] = useFormState<{ username: string }>({
    username: user.username,
  });

  return (
    <Card width={[1, 1 / 5]} p={5} m={5} borderRadius={8}>
      <form
        onSubmit={e => {
          e.preventDefault();
          onUpdate(user.id, formState.values);
        }}>
        <UserCardInput fontSize={6} {...text('username')} />
        <ul>
          {user.roles.map(role => (
            <li>{role}</li>
          ))}
        </ul>
      </form>
    </Card>
  );
};

export default UserCard;
