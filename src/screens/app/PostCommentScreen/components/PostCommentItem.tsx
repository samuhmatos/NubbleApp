import React from 'react';

import {PostComment} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
}
export function PostCommentItem({postComment}: Props) {
  return (
    <Box mb="s16" flexDirection="row" alignItems="center">
      <ProfileAvatar imageUrl={postComment.author.profileURL} />
      <Box ml="s12">
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message}
        </Text>
      </Box>
    </Box>
  );
}
