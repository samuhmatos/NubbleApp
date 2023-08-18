import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';
import {AppScreenProps} from '@types';

import {Box, Screen, TextMessage} from '@components';
import {useAppSafeArea} from '@hooks';

import {PostCommentBottom, PostCommentItem} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const [message, setMessage] = useState('');
  const postId = route.params.postId;

  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);
  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  function onPressSend() {}

  return (
    <Screen canGoBack title="Comentários" flex={1}>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: bottom}}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />

        <TextMessage
          placeholder="Adicione um comentário"
          value={message}
          onChangeText={value => setMessage(value)}
          onPressSend={onPressSend}
        />
      </Box>
    </Screen>
  );
}
