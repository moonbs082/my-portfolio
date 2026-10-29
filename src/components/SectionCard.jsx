import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// 각 섹션의 역할이 한눈에 보이도록 라벨 + 제목 + 설명으로 구성한 카드
function SectionCard({ id, label, title, description, highlight = false, image, children }) {
  // 사진 배경: 어두운 그라데이션을 덮어 글자 가독성 확보 (모바일은 더 진하게)
  const imageBackground = (from, to) =>
    `linear-gradient(180deg, rgba(6, 23, 24, ${from}) 0%, rgba(6, 23, 24, ${to}) 100%), url(${image}) center / cover no-repeat`
  const highlightBackground = image
    ? { xs: imageBackground(0.6, 0.95), md: imageBackground(0.3, 0.9) }
    : 'var(--gradient-hero)'

  return (
    <Card
      id={id}
      component="section"
      elevation={0}
      sx={{
        textAlign: 'center',
        border: '1px solid',
        borderColor: highlight ? 'transparent' : 'var(--color-border)',
        borderTop: highlight ? 'none' : '4px solid var(--color-accent)',
        background: highlight ? highlightBackground : 'var(--color-bg-secondary)',
        minHeight: image ? { xs: 280, md: 400 } : undefined,
        display: image ? 'flex' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        color: highlight ? 'var(--color-hero-text)' : 'var(--color-text-secondary)',
      }}
    >
      <CardContent sx={{ py: { xs: 4, md: 6 }, px: { xs: 3, md: 6 } }}>
        <Typography
          variant="overline"
          sx={{
            display: 'inline-block',
            px: 1.5,
            mb: 1,
            borderRadius: 1,
            fontWeight: 700,
            letterSpacing: 2,
            color: highlight ? 'var(--color-hero-text)' : 'var(--color-link)',
            bgcolor: highlight ? 'rgba(255, 255, 255, 0.15)' : 'var(--color-accent-bg)',
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: highlight ? 'var(--color-hero-text)' : 'var(--color-text-primary)',
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ maxWidth: 560, mx: 'auto', lineHeight: 1.8 }}>
          {description}
        </Typography>
        {children}
      </CardContent>
    </Card>
  )
}

export default SectionCard
