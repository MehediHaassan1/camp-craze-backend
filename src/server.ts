import mongoose from 'mongoose';
import app from './app';
import config from './app/config';


async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        app.listen(config.port, () => {
            console.log(`CampCraze Server running fast on path ${config.port}`)
        })
    } catch (err: any) {
        throw new Error(err.message)
    }
}

main()