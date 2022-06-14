import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    models: {
      user: Model,
    },
    routes() {
      this.namespace = '/';
      this.get('/api/movies', () => {
        return {
          movies: [
            { id: 1, name: 'trail1', year: 2010 },
            { id: 2, name: 'trail2', year: 2014 },
            { id: 3, name: 'trail3', year: 2017 },
          ],
        };
      });
      this.passthrough();
    },
  });
}
