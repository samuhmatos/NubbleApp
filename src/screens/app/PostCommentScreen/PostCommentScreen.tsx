import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';
import {AppScreenProps} from '@types';

import {Screen} from '@components';
import {useAppSafeArea} from '@hooks';

import {PostCommentBottom, PostCommentItem} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;

  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);
  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen canGoBack title="Comentários">
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
    </Screen>
  );
}
