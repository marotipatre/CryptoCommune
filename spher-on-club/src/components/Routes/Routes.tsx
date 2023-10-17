import { BrowserRouter, Route, Routes as R } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { ROUTES } from "./route-path";
import { HomePage } from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import CreateClubPage from "../../pages/CreateClubPage";
import AllClubPage from "../../pages/AllClubPage";
import MyClubPage from "../../pages/MyClubPage";
import DashboardPage from "../../pages/DashboardPage";

const Routes = () => {
  const address = useSelector((state: any) => state.user.address);
  console.log("sss", address);
  const { isConnected } = useAccount();

  return (
    <BrowserRouter>
      {isConnected && <HomePage />}
      <R>
        {!isConnected ? (
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        ) : (
          <>
            <Route path={ROUTES.DASHBOARD_PAGE} element={<DashboardPage />} />
            <Route
              path={ROUTES.CREATE_CLUB_PAGE}
              element={<CreateClubPage />}
            />
            <Route path={ROUTES.ALL_CLUB_PAGE} element={<AllClubPage />} />
            <Route path={ROUTES.My_CLUB_PAGE} element={<MyClubPage />} />
          </>
        )}
        <Route path={ROUTES.NOT_FOUND} element={<LoginPage />} />
      </R>
    </BrowserRouter>
  );
};

export default Routes;
