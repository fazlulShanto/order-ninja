import AdminDashboard from "../layout/Admin/AdminDashboard";
import BussinessDashboard from "../layout/Bussiness/BussinessDashboard";
import SellerDashboard from "../pages/SellerPages/SellerDashboard/SellerDashboard";
import SellerLayout from "../layout/Seller/SellerLayout";

import { getLocalUserInfo } from "../utils/helpers/setUserLocalInfo";


function DashboardController() {

    const  {role} = getLocalUserInfo();
    
    if(role=='supplier'){
        return <SellerDashboard
        />;
    }
    if(role=='admin'){
        return <AdminDashboard />
    }
    return <BussinessDashboard />
}

export default DashboardController