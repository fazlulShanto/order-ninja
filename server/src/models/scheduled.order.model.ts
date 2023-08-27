import mongoose from "mongoose";

export interface IScheduledOrder {
    id: string,
    user_id: string,
    store_id: string,
    product_id: string,
    price: number,
    unit_size: number,
    type: string,
    address: string,
    status: "active" | "inactive",
    date : Date
}

const scheduledOrderSchema = new mongoose.Schema<IScheduledOrder>({
    id: {
        type: String,
        required: true,
        unique: true
    },

    user_id: String,
    store_id: String,
    product_id: String,
    price: Number,
    unit_size: Number,
    type: String,
    address: String,
    status: String,
    date : Date
}, {
    timestamps: true
});

const schOrderModel = mongoose.model('scheduled_order',scheduledOrderSchema);

export async function getScheduledOrderByStoreId(storeId: string): Promise<IScheduledOrder[]> {
    try {

        const scheduleOrderList = await schOrderModel.find({store_id : storeId}).exec();
        return scheduleOrderList;

    } catch (error) {
        throw error;
    }
}

export async function getScheduledOrderByUserId(userId: string): Promise<IScheduledOrder[]> {
    try {
        const scheduleOrderList = await schOrderModel.find({user_id : userId}).exec();
        return scheduleOrderList;
    } catch (error) {
        throw error;
    }
}