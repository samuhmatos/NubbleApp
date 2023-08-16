import React from 'react';

import {usePostCommentList} from '@domain';
import {AppScreenProps} from '@types';

import {Box, Screen, Text} from '@components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  const {list} = usePostCommentList(postId);

  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Comentarios</Text>
      </Box>
    </Screen>
  );
}
