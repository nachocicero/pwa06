import { Router } from 'express';
import { homeTareas,
        dameTareas,
        addTareas,
        eliminarTarea,
        tareasId,
        actualizar,
        getTareaByID,
        editarTarea

}from'../controllers/tareasControler.js'

export const router = Router();

router.get('/', homeTareas);
router.get('/tareas', dameTareas);
router.post('/addTareas', addTareas);
router.delete('/eliminar/:id', eliminarTarea);
router.get('/tareas/:id', tareasId);
router.put('/editarTarea/:id', getTareaByID);
router.put('/actualizar/:id', actualizar);
router.get('/editarTarea', editarTarea);


