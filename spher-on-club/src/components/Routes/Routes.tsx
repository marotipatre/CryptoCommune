import { BrowserRouter, Route, Routes as R } from "react-router-dom";
import { useSelector } from "react-redux";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { useAppSelector } from "../../redux/hooks";
import { ROUTES } from "./route-path";
import { HomePage } from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import { selectCustomerAddress } from "../../redux/slices/user";

const Routes = () => {
  const address = useSelector((state: any) => state.user.address);
  console.log("sss", address);
  return (
    <BrowserRouter>
      <R>
        {address == "" ? (
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        ) : (
          <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
        )}
        <Route path={ROUTES.NOT_FOUND} element={<LoginPage />} />
      </R>
    </BrowserRouter>
  );
};

export default Routes;
