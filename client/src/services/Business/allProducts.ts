import CustomInstance from "../../lib/axios";

export async function getALlProducts(){

    try {
        const result = await CustomInstance.get(`/public/product`);
        return result.data;

    } catch (error) {

        console.log(error);
        return [];
    }
}