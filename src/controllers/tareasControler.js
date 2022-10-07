import 'dotenv/config';
import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient; 


export const homeTareas = (req, res) => {
    res.render('home')
  // res.send (`<h1>Bienvenidos a mis APP con ES6</h1>`)
}

export const dameTareas = (req, res) => {
   
    MongoClient.connect(process.env.MONGOLOCAL, (error, db)=> {
        const database = db.db(process.env.DATABASE)

        if(error){
            console.log('error en la conexion');
        }else{
            //console.log(`Base de datos conectada a ${database}`);
            database.collection('tareas').find({}).toArray((error, result)=>{
                if(error){
                    console.log('error en la conexion');
                }else{
                    res.render('tareas', {result});
                }
            })
        }
    });

}

export const addTareas = (req, res) => {
    MongoClient.connect(process.env.MONGOLOCAL, (error, db)=>{
        const database =db.db(process.env.DATABASE)
        if(error){
            console.log('error en la conexion');
        }else{
            const {titulo, autor, descripcion, nivel} = req.body;
            let dia = new Date();
            let fechaString = dia.toDateString();
            
            database.collection('tareas').insertOne({titulo, autor, descripcion, nivel, fecha:fechaString}, (error, result)=>{
                if(error){
                    console.log('error en la conexion');
                }else{
                    console.log('Dato guardado correctamente' + JSON.stringify(req.body));
                    res.json(result);
                }
            })
        }
    });
}

export const eliminarTarea = (req, res) => {
        MongoClient.connect(process.env.MONGOLOCAL, (error, db)=>{
            const database =db.db(process.env.DATABASE)

            if(error){
                console.log('error en la conexion');
            }else{

                const id = req.params.id;
                const ObjectId = mongodb.ObjectId
                
                  
                database.collection('tareas').deleteOne({_id: ObjectId(id)}, (error, result)=>{
                    if(error){
                        console.log('error en la conexion');
                    }else{
                        console.log('Documento eliminado');
                        res.json(result);
                    }
                })
            }
        });
    
}

 export const tareasId = (req, res) => {
    
    MongoClient.connect(process.env.MONGOLOCAL, (error, db)=>{
        const database =db.db(process.env.DATABASE)

        if(error){
            console.log('error en la conexion');
        }else{

          
            const ObjectId = mongodb.ObjectId
            const id = req.params.id
              
            database.collection('tareas').findOne({_id: ObjectId(id)}, (error, result)=>{
                if(error){
                    console.log('error en la conexion');
                }else{
                    console.log('Documento eliminado');
                    res.json(result);
                }
            })
        }
    });
    
}

export const getTareaByID = (req, res) => {
    mongoCliente.connect(process.env.MONGOLOCAL, (error, db) =>{
        const database = db.db('pwatt');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        }else{
            console.log(`Conexion correcta a la Database`);

            let ObjectId = mongodb.ObjectId;
            let id = req.params.id;

            database.collection('tareas').findOne({_id: ObjectId(id)}, (error, result) =>{
                if (error) {
                    throw error;
                }else{
                    res.render('editarTarea', { 
                        result
                    })
                }
            })
        }
    });
}

export const actualizar = (req, res) =>{

    mongoCliente.connect(process.env.MONGOLOCAL, (error, db) =>{
        const database = db.db('pwatt');
        if (error) {
            console.log(`No estamos conectados a la Database`);
        }else{
            console.log(`Conexion correcta a la Database`);

            let ObjectId = mongodb.ObjectId;
            let id = req.params.id;

            console.log(ObjectId(id));
            
            const { titulo, autor, descripcion, nivel} = req.body;

            database.collection('tareas').findOne({_id: ObjectId(id)}, {$set: {titulo, autor, descripcion, nivel}} ,(error, result) => {
                error? console.log(error.message) :
                database.collection('tareas').replaceOne({_id: ObjectId(id)},{titulo, autor, descripcion, nivel, fecha: fechaData}, )
                //console.log(req.body)
                    res.redirect('/')
                })
        }
    });
    
}
 

