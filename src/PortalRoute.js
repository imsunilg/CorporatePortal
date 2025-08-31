import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import GoToTopButton from "./component/common/GoToTopButton";
import { NavBarSkeleton, PageSkeleton, FooterSkeleton, HomeSkeleton, LoginSkeleton, AboutSkeleton, ContactSkeleton, DigitalSkeleton } from "./component/common/Shimmer";
const PortalNavBar = lazy(() => import("./component/common/PortalNavBar"));
const PortalFooter = lazy(() => import("./component/common/PortalFooter"));
const Login = lazy(() => import("./component/Portal/Login"));
const AboutUs = lazy(() => import("./component/Portal/AboutUs"));
const ContactUs = lazy(() => import("./component/Portal/ContactUs"));
const Home = lazy(() => import("./component/Portal/Home"));
const DigitalSolution = lazy(() => import("./component/Portal/DigitalSolution"));

export const PortalLayout = () => (
  <div>
    <Suspense fallback={<NavBarSkeleton />}>
      <PortalNavBar onStrengthsClick={() => console.log("Strengths")}
        onHealthClick={() => console.log("Health")}
        onMarineClick={() => console.log("Marine")}
        onPropertyClick={() => console.log("Property")}
        onLiabilityClick={() => console.log("Liability")}/>
    </Suspense>

    <main>
      <Suspense fallback={<PageSkeleton />}>
        <Outlet /> 
      </Suspense>
    </main>

    <Suspense fallback={<FooterSkeleton />}>
      <PortalFooter />
    </Suspense>
    {/* Go to Top button */}
    <GoToTopButton />
  </div>
);

export const portalRoutes = {
  element: <PortalLayout />,
  children: [
    { path: "/", element: <Suspense fallback={<HomeSkeleton />}><Home /></Suspense> },
    { path: "/home", element: <Suspense fallback={<HomeSkeleton />}><Home /></Suspense> },
    { path: "/login", element: <Suspense fallback={<LoginSkeleton />}><Login /></Suspense> },
    { path: "/about-us", element: <Suspense fallback={<AboutSkeleton />}><AboutUs /></Suspense> },
    { path: "/contact-us", element: <Suspense fallback={<ContactSkeleton />}><ContactUs /></Suspense> },
    { path: "/Portal/ContactUs", element: <Suspense fallback={<ContactSkeleton />}><ContactUs /></Suspense> },
    { path: "/digital", element: <Suspense fallback={<DigitalSkeleton />}><DigitalSolution /></Suspense> },
    { path: "/Portal/digital_solutions", element: <Suspense fallback={<DigitalSkeleton />}><DigitalSolution /></Suspense> },
    { path: "/Portal/CPTLogin", element: <Suspense fallback={<LoginSkeleton />}><Login /></Suspense> },
    { path: "/CPTLogin", element: <Suspense fallback={<LoginSkeleton />}><Login /></Suspense> },
  ],
};
