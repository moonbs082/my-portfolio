import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ProjectThumbnail from './project-thumbnail.jsx';
import RevealTitle from './reveal-title.jsx';

/**
 * ProjectCard 컴포넌트
 *
 * 썸네일(16:9) + 제목 + 한 줄 설명 + 기술 스택 뱃지 + Live Demo 버튼으로 구성된 카드.
 * 호버 시 그림자가 은은하게 깊어지고 제목 글자가 하나씩 드러난다.
 *
 * Props:
 * @param {string} title - 프로젝트 제목 [Required]
 * @param {string} description - 한 줄 설명 [Optional, 기본값: '']
 * @param {string[]} techStack - 기술 스택 목록 [Optional, 기본값: []]
 * @param {string} detailUrl - 배포된 사이트 URL [Required]
 * @param {string} thumbnailUrl - 썸네일 이미지 URL [Required]
 *
 * Example usage:
 * <ProjectCard
 *   title="AI스마트 운동"
 *   description="모바일 정보서치&지원 웹앱"
 *   techStack={['React', 'MUI']}
 *   detailUrl="https://moonbs082.github.io/mini_sns"
 *   thumbnailUrl="https://image.thum.io/get/https://moonbs082.github.io/mini_sns"
 * />
 */
function ProjectCard({ title, description = '', techStack = [], detailUrl, thumbnailUrl }) {
  return (
    <Card
      component="article"
      className="project-card"
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s ease',
        '@media (hover: hover)': {
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
          },
        },
      }}
    >
      <ProjectThumbnail src={thumbnailUrl} alt={`${title} 사이트 미리보기`} />

      <CardContent sx={{ flexGrow: 1, px: { xs: 2, md: 2.5 }, pt: 2, pb: 1 }}>
        <RevealTitle text={title} />
        <Box
          sx={{
            mb: 2,
            fontSize: { xs: '0.9rem', md: '0.95rem' },
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          { description }
        </Box>
        <Box
          component="ul"
          aria-label="기술 스택"
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, m: 0, p: 0, listStyle: 'none' }}
        >
          {techStack.map((tech) => (
            <Box component="li" key={tech}>
              <Chip
                label={tech}
                size="small"
                sx={{
                  fontWeight: 600,
                  color: 'var(--color-link)',
                  bgcolor: 'var(--color-accent-bg)',
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>

      <CardActions sx={{ px: { xs: 2, md: 2.5 }, pb: 2, pt: 1 }}>
        <Button
          variant="contained"
          href={detailUrl}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon />}
          fullWidth
          sx={{ minHeight: 44, fontWeight: 700 }}
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
