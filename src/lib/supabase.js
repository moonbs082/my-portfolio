import { createClient } from '@supabase/supabase-js'

// publishable 키는 브라우저 공개용 키라 저장소에 올려도 안전하다.
// 데이터 접근 권한은 Supabase 의 RLS 정책(읽기·쓰기만 허용)으로 제한한다.
const SUPABASE_URL = 'https://gjingzpmhbqmhpvkqumf.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_LoQhakJMalMJPSfi6vsKuw_b-EbhVvf'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
