import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eziwvufunacyxcxejgje.supabase.co'

// APAGUE O TEXTO ABAIXO E COLE A SUA CHAVE ANON (aquela que começa com sb_...)
const supabaseAnonKey = 'sb_publishable_du7opJxHeqGDEuTDlbrLoA_NJBrThSx'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
