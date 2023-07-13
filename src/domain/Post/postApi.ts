import {PageAPI, PostAPI} from '@types';

import {postListMock} from './postListMock';

async function getList(): Promise<PageAPI<PostAPI>> {
  let headerList = {
    Authorization:
      'bearer Ng.kVNjJeGJbk3it0IY91GtlGZKqA3TvtP-5jy_YS5OXqq8QaEj8raCQ-1sbXbs',
  };

  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: headerList,
  });

  let data: PageAPI<PostAPI> = await response.json();
  return data;
}

export const postApi = {
  getList,
};
