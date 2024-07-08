import express, { Application, Request, Response } from 'express'
import cors from 'cors';
const app: Application = express()



// parser
app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to CampCraze! The adventure starts here. 🏕️')
})


export default app;