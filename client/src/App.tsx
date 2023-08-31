import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage";
import { AuthProvider } from "./context/AuthContext";
import RoleGuard from "./components/RoleGuard";
import BussinessDashboard from "./layout/Bussiness/BusinessLayout";
import DashboardController from "./page-controller/DashboardController";
import NotFound from "./components/404/NotFound";
import OrderController from "./page-controller/OrderController";
import SellerProducts from "./pages/SellerPages/products/SellerProducts";
import EditProduct from "./components/Edit-Product/EditProduct";
import SellerProductView from "./components/ProductViewModal/SellerProductView";
import BusinessMarketPlace from "./pages/BusinessPages/Marketplace/BusinessMarketPlace";


const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>

                    <Route path="/">
                        <Route index element={<Register />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                        <Route path="404" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                    <Route element={<RoleGuard allowedRoles={["supplier"]} />}>
                        <Route path="/edit" element={<EditProduct />} />
                        <Route path="/products" element={<SellerProducts />} />
                        <Route path="/report" element={<SellerProducts />} />
                        <Route path="/analytics" element={<SellerProducts />} />
                        <Route path="/view-product" element={<SellerProductView />} />
                    </Route>


                    <Route element={<RoleGuard allowedRoles={["business"]} />}>
                        {/* <Route path="/admin-list-students" element={<BussinessDashboard />}/> */}
                        <Route path="/marketplace" element={<BusinessMarketPlace />}/>
                    </Route>

                    <Route element={ <RoleGuard allowedRoles={["business", "admin", "supplier"]} />}>
                        <Route path="/dashboard" element={<DashboardController />}/>
                        
                    <Route path="/order" element={<OrderController />} />

                    </Route>

                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
