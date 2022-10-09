import { Router } from 'express';
import { homeTareas,
        dameTareas,
        addTareas,
        eliminarTarea,
        tareasId,
        actualizar,
        //getTareaByID,
        //editarTarea,

}from'../controllers/tareasControler.js'

export const router = Router();

router.get('/', homeTareas);
router.get('/tareas', dameTareas);
router.post('/addTareas', addTareas);
router.get('/eliminar/:id', eliminarTarea);
//router.delete('/eliminar/:id', eliminarTarea);
router.get('/tareas/:id', tareasId);
//router.get('/editarTarea/:id', getTareaByID);
router.post('/actualizar/:id', actualizar);
//router.put('/actualizar/:id', actualizar);
//router.get('/editarTarea', editarTarea);


