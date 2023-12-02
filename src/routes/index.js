import HeaderOnly from "../Component/Layout/Component/HeaderOnly/index.js";
import Login from "../Component/Page/LoginSignup/LoginSignup.js";
import NVDIA_STORE_MAIN from "../Component/Page/Main/NVDIA_STORE_MAIN.js";
import Policy from "../Component/Page/Policy/index.js";
import Products from "../Component/Page/Products/Products.js";
import Products_gtx_4080 from "../Component/Page/Products/Products_gtx_4080.js";
import Products_gtx_4090 from "../Component/Page/Products/Products_gtx_4090.js";
import Search from "../Component/Page/Search/index.js";
import Service from "../Component/Page/Service/Service.js";
import Shop from "../Component/Page/Shop/Shop.js";
const publicRoutes = [
  {
    path: "/",
    component: NVDIA_STORE_MAIN,

  },

  {
    path: "/Service",
    component: Service,
  },

  {
   path: "/Shop",
   component: Shop,
  },

  {
    path: "/Login",
    component: Login,
    layout:HeaderOnly
  },
  {
    path: "/Search",
    component: Search,
  },
  {
    path:"/Main",
    component: NVDIA_STORE_MAIN,
  },
  {
    path:"/Products",
    component: Products
  },
  {
    path:"/Products_gtx_4080",
    component: Products_gtx_4080
  },
  {
    path:"/Products_gtx_4090",
    component: Products_gtx_4090
  },
{
  path:"/Policy",
  component: Policy
}
];

const privateRoutes = {};

export { privateRoutes, publicRoutes };
