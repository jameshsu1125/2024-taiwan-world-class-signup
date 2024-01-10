import { REST_PATH } from '@/settings/config';
import { faker } from '@faker-js/faker';
import { mergePath } from 'lesca-fetcher';
import { HttpResponse, http } from 'msw';

export const handlers = [
  http.post(mergePath(REST_PATH.save), () => {
    return HttpResponse.json({
      status_code: 1,
      message: faker.lorem.lines(1),
    });
  }),

  http.get('/api', () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: 'Out Of Service',
    });
  }),
];
