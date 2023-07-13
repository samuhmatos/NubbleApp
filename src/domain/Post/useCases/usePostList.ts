import {useEffect, useState} from 'react';

import {Post} from '@types';

import {postService} from '../postService';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const data = await postService.getList();
      setPostList(data);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    postList,
    refetch: fetchData,
  };
}
