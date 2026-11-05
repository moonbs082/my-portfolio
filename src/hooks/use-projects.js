import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase.js';

/**
 * useProjects 훅
 *
 * Supabase projects 테이블에서 게시된(is_published) 프로젝트를
 * sort_order 순서로 불러온다. (RLS 정책으로 게시된 행만 조회됨)
 *
 * @returns {{ projects: Array, isLoading: boolean, error: string }}
 *
 * Example usage:
 * const { projects, isLoading, error } = useProjects();
 */
function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isCancelled = false;

    supabase
      .from('projects')
      .select('id, title, description, tech_stack, detail_url, thumbnail_url')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .then(({ data, error: fetchError }) => {
        if (isCancelled) return;
        if (fetchError) setError('프로젝트 목록을 불러오지 못했습니다.');
        else setProjects(data ?? []);
        setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return { projects, isLoading, error };
}

export default useProjects;
