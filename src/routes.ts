import {Router} from 'express';

// imagem
import multer from "multer";

import {CreateUserController} from './controllers/user/CreateUserControllers';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import {ListCategoryController} from './controllers/category/ListCategoryController';
import {CreateOrderController  } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AdditemController } from './controllers/order/AdditemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';


import { CreateProductController } from "./controllers/product/CreateProductController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

// imagem
import uploadConfig from "./config/multer";

const router = Router();

// caminho da imagem
const upload = multer(uploadConfig.upload("tmp"));

// ROTAS USER
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)


// Rota  scatgory
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// Rotas de produtos

// router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.post('/product', isAuthenticated, new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// rotas order
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.post('/order/add', isAuthenticated, new AdditemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrderController().handle)
router.get('/orders/detail', isAuthenticated, new DetailOrderController().handle)
router.put('/orders/finish', isAuthenticated, new FinishOrderController().handle)


export { router }; 