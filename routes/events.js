const {Router} =require('express');
const {check} =require('express-validator');
const router = Router();
const {validarCampos}=require('../middlewares/validar-campos');
const {validarJWT}=require('../middlewares/validar-jwt');
const {getEventos, crearEvento,actualizarEventos, eliminarEventos} =require('../controllers/events');
const {isDate} = require ('../helpers/isDate');

//todas tienen que pasar por la validacion del JWT

router.use(validarJWT);

//Obtener eventos
router.get('/', getEventos)

//crear eventos
router.post('/',
[
    check('title','El titulo es Obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom(isDate),
    check('end','Fecha de fin es obligatoria').custom(isDate),
    validarCampos
],crearEvento);

//Actualizar eventos
router.put('/:id', actualizarEventos
);

//Obtener eventos
router.delete('/:id', eliminarEventos)

module.exports=router;