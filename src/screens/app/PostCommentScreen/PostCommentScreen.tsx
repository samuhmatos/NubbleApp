import React from 'react';

import {AppScreenProps} from '@types';

import {Box, Screen, Text} from '@components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  //route.params.postId
  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Comentarios</Text>
      </Box>
    </Screen>
  );
}
