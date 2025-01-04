import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';

const router = Router();

//-- ROTAS USER --
router.post('/users', isAuthenticated, new CreateUserController().handle)
// -- ROTA DE LOGIN
router.post('/session', isAuthenticated, new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// -- ROTAS CATEGORIA
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

//   -- Rotas produtos
router.post('/product', isAuthenticated, new CreateProductController().handle)



export { router }; 
