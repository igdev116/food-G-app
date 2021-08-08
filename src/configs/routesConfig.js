import { lazy } from "react";
import { Redirect } from "react-router-dom";

import { PATH_NAMES } from "constants/routes";

// modules
const Home = lazy(() => import("../features/Home"));
const Login = lazy(() => import("../features/Login"));
const Shop = lazy(() => import("../features/Shop"));
const Detail = lazy(() => import("../features/Detail"));
const Checkout = lazy(() => import("../features/Checkout"));
const NotFound = lazy(() => import("../components/NotFound"));

const routesConfig = [
  {
    exact: true,
    path: PATH_NAMES.ROOT,
    component: () => <Redirect to={PATH_NAMES.HOME} />,
  },
  {
    exact: true,
    path: PATH_NAMES.HOME,
    component: Home,
  },

  {
    exact: true,
    path: PATH_NAMES.SHOP,
    component: Shop,
  },
  {
    exact: true,
    path: PATH_NAMES.DETAIL,
    component: Detail,
  },
  {
    exact: true,
    path: PATH_NAMES.CHECKOUT,
    component: Checkout,
  },
  {
    exact: true,
    path: PATH_NAMES.LOGIN,
    component: Login,
  },
  {
    component: NotFound,
  },
];

export default routesConfig;
