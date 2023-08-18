import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';
import {useAppSafeArea} from '@hooks';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}
export function PostCommentBottom({fetchNextPage, hasNextPage}: Props) {
  const {bottom} = useAppSafeArea();

  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage} style={{paddingBottom: bottom}}>
        <Text color="primary" bold textAlign="center">
          Ver mais
        </Text>
      </Pressable>
    );
  }

  return null;
}
