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
      this.passthrough(`${process.env.REACT_APP_SERVER_URL}/signup/`);
      this.passthrough(`{${process.env.REACT_APP_SERVER_URL}}`);
      this.passthrough(`${process.env.REACT_APP_SERVER_URL}/api/token/`);
      this.passthrough(`${process.env.REACT_APP_SERVER_URL}/request-reset-email/`);
      this.passthrough(`${process.env.REACT_APP_SERVER_URL}/password-reset-complete/`);
      this.passthrough(`${process.env.REACT_APP_SERVER_URL}/change-password/`);
      this.passthrough(`${process.env.REACT_APP_SERVER_URL}/api/trails/`);
      this.passthrough(`${process.env.REACT_APP_SERVER_URL}/api/categories/`);
      this.passthrough(`${process.env.REACT_APP_SERVER_URL}/api/trails/*`);
      this.passthrough();
    },
  });
}
