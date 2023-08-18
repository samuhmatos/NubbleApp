import React from 'react';

import {Post} from '@types';

import {Box, ProfileAvatar, Text} from '@components';

type Props = Pick<Post, 'author'>;
export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageUrl={author.profileURL} />
      <Text ml="s12" preset="paragraphMedium" semiBold>
        {author.userName}
      </Text>
    </Box>
  );
}
