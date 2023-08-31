
import BussinessDashboard from "../layout/Bussiness/BusinessLayout";
import SellerDashboard from "../pages/SellerPages/SellerDashboard/SellerDashboard";
import SellerLayout from "../layout/Seller/SellerLayout";

import { getLocalUserInfo } from "../utils/helpers/setUserLocalInfo";
import SellerOrderPage from "../pages/SellerPages/Orders/SellerOrderPage";
import AdminOrders from "../pages/AdminPages/admin orders/AdminOrders";

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
        return <AdminOrders />;
    }
    return <BussinessDashboard />;
}

export default OrderController;
