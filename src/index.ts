import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import { engine } from 'express-handlebars'
import http from 'http';
import path from 'path';

dotenv.config()

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())

app.get('/', async (_, res) => {
  res.render('home')
});

app.get('/child', async (_, res) => {
  res.render('child')
});

app.use(express.static('public', { extensions: ['html'] }));

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`));
