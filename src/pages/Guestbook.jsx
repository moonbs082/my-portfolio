import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import SectionCard from '../components/SectionCard.jsx'
import { supabase } from '../lib/supabase.js'

// DB 체크 제약조건과 같은 길이 제한
const NAME_MAX = 30
const MESSAGE_MAX = 500

// 입력칸이 어두운 카드 위에서도 잘 보이도록 CSS 변수 색 적용
const fieldSx = {
  '& .MuiInputBase-root': { color: 'var(--color-text-primary)' },
  '& .MuiInputLabel-root': { color: 'var(--color-text-muted)' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--color-border)' },
  '& .MuiFormHelperText-root': { color: 'var(--color-text-muted)' },
}

function Guestbook() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const fetchEntries = () =>
    supabase
      .from('guestbook')
      .select('id, name, message, created_at')
      .order('created_at', { ascending: false })
      .limit(50)
      .then(({ data, error }) => {
        if (error) setError('방명록을 불러오지 못했습니다.')
        else setEntries(data)
        setLoading(false)
      })

  useEffect(() => {
    fetchEntries()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedMessage = message.trim()
    if (!trimmedName || !trimmedMessage) {
      setError('이름과 메시지를 모두 입력해 주세요.')
      return
    }

    setSubmitting(true)
    setError('')
    const { error } = await supabase
      .from('guestbook')
      .insert({ name: trimmedName, message: trimmedMessage })
    setSubmitting(false)

    if (error) {
      setError('글을 남기지 못했습니다. 잠시 후 다시 시도해 주세요.')
      return
    }
    setMessage('')
    fetchEntries()
  }

  return (
    <Stack spacing={4}>
      <SectionCard
        id="guestbook-page"
        label="Guestbook"
        title="방명록"
        description="방문해 주셔서 감사합니다. 자유롭게 한마디 남겨 주세요."
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 4, maxWidth: 560, mx: 'auto', textAlign: 'left' }}
        >
          <Stack spacing={2}>
            <TextField
              label="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              slotProps={{ htmlInput: { maxLength: NAME_MAX } }}
              sx={fieldSx}
            />
            <TextField
              label="메시지"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              minRows={3}
              slotProps={{ htmlInput: { maxLength: MESSAGE_MAX } }}
              helperText={`${message.length} / ${MESSAGE_MAX}`}
              sx={fieldSx}
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button type="submit" variant="contained" disabled={submitting}>
              {submitting ? '등록 중...' : '남기기'}
            </Button>
          </Stack>
        </Box>
      </SectionCard>

      {loading ? (
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      ) : entries.length === 0 ? (
        <Typography sx={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
          아직 남겨진 글이 없습니다. 첫 번째 글을 남겨 주세요!
        </Typography>
      ) : (
        <Stack spacing={2}>
          {entries.map((entry) => (
            <Card
              key={entry.id}
              elevation={0}
              sx={{
                bgcolor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, gap: 2 }}>
                  <Typography sx={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {entry.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
                    {new Date(entry.created_at).toLocaleString('ko-KR')}
                  </Typography>
                </Box>
                <Typography
                  sx={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                >
                  {entry.message}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default Guestbook
