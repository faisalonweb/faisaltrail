import { createServer } from 'miragejs';
import { trailsListData  } from 'src/data/data';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    routes() {
      this.namespace = '/';
      this.get('/api/trails', () => {
        return trailsListData;
      });
      this.passthrough();
    },
  });
}
