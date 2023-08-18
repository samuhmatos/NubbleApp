import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';
import {AppScreenProps} from '@types';

import {Screen} from '@components';

import {PostCommentItem} from './components/PostCommentItem';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  const {list} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen canGoBack title="Comentários">
      <FlatList data={list} renderItem={renderItem} />
    </Screen>
  );
}
