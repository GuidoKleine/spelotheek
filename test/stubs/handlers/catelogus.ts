import { http, HttpResponse } from "msw";
import catalogusData from '../payloads/catalogusData.json';
 
export const handlers = [
  http.get('/catalogus', () => {
  return HttpResponse.json(catalogusData)
  }),
]