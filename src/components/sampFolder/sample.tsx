// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
// import React, { useEffect, useMemo, useState } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import LoadingOverlay from "./components/ui/loadingOverlay";
// import "./styles/base.css";

// import Header from "./layouts/header";

// import AppStyles from "./app.module.css";
// import SideMenu from "./components/measure/leftMenu/sideMenu";
// import ErrorOverlay from "./components/ui/errorOverlay";
// import TitleBarContainer from "./components/ui/titleBarContainer";
// import { OAuthUserEntity, UserEntity } from "./types/userInfoEntity";

// export declare type AppProps = {
//   loading: boolean;
//   error: string;
//   client: string;
//   userInfo: UserEntity | null | undefined;
//   isPopout: boolean;
//   projectList: string[] | undefined;
//   handleProjectSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   selectedProjectValue: string;
//   clientList: string[] | undefined;
//   handleClientSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   selectedClientValue: string;
//   title: string | undefined;
//   summary: string | undefined;
//   handleUserLogout: () => void;
//   userRoles: string[] | undefined;
//   hedisUiRoot: string;
//   authUserInfo: OAuthUserEntity | null | undefined;
//   fetchUserRoles: (user: OAuthUserEntity) => Promise<void>;
// };

// export const getVisibilityByLocation = (locationPathname: string) => {
//   switch (locationPathname) {
//     case "/":
//     case "/details/:id":
//       return true;
//     default:
//       return false;
//   }
// };

// export default function App(props: AppProps) {
//   // FEATURE: use if needed
//   const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean | undefined>(
//     false
//   );
//   const [isSideMenuVisible, setIsSideMenuVisible] = useState(true);
//   const [isMainHeaderVisible, setIsMainHeaderVisible] = useState(false);
//   const [userProfile, setUserProfile] = useState<string | undefined>();
//   const location = useLocation();

//   const visibilityByLocation = useMemo(
//     () => getVisibilityByLocation(location.pathname),
//     [location.pathname]
//   );

//   useEffect(() => {
//     const shouldHideSideMenu =
//       visibilityByLocation ||
//       props.isPopout ||
//       !(userProfile === "Admin" || userProfile === "Manager");
//     setIsSideMenuVisible(!shouldHideSideMenu);
//   }, [
//     props.hedisUiRoot,
//     location.pathname,
//     props.isPopout,
//     userProfile,
//     visibilityByLocation,
//   ]);

//   useEffect(() => {
//     if (visibilityByLocation) {
//       setIsMainHeaderVisible(true);
//     } else {
//       setIsMainHeaderVisible(false);
//     }
//   }, [
//     props.hedisUiRoot,
//     location.pathname,
//     props.isPopout,
//     visibilityByLocation,
//   ]);

//   useEffect(() => {
//     if (props.authUserInfo?.given_name) {
//       props.fetchUserRoles(props.authUserInfo);
//     }
//   }, [props.authUserInfo]);

//   useEffect(() => {
//     if (props?.userRoles) {
//       const roles = props.userRoles.map((role) => role.toLowerCase());

//       if (roles.some((role) => role.includes("admin"))) {
//         setUserProfile("Admin");
//       } else if (roles.some((role) => role.includes("manager"))) {
//         setUserProfile("Manager");
//       } else if (roles.some((role) => role.includes("overreader"))) {
//         setUserProfile("Overreader");
//       } else if (roles.some((role) => role.includes("abstractor"))) {
//         setUserProfile("Abstractor");
//       } else {
//         if (props.userRoles.length > 0) {
//           setUserProfile(props.userRoles[0]);
//         } else {
//           setUserProfile("Guest");
//         }
//       }
//     } else {
//       setUserProfile("Guest");
//     }
//   }, [props?.userRoles]);

//   if (props.error) {
//     console.log(`ERROR:  ${JSON.stringify(props.error)}`);
//   }

//   return (
//     <div className={AppStyles["outer-main-container"]}>
//       {isSideMenuVisible && (
//         <div>
//           <SideMenu isSideMenuOpen={setIsSideMenuOpen}></SideMenu>
//         </div>
//       )}
//       <div className={AppStyles["right-body-container"]}>
//         {!props.isPopout && (
//           <Header
//             // isMenuExpanded={isMenuExpanded}
//             // updateMenuState={updateMenuState}
//             userInfo={props.userInfo}
//             isMainHeaderVisible={isMainHeaderVisible}
//             userLogoutEvent={props.handleUserLogout}
//             authUserInfo={props.authUserInfo}
//             userRoles={props.userRoles}
//             userProfile={userProfile}
//           >
//             {props.title && (
//               <TitleBarContainer title={props.title} summary={props.summary} />
//             )}
//           </Header>
//         )}
//         <div>
//           <LoadingOverlay show={props.loading} />
//           <ErrorOverlay
//             show={props.error !== ""}
//             title={"ERROR"}
//             error={props.error !== "" ? JSON.parse(props.error) : ""}
//           />
//           <div>
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Sample() {
    return ( <></> );
}

export default Sample;
