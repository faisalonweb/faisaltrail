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
      this.passthrough('https://trail-api.demo.prixite.com/signup/');
      this.passthrough('https://trail-api.demo.prixite.com/');
      this.passthrough('https://trail-api.demo.prixite.com/');
      this.passthrough('https://trail-api.demo.prixite.com/api/token/');
      this.passthrough('https://trail-api.demo.prixite.com/request-reset-email/');
      this.passthrough('https://trail-api.demo.prixite.com/password-reset-complete/');
      this.passthrough('https://trail-api.demo.prixite.com/change-password/');
      this.passthrough('https://trail-api.demo.prixite.com/api/trails/');
      this.passthrough('https://trail-api.demo.prixite.com/api/trails/*');
      this.passthrough('https://trail-api.demo.prixite.com/api/categories/');
      this.passthrough();
    },
  });
}
