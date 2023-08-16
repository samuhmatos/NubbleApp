import {postService, usePaginatedList} from '@domain';
import {Post} from '@types';

export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}
