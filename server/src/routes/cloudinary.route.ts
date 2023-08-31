import { Router, Request, Response } from "express";
const Multer = require("multer");
import { v2 as cloudinary ,UploadApiResponse} from "cloudinary";

const cloudinaryRouter = Router();

cloudinary.config({
    cloud_name: "dro9twjqg",
    api_key: "963211669132111",
    api_secret: "c-4wz6WRWCC6QrBWhVrm_EOMXn0",
});
const storage = new Multer.memoryStorage();
const upload = Multer({
    storage,
});

async function handleUpload(file: any) {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return res;
}

cloudinaryRouter.post(
    "/imgup",
    upload.array("file"),
    async (req: any, res: Response) => {
        try {
            // console.log('🎇🎈',req.files);

            const result : string[] = [];
            for (let i = 0; i < req.files.length; i++) {
                const b64 = Buffer.from(req.files[i].buffer).toString("base64");
                let dataURI = "data:" + req.files[i].mimetype + ";base64," + b64;
                try {
                    const cldRes = await handleUpload(dataURI);
                    result.push(cldRes.url);
                    // console.log(cldRes.url);
                } catch (error) {
                    //
                }
            }
            console.log(`final result : `,result);
           return res.json(result);
        } catch (error) {
            console.log(error);
            res.send({
                message: (error as Error).message,
            });
        }
    }
);

export default cloudinaryRouter;
