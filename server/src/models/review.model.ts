import mongoose from "mongoose"

export interface IReview{
    id : string,
    user_id : string,
    text : string,
    product_id : string,
    rating : number
}

const reviewSchema = new mongoose.Schema({
    id : String,
    user_id : {
        type : String,
        required : true
    },
    text : {
        type : String,
        required : true
    },
    product_id : String,
    rating : Number
},{
    timestamps:true
});

const reviewModel = mongoose.model('review',reviewSchema);

export async function getReviewByProduct(productId : string){
    try {
        const reviewList = await reviewModel.find({product_id : productId}).exec();
        return reviewList;
    } catch (error) {
        throw error;
    }
}

export async function getUserProductReview(userId,productId){
    try {

        const reviewList = await reviewModel.
                find({user_id : userId , product_id :productId })
                .exec();
                
        return reviewList ;
        
    } catch (error) {
        throw error;
    }
}