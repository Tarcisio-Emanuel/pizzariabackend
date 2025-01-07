import { Request, Response, request } from "express";
import { CreateProductServer } from "../../services/product/CreateProductServer";
// import { UploadedFile } from "express-fileupload";
// import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET,
// })

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;
        const createProductServer = new CreateProductServer();

        if (!req.file || Object.keys(req.file).length === 0) {
            throw new Error("error upload file image!!!!!")
        } else {
const {originalname, filename: banner} = req.file;
            // const file: UploadedFile = req.files['file'];

        //     const resultFile: UploadApiResponse = await new Promise((resolve, reject) => {
        //         cloudinary.uploader.upload_stream({}, function (error, result) {
        //             if (error) {
        //                 reject(error);
        //                 return;
                    // }
        //             resolve(result)
        //         }).end(file.data)
            // })

            const product = await createProductServer.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            return res.json(product);
        }
    }
}
export { CreateProductController }