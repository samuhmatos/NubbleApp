import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Post} from '@types';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

export function PostBottom({author, text, commentCount, id}: Props) {
  const commentText = getCommentText(commentCount);
  const navigation = useNavigation();

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {postId: id});
  }

  return (
    <Box mt="s16">
      <Text bold>{author.userName}</Text>
      <Text>{text}</Text>
      {commentText && (
        <Text
          onPress={navigateToPostCommentScreen}
          mt="s8"
          preset="paragraphSmall"
          bold
          color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return '';
  } else if (commentCount === 1) {
    return 'Ver comentário';
  } else {
    return `Ver ${commentCount} comentários`;
  }
}
