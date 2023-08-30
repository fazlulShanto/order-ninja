import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage";
import { AuthProvider } from "./context/AuthContext";
import RoleGuard from "./components/RoleGuard";
import BussinessDashboard from "./layout/Bussiness/BussinessDashboard";
import DashboardController from "./page-controller/DashboardController";
import NotFound from "./components/404/NotFound";
import OrderController from "./page-controller/OrderController";
import SellerProducts from "./pages/SellerPages/products/SellerProducts";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<LandingPage />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                        <Route path="404" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                    <Route element={<RoleGuard allowedRoles={["bussiness"]} />}>
                        <Route
                            path="/admin-list-students"
                            element={<BussinessDashboard />}
                        />
                    </Route>

                    <Route element={<RoleGuard allowedRoles={["supplier"]} />}>
                        <Route
                            path="/dashboard"
                            element={<DashboardController />}
                        />
                        <Route path="/order" element={<OrderController />} />
                        <Route path="/products" element={<SellerProducts />} />
                        <Route path="/report" element={<SellerProducts />} />
                        <Route path="/analytics" element={<SellerProducts />} />
                    </Route>

                    <Route
                        element={
                            <RoleGuard
                                allowedRoles={["business", "admin", "supplier"]}
                            />
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
