import 'dotenv/config';
import express from 'express';
import routes from './routes';

const app = express();
app.use(routes);

app.listen(3000, '0.0.0.0', () => console.log(`server is running at 3000`));
