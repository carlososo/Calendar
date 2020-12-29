/* 
Rutas de Usuario /Auth
host + /api/auth
*/

const {Router} =require('express')
const {check} =require('express-validator')
const router = Router();
const {validarCampos} =require('../middlewares/validar-campos')

const {crearUsuario, loginUsuario,revalidarToken} =require('../controllers/auth')

router.post('/new',
[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','introduce un email correcto').isEmail(),
    check('password','contraseña no valida, debe de ser 6 caracteres').isLength({min:6}),
    validarCampos
],
crearUsuario 
);
router.post('/',
[
    check('email','introduce un email correcto').isEmail(),
    check('password','contraseña no valida, debe de tener almenos 6 caracteres').isLength({min:6}),
    validarCampos
], 
loginUsuario
);
router.get('/renew', revalidarToken);


module.exports= router;