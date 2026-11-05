import Box from '@mui/material/Box';

/** 글자 하나당 드러나는 시간 간격(ms) */
const CHAR_DELAY_MS = 35;

/**
 * RevealTitle 컴포넌트
 *
 * 부모 카드(.project-card)에 마우스를 올리면 제목 글자가
 * 왼쪽에서 오른쪽으로 하나씩 서서히 드러난다.
 * 터치 기기(hover 불가)와 '동작 줄이기' 설정에서는 처음부터 모두 보인다.
 *
 * Props:
 * @param {string} text - 표시할 제목 텍스트 [Required]
 *
 * Example usage:
 * <RevealTitle text="AI스마트 운동" />
 */
function RevealTitle({ text }) {
  const chars = Array.from(text);

  return (
    <Box
      component="h3"
      className="reveal-title"
      sx={{
        m: 0,
        mb: 1,
        fontSize: { xs: '1.1rem', md: '1.2rem' },
        fontWeight: 700,
        lineHeight: 1.4,
        color: 'var(--color-text-primary)',
      }}
    >
      {/* 스크린 리더는 전체 제목을 한 번에 읽도록 별도 제공 */}
      <Box
        component="span"
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </Box>
      <Box component="span" aria-hidden="true">
        {chars.map((char, index) => (
          <Box
            key={`${char}-${index}`}
            component="span"
            className="reveal-title__char"
            sx={{
              display: 'inline-block',
              whiteSpace: 'pre',
              '@media (hover: hover) and (prefers-reduced-motion: no-preference)': {
                opacity: 0.35,
                transform: 'translateX(-3px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                transitionDelay: '0ms',
                '.project-card:hover &, .project-card:focus-within &': {
                  opacity: 1,
                  transform: 'none',
                  transitionDelay: `${index * CHAR_DELAY_MS}ms`,
                },
              },
            }}
          >
            {char}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default RevealTitle;
