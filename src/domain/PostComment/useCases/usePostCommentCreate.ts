import {useState} from 'react';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(postId: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      await postCommentService.create(postId, message);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    createComment,
    loading,
    error,
  };
}
