import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express()



// parser
app.use(cors());
app.use(express.json());

// routing
app.use('/api', router);


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to CampCraze! The adventure starts here. 🏕️')
})


// error handling
app.use(globalErrorHandler)

export default app;