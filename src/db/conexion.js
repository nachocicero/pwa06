import mongodb from 'mongodb';
import 'dotenv/config';


const MongoClient = mongodb.MongoClient;
const MONGOLOCAL = process.env.MONGOLOCAL;

try{
    MongoClient.connect(MONGOLOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`base de datos conectada a ${MONGOLOCAL}`);
 } catch (error){
        console.log(`No estamos conectados` );
         }

