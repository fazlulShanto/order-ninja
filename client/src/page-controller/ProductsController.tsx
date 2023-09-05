
import BussinessDashboard from "../layout/Bussiness/BusinessLayout";
import SellerDashboard from "../pages/SellerPages/SellerDashboard/SellerDashboard";
import SellerLayout from "../layout/Seller/SellerLayout";


import { getLocalUserInfo } from "../utils/helpers/setUserLocalInfo";

import AdminOrders from "../pages/AdminPages/admin orders/AdminOrders";
import BusinessOrders from "../pages/BusinessPages/BusinessOrders/BusinessOrders";
import BusinessLayout from "../layout/Bussiness/BusinessLayout";
import SellerProducts from "../pages/SellerPages/products/SellerProducts";
import AdminProducts from "../pages/AdminPages/admin products/AdminProducts";
import AdminLayout from "../layout/Admin/AdminLayout";
import NotFound from "../components/404/NotFound";


function ProductsController() {
    const { role } = getLocalUserInfo();

    if (role == "supplier") {
        return (
                <SellerProducts />
        );
    }
    if (role == "admin") {
        return <AdminLayout>
          <AdminProducts />
        </AdminLayout>;
    }
    return (
        <BusinessLayout>
            <NotFound />
        </BusinessLayout>
    );
}

export default ProductsController;
