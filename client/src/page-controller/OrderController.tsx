
import BussinessDashboard from "../layout/Bussiness/BusinessLayout";
import SellerDashboard from "../pages/SellerPages/SellerDashboard/SellerDashboard";
import SellerLayout from "../layout/Seller/SellerLayout";


import { getLocalUserInfo } from "../utils/helpers/setUserLocalInfo";
import SellerOrderPage from "../pages/SellerPages/Orders/SellerOrderPage";
import AdminOrders from "../pages/AdminPages/admin orders/AdminOrders";
import BusinessOrders from "../pages/BusinessPages/BusinessOrders/BusinessOrders";
import BusinessLayout from "../layout/Bussiness/BusinessLayout";

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
    return (
        <BusinessLayout>
            <BusinessOrders />
        </BusinessLayout>
    );
}

export default OrderController;
