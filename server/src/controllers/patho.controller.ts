import { Request, Response } from "express";
import axios from "axios";
import expressApp from "../../express.app";
import { getPathaoToken } from "../middlewares/pathaoValidate";


const PathaoAxios = axios.create({
    baseURL: 'https://courier-api-sandbox.pathao.com',
    headers: {
        'accept': "application/json",
        'content-type': "application/json"
    }
});


export async function getPathaoCity(req: Request, res: Response) {
    try {
        const { data: { data } } = await PathaoAxios.get(`/aladdin/api/v1/countries/1/city-list`);
        res.json(data);
        // return data;
    } catch (error) {
        throw error;
    }
}

export async function getPathaoZone(req: Request, res: Response) {
    try {
        const { cityId } = req.params;
        const { data: { data } } = await PathaoAxios.get(`/aladdin/api/v1/cities/${cityId}/zone-list`);
        res.json(data);
        // return data;
    } catch (error) {
        throw error;
    }
}
export async function getPathaoArea(req: Request, res: Response) {
    try {
        const { zoneId } = req.params;
        const { data: { data } } = await PathaoAxios.get(`/aladdin/api/v1/zones/${zoneId}/area-list`);
        res.json(data);
        // return data;
    } catch (error) {
        throw error;
    }
}
export async function placePathaoOrder(req: Request, res: Response) {
    
    const defaults = { 
        store_id: "55972",
        delivery_type : "48",
        item_type: "2",
        special_instruction: "this is very special instruction",
        sender_phone:'01811111111',
    };
    
   const {
        merchant_order_id,
        sender_name,
        recipient_name,
        recipient_phone,
        recipient_address,
        recipient_city,
        recipient_zone,
        recipient_area,
        item_quantity,
        item_weight,
        amount_to_collect,
        item_description
    } = req.body;

    const finalOrder = ({...defaults,...req.body});

    console.log(finalOrder);

    return res.json(finalOrder);
}
export async function getPathoCost(req: Request, res: Response) {
    
    try {
        const defaults = { 
            store_id: "55972",
            item_type: "2",
            delivery_type : "48",
        };
       const  {
            item_weight,
            recipient_city,
            recipient_zone
        } = req.body;
        const finalOrder = ({...defaults,item_weight,recipient_city,recipient_zone});
        const  tokenResult = await getPathaoToken();
        // console.log(finalOrder);
        // console.log('got token data',Object.keys(tokenResult));
    
        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://courier-api-sandbox.pathao.com/aladdin/api/v1/merchant/price-plan',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${tokenResult['access_token']}`
        },
        data : finalOrder
        };
        const  {data : result} = await axios.request(config);
        // console.log(result);
        return res.json({...finalOrder,pathao_cost :result.data.price , data  :result.data});
        
    } catch (error) {

        // console.log((error as Error).message);
        return res.status(500).send(`couldn't calculated courier cost!`);
        
    }
}