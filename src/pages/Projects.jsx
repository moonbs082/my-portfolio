import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import SectionCard from '../components/SectionCard.jsx';
import ProjectCard from '../components/projects/project-card.jsx';
import ProjectCardSkeleton from '../components/projects/project-card-skeleton.jsx';
import useProjects from '../hooks/use-projects.js';

/** 로딩 중 보여줄 스켈레톤 카드 개수 */
const SKELETON_COUNT = 3;

/** 반응형 열 구성: 모바일 1열 / 태블릿 2열 / 데스크톱 3열 */
const GRID_SIZE = { xs: 12, sm: 6, md: 4 };

/**
 * Projects 페이지
 *
 * Supabase projects 테이블의 게시된 프로젝트를 카드 그리드로 보여준다.
 *
 * Props: 없음
 *
 * Example usage:
 * <Route path="/projects" element={<Projects />} />
 */
function Projects() {
  const { projects, isLoading, error } = useProjects();

  return (
    <Stack spacing={4}>
      <SectionCard
        id="projects-page"
        label="Projects"
        title="프로젝트"
        description="직접 기획하고 개발해 배포한 작업물입니다. 카드의 Live Demo 버튼으로 실제 사이트를 바로 확인해 보세요."
      />

      {error && <Alert severity="error">{ error }</Alert>}

      {!error && !isLoading && projects.length === 0 && (
        <Box sx={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
          아직 등록된 프로젝트가 없습니다.
        </Box>
      )}

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {isLoading
          ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
            <Grid key={index} size={GRID_SIZE}>
              <ProjectCardSkeleton />
            </Grid>
          ))
          : projects.map((project) => (
            <Grid key={project.id} size={GRID_SIZE}>
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.tech_stack}
                detailUrl={project.detail_url}
                thumbnailUrl={project.thumbnail_url}
              />
            </Grid>
          ))}
      </Grid>
    </Stack>
  );
}

export default Projects;
