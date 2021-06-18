import { Router } from 'express';

import * as userController from '../controllers/users';
import * as todoController from '../controllers/todos';
import { findUser, userValidator } from '../validators/userValidator';
import authenticate from '../middlewares/authenticate';
import retriveActiveUser from "../controllers/userRetrive"
import sendActiveUser from '../controllers/sendActiveUser';
import pushController from '../controllers/pushController';
const router = Router();

const check = (req, res, next) => {
  console.log(req.body, req.query)
  next()
}

router.get('/', check, userController.fetchAll);
router.get('/users/self', retriveActiveUser, sendActiveUser)
router.get('/users/todo', check, retriveActiveUser, todoController.fetchAll)
router.post('/users/todo', check, retriveActiveUser, pushController)

// router.get('/:id', userController.fetchById);
router.post('/login', check, userController.fetchByEmail, authenticate);

// router.post('/', userValidator, userController.create);

router.put('/:id', findUser, userValidator, userController.update);

router.delete('/:id', findUser, userController.deleteUser);

export default router;
