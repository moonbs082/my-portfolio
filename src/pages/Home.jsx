import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import SectionCard from '../components/SectionCard.jsx'

// 로컬 전용 이미지 (src/assets/local 은 .gitignore 대상).
// 파일이 없는 환경(GitHub Actions 빌드)에서는 undefined → 기본 그라데이션 배경
const localImages = import.meta.glob('../assets/local/hero-tron.jpg', {
  eager: true,
  import: 'default',
})
const heroImage = Object.values(localImages)[0]

const sections = [
  {
    id: 'hero',
    label: 'Hero',
    title: 'Hero 섹션',
    description:
      '여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.',
    highlight: true,
    image: heroImage,
  },
  {
    id: 'about',
    label: 'About Me',
    title: 'About Me 섹션',
    description:
      "여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.",
    link: { to: '/about', text: '더 알아보기' },
  },
  {
    id: 'skills',
    label: 'Skill Tree',
    title: 'Skill Tree 섹션',
    description:
      '여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.',
  },
  {
    id: 'projects',
    label: 'Projects',
    title: 'Projects 섹션',
    description:
      "여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.",
    link: { to: '/projects', text: '더 보기' },
  },
  {
    id: 'contact',
    label: 'Contact',
    title: 'Contact 섹션',
    description:
      '여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.',
  },
]

function Home() {
  return (
    <Stack spacing={4}>
      {sections.map(({ link, ...section }) => (
        <SectionCard key={section.id} {...section}>
          {link && (
            <Button
              component={Link}
              to={link.to}
              variant="contained"
              disableElevation
              sx={{ mt: 3, fontWeight: 700 }}
            >
              {link.text}
            </Button>
          )}
        </SectionCard>
      ))}
    </Stack>
  )
}

export default Home
