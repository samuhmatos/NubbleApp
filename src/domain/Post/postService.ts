import {Post} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';

async function getList(): Promise<Post[]> {
  const postPageAPI = await postApi.getList();
  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
