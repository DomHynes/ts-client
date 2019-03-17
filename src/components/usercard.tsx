import React from 'react';
import { Card } from 'rebass';
import { User } from '../model/users';
import { useFormState } from 'react-use-form-state';
import { fontSize, FontSizeProps, WidthProps, space, SpaceProps, themeGet } from 'styled-system';
import styled from 'styled-components';
import Skeleton from 'react-skeleton-loader';
import { Text } from 'rebass';

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
  loading: boolean;
};

const UserCard: React.FC<UserCardProps> = ({ user, onUpdate, loading }) => {
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
        {!loading ? (
          <UserCardInput fontSize={6} {...text('username')} />
        ) : (
          <Text fontSize={6}>
            <Skeleton height={themeGet('fontSize.6')} />
          </Text>
        )}
        <ul>
          {user.roles.map(role => (
            <li>{!loading ? role : <Skeleton />}</li>
          ))}
        </ul>
      </form>
    </Card>
  );
};

export default UserCard;
