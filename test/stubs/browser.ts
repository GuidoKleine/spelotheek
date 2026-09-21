import { setupWorker } from 'msw/browser'
import { handlers } from './handlers/catelogus'
 
export const worker = setupWorker(...handlers)