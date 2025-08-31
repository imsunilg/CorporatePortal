import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import GoToTopButton from "./component/common/GoToTopButton";
import { NavBarSkeleton, PageSkeleton, FooterSkeleton, DashboardSkeleton } from "./component/common/Shimmer";
const UserNavBar = lazy(() => import("./component/common/UserNavBar"));
const UserFooter = lazy(() => import("./component/common/UserFooter"));
const Dashboard = lazy(() => import("./component/User/Dashboard"));

export const UserLayout = () => (
  <div>
    <Suspense fallback={<NavBarSkeleton />}>
      <UserNavBar />
    </Suspense>

    <main>
      <Suspense fallback={<PageSkeleton />}>
        <Outlet />
      </Suspense>
    </main>

    <Suspense fallback={<FooterSkeleton />}>
      <UserFooter />
    </Suspense>
    {/* Go to Top button */}
    <GoToTopButton />
  </div>
);

export const userRoutes = {
  element: <UserLayout />,
  children: [
    { path: "/dashboard", element: <Suspense fallback={<DashboardSkeleton />}><Dashboard /></Suspense> },
    // add more after login pages here...
  ],
};
