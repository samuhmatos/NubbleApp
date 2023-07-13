import {api} from '@api';
import {PageAPI, PostAPI} from '@types';

async function getList(): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post');
  return response.data;
}

export const postApi = {
  getList,
};
