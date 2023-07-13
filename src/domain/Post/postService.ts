import {Post} from '@types';

import {postApi} from './postApi';

async function getList(): Promise<Post[]> {
  const postList = await postApi.getList();
  return postList;
}

export const postService = {
  getList,
};
