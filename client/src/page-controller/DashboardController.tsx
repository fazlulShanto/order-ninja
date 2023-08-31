
import BussinessDashboard from "../layout/Bussiness/BusinessLayout";
import SellerDashboard from "../pages/SellerPages/SellerDashboard/SellerDashboard";

import { getLocalUserInfo } from "../utils/helpers/setUserLocalInfo";
import AdminDashboard from "../pages/AdminPages/admin dashboard/AdminDashboard";


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