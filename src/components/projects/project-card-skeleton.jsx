import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

/**
 * ProjectCardSkeleton 컴포넌트
 *
 * 프로젝트 목록을 불러오는 동안 카드 자리를 미리 보여준다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectCardSkeleton />
 */
function ProjectCardSkeleton() {
  return (
    <Card
      elevation={0}
      sx={{ bgcolor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
    >
      <Skeleton variant="rectangular" sx={{ width: '100%', height: 'auto', aspectRatio: '16 / 9' }} />
      <CardContent>
        <Skeleton width="60%" height={32} />
        <Skeleton width="90%" />
        <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
          <Skeleton variant="rounded" width={56} height={24} />
          <Skeleton variant="rounded" width={72} height={24} />
        </Box>
        <Skeleton variant="rounded" height={44} sx={{ mt: 2 }} />
      </CardContent>
    </Card>
  );
}

export default ProjectCardSkeleton;
