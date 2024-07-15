import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
const app: Application = express()



// parser
app.use(cors({ origin: ['https://frontend-one-gamma-17.vercel.app', 'http://localhost:5173'] }));
app.use(express.json());

// routing
app.use('/api', router);


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to CampCraze! The adventure starts here. 🏕️')
})


// error handling
app.use(globalErrorHandler)

// not found route
app.use(notFound)

export default app;