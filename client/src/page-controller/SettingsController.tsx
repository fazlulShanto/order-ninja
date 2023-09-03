import { getLocalUserInfo } from "../utils/helpers/setUserLocalInfo";
import AdminDashboard from "../pages/AdminPages/admin dashboard/AdminDashboard";
import SettingComp from "../components/SettingsComp/SettingComp";

import React from "react";
import SellerLayout from "../layout/Seller/SellerLayout";
import BusinessLayout from "../layout/Bussiness/BusinessLayout";

export default function SettingsController() {
    const { role } = getLocalUserInfo();

    if (role == "supplier") {
        return (
            <SellerLayout>
                <SettingComp />
            </SellerLayout>
        );
    }
    if (role == "admin") {
        return <AdminDashboard />;
    }
    return (
        <BusinessLayout>
            <SettingComp />
        </BusinessLayout>
    );
}
