import { REST_PATH } from '@/settings/config';
import { mergePath } from 'lesca-fetcher';
import { HttpResponse, http } from 'msw';

export const handlers = [
  http.post(mergePath(REST_PATH.save), () => {
    return HttpResponse.json({
      status_code: 0,
      message: '[mock message]: success save.',
    });
  }),

  http.get('/api', () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: 'Out Of Service',
    });
  }),
];
