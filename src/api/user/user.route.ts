import { Router } from 'express';
import { catchError } from '../../helpers/error.helper';
import Controller from './user.controller';
import UserService from './user.service';

const router: Router = Router();
const controller = new Controller(new UserService());

router.get('/', catchError(controller.findAll.bind(controller)));
router.post('/full-name', catchError(controller.getFullName.bind(controller)));

export default router;
