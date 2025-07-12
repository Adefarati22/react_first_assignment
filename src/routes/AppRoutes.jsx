import { createBrowserRouter, RouterProvider } from "react-router";
import { useAuth } from "../contextStore";
import { lazy, Suspense } from "react";
import SuspenseUi from "../component/SuspenseUi";
import SuspenseUi2 from "../component/SuspenseUi2";
const RootLayout = lazy(() => import("../layout/RootLayout"));
const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/register/Register"));
const Homei = lazy(() => import("../pages/index/Homei"));
const NewTak = lazy(() => import("../pages/form/NewTak"));
const AllTask = lazy(() => import("../pages/task/AllTask"));

export default function AppRoutes() {
  const {isCheckingAuth} = useAuth();
  if(isCheckingAuth) {
    return <SuspenseUi/>;
  }
  const routes = [
     {
      path: `/all_task`,
      element: (
        <Suspense fallback={<SuspenseUi2/>}>
          {" "}
          <AllTask/>
        </Suspense>
      )
    },
    {
        element: (
          <Suspense fallback={<SuspenseUi/>}>
          <RootLayout/>
          </Suspense>
        ),
        children: [
            {
            index: true,
            element:(
              <Suspense fallback={<SuspenseUi/>}>
                {" "}
              <Home/></Suspense>
            )
        },
    ]
    },
    {
      path: `/login`,
      element: (
        <Suspense fallback={<SuspenseUi/>}> 
        {" "}
        <Login/>
        </Suspense>
      )
    },
    {
      path: `/register`,
      element: (
        <Suspense fallback={<SuspenseUi/>}>
          {" "}
          <Register/>
        </Suspense>
      )
    },
    {
      path: `/home`,
      element: (
        <Suspense fallback={<SuspenseUi/>}>
          {" "}
          <Homei/>
        </Suspense>
      )
    },
    {
      path: `/new_task`,
      element: (
        <Suspense fallback={<SuspenseUi/>}>
          {" "}
          <NewTak/>
        </Suspense>
      )
    },
   
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
