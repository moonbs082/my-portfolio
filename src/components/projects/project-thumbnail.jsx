import { useState } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';

/**
 * ProjectThumbnail 컴포넌트
 *
 * image.thum.io 가 실시간으로 만들어 주는 스크린샷을 16:9 비율로 보여준다.
 * 로딩 중에는 스켈레톤, 실패하면 대체 아이콘을 표시한다.
 *
 * Props:
 * @param {string} src - 썸네일 이미지 URL [Required]
 * @param {string} alt - 대체 텍스트 [Required]
 *
 * Example usage:
 * <ProjectThumbnail src={project.thumbnail_url} alt="AI스마트 운동 미리보기" />
 */
function ProjectThumbnail({ src, alt }) {
  const [status, setStatus] = useState('loading');

  return (
    <Box
      sx={{
        position: 'relative',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        bgcolor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {status === 'loading' && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
      )}
      {status === 'error' ? (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-muted)',
          }}
        >
          <ImageNotSupportedOutlinedIcon fontSize="large" />
        </Box>
      ) : (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
            opacity: status === 'loaded' ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
    </Box>
  );
}

export default ProjectThumbnail;
