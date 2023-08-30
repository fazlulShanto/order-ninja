import AdminDashboard from "../layout/Admin/AdminDashboard";
import BussinessDashboard from "../layout/Bussiness/BussinessDashboard";
import SellerDashboard from "../pages/SellerPages/SellerDashboard/SellerDashboard";
import SellerLayout from "../layout/Seller/SellerLayout";

import { getLocalUserInfo } from "../utils/helpers/setUserLocalInfo";
import SellerOrderPage from "../pages/SellerPages/Orders/SellerOrderPage";

function OrderController() {
    const { role } = getLocalUserInfo();

    if (role == "supplier") {
        return (
            <SellerLayout>
                <SellerOrderPage />
            </SellerLayout>
        );
    }
    if (role == "admin") {
        return <AdminDashboard />;
    }
    return <BussinessDashboard />;
}

export default OrderController;
