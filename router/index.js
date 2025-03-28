import express from "express"
import registerUser from "../controller/user/registerUser.js";
import login from "../controller/user/login.js";
import refreshToken from "../controller/user/refreshToken.js";
import logout from "../controller/user/logout.js";
import getProfile from "../controller/user/getProfile.js";
import auth from "../middleware/auth.js"
import updateUserDetails from "../controller/user/updateUserDetail.js";
import uploadMediaController from "../controller/upload/uploadMediaController.js"
import upload from "../middleware/multer.js";
import searchUser from "../controller/user/searchUser.js";
import GetProduct from "../controller/product/GetProduct.js";
import AddProduct from "../controller/product/AddProduct.js";
import EditProduct from "../controller/product/EditProduct.js";
import DeleteProduct from "../controller/product/DeleteProduct.js";
import permisstion from "../middleware/permistion.js";
import GetProductWithId from "../controller/product/GetProductWithId.js";


const router = express.Router();

// create user api
router.post('/register', registerUser);
router.post('/login', login);
router.post('/refreshToken', refreshToken);
router.post('/logout', auth, logout);
router.get('/profile', auth, getProfile);
router.patch('/user/update', auth, updateUserDetails);
router.post('/findUser', auth, searchUser);
router.post('/upload', upload.single('file'), uploadMediaController);
router.get('/products', GetProduct);
router.post('/product', GetProductWithId);
router.post('/product', permisstion, AddProduct);
router.patch('/product', permisstion, EditProduct);
router.delete('/product', permisstion, DeleteProduct);

export default router;