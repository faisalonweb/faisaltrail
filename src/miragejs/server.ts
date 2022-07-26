import { createServer } from 'miragejs';
import { trailsListData } from 'src/data/data';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    routes() {
      this.namespace = '/';
      this.get('/api/trails', () => {
        return trailsListData;
      });
      this.passthrough('http://194.195.118.247/signup/');
      this.passthrough('http://127.0.0.1:8000');
      this.passthrough('http://localhost:8000');
      this.passthrough('http://localhost:8000/api/token/');
      this.passthrough('http://localhost:8000/api/trails/');
      this.passthrough();
    },
  });
}
