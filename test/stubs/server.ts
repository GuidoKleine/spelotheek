import { setupServer } from 'msw/node'
import { handlers } from './handlers/catelogus'
 
export const server = setupServer(...handlers)