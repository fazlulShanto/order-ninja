
export interface IConfig {
    PORT : string,
    MONGO_URI:string,
    JWT_KEY: string
};
export const MONGO_LOCAL = {
    url1:"mongodb://localhost:27017/order-ninja",
    url2:"mongodb://0.0.0.0:27017/order-ninja",
    url3:"mongodb://127.0.0.0:27017/order-ninja"
};

export const config:IConfig = {
  PORT: process.env.PORT!,
  MONGO_URI: process.env.MONGO_URI!,
  JWT_KEY: process.env.JWT_SECRET!,

//   CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
//   CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
//   CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};