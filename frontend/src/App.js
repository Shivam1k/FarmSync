// // importing from library
// import { Route, Routes, } from "react-router-dom";
// import React, { createContext, useEffect } from "react";
// import { message } from "antd";

// // importing form styling[sass]  
// import "./Asset/Style/Style.scss"

// // importing pages 
// import HomePage from "./pages/HomePage";
// import ProductsPage from "./pages/ProductsPage";
// import ProductPage from "./pages/ProductPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import LogoutPage from "./pages/LogoutPage";
// import ProfilePage from "./pages/ProfilePage";
// import NurseryProfilePage from "./pages/NurseryProfilePage";
// //TODO: ADD NURSERY PUBLIC PROFILE PAGE HERE
// import CreateNurseryPage from "./pages/CreateNurseryPage";
// import EditNurseryPage from "./pages/EditNurseryPage";
// import AddNewPlants from "./pages/AddNewPlants";
// import EditPlantsPage from "./pages/EditPlantsPage";
// import AddressPage from "./pages/AddressPage";
// import AddNewAddressPage from "./pages/AddNewAddressPage";
// import EditAddressPage from "./pages/EditAddressPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import CartPage from "./pages/CartPage";
// import CheckoutShippingPage from "./pages/CheckoutShippingPage";
// import CheckoutConfirmPage from "./pages/CheckoutConfirmPage";
// import CheckoutPaymentPage from "./pages/CheckoutPaymentPage";

// import PageNotFound from "./pages/Error404Page";

// import Navigation from "./features/common/Navigation";
// import Footer from "./features/common/Footer";
// import ScrollToTop from "./features/common/ScrollToTop";
// import { useDispatch, useSelector } from "react-redux";
// import { userAuthCheckAsync } from "./features/auth/authSlice";
// import { userProfileAsync } from "./features/user/userSlice";
// import { nurseryProfileAsync } from "./features/nursery/nurserySlice";
// import { cartDataFetchAsync } from "./features/cart/cartSlice";
// import NurseryPublicStorePage from "./pages/NurseryPublicStorePage";
// import OrderHistoryPages from "./pages/OrderHistoryPages";
// import SuccessPage from "./pages/SuccessPage";
// import OrderDetailsPages from "./pages/OrderDetailsPages";
// import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import UserVerificationEmailSent from "./pages/UserVerificationEmailSent";
// import UserVerificationConfirmAccount from "./pages/UserVerificationConfirmAccount";
// import ResetYourPasswordPage from "./pages/ResetYourPasswordPage";
// import PasswordResetEmailSentPage from "./pages/PasswordResetEmailSentPage";


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CropCalendar from './features/calendar/CropCalendar';
// import Navigation from './components/Navigation';






// export const UserContext = createContext(); // TODO: REMOVE AFTER REFACTOR ALL THE CODE.


// const Routing = () => {
//   return (
//     <Routes>
//       <Route exact path="/" element={<HomePage />} />
//       <Route exact path="/home" element={<HomePage />} />
//       <Route exact path="/products" element={<ProductsPage />} />
//       <Route exact path="/product/:id" element={<ProductPage />} />
//       <Route exact path="/login" element={<LoginPage />} />
//       <Route exact path="/signup" element={<SignupPage />} />
//       <Route exact path="/logout" element={<LogoutPage />} />
//       <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
//       <Route exact path="/profile" element={<ProfilePage />} />
//       <Route exact path="/account/verificationEmail" element={<UserVerificationEmailSent />} />
//       <Route exact path="/account/passwordResetEmail" element={<PasswordResetEmailSentPage />} />
//       <Route exact path="/account/verificationConfirmation/:token" element={<UserVerificationConfirmAccount />} />
//       <Route exact path="/account/ResetYourPassword/:token" element={<ResetYourPasswordPage />} />
//       <Route exact path="/nursery" element={<NurseryProfilePage />} />
//       <Route exact path="/nursery/store/view/:id" element={<NurseryPublicStorePage />} /> {/* //TODO: NEED TO IMPLEMENTS THIS */}
//       <Route exact path="/nursery/create" element={<CreateNurseryPage />} />
//       <Route exact path="/nursery/update" element={<EditNurseryPage />} />
//       <Route exact path="/nursery/plant/new" element={<AddNewPlants />} />
//       <Route exact path="/nursery/plant/update/:id" element={<EditPlantsPage />} /> {/* //TODO: NEED TO IMPLEMENTS THIS */}
//       <Route exact path="/address" element={<AddressPage />} />
//       <Route exact path="/address/new" element={<AddNewAddressPage />} />
//       <Route exact path="/address/update/:id" element={<EditAddressPage />} />
//       <Route exact path="/contact-us" element={<ContactUsPage />} />

//       <Route path="/cart" element={<CartPage />} />

//       <Route path="/checkout/shipping" element={<CheckoutShippingPage />} />
//       <Route path="/checkout/confirm" element={<CheckoutConfirmPage />} />
//       <Route path="/checkout/payment" element={<CheckoutPaymentPage />} />

//       <Route exact path="/success" element={<SuccessPage />} /> 

//       <Route path="/orders/history" element={<OrderHistoryPages />} />
//       <Route path="/orders/details/:id" element={<OrderDetailsPages />} />

//       <Route path="*" element={<PageNotFound />} />
//       <Navigation />
//             <Switch>
//                 {/* Other routes */}
//                 <Route path="/calendar" component={CropCalendar} />
//             </Switch>
//     </Routes>
//   );
// }

// function App() {
//   const user = useSelector(state => state.user.user);
//   const userAuthCheck = useSelector(state => state.auth.userAuthCheck);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(userAuthCheckAsync());
//   }, [dispatch]);

//   useEffect(() => {
//     if (userAuthCheck) {
//       dispatch(userProfileAsync());
//     }
//   }, [dispatch, userAuthCheck]);

//   useEffect(() => {
//     if (user && user.role.includes("seller")) {
//       dispatch(nurseryProfileAsync());
//     }
//   }, [dispatch, user]);

//   useEffect(() => {
//     if (user) {
//       dispatch(cartDataFetchAsync());
//     }
//   }, [dispatch, user])

//   // global configuration antd to alert the message to users
//   message.config({
//     top: 75,
//     maxCount: 3,
//     CSSProperties: {
//       backgroundColor: "#000",
//       color: "#fff"
//     }
//   });

//   return (
//     <>
//       <Navigation />
//       <ScrollToTop />
//       <div style={{ marginTop: "70px" }}>
//         <Routing />
//       </div>
//       <Footer />
//     </>

//   );
// }

// export default App;





// Importing from library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useEffect } from "react";
import { message } from "antd";

// Importing styling [sass]
import "./Asset/Style/Style.scss";

// Importing pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LogoutPage from "./pages/LogoutPage";
import ProfilePage from "./pages/ProfilePage";
import NurseryProfilePage from "./pages/NurseryProfilePage";
import CreateNurseryPage from "./pages/CreateNurseryPage";
import EditNurseryPage from "./pages/EditNurseryPage";
import AddNewPlants from "./pages/AddNewPlants";
import EditPlantsPage from "./pages/EditPlantsPage";
import AddressPage from "./pages/AddressPage";
import AddNewAddressPage from "./pages/AddNewAddressPage";
import EditAddressPage from "./pages/EditAddressPage";
import ContactUsPage from "./pages/ContactUsPage";
import CartPage from "./pages/CartPage";
import CheckoutShippingPage from "./pages/CheckoutShippingPage";
import CheckoutConfirmPage from "./pages/CheckoutConfirmPage";
import CheckoutPaymentPage from "./pages/CheckoutPaymentPage";
import PageNotFound from "./pages/Error404Page";
import NurseryPublicStorePage from "./pages/NurseryPublicStorePage";
import OrderHistoryPages from "./pages/OrderHistoryPages";
import SuccessPage from "./pages/SuccessPage";
import OrderDetailsPages from "./pages/OrderDetailsPages";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UserVerificationEmailSent from "./pages/UserVerificationEmailSent";
import UserVerificationConfirmAccount from "./pages/UserVerificationConfirmAccount";
import ResetYourPasswordPage from "./pages/ResetYourPasswordPage";
import PasswordResetEmailSentPage from "./pages/PasswordResetEmailSentPage";
import CalendarPage from "./pages/CalendarPage";
import GamePage from './pages/GamePage'; // Corrected path
import Team from './pages/TeamPage'; // Corrected path
import FinancialTracker from "./pages/FinancialTracker";



// Importing features
import Navigation from "./features/common/Navigation";
import Footer from "./features/common/Footer";
import ScrollToTop from "./features/common/ScrollToTop";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { userAuthCheckAsync } from "./features/auth/authSlice";
import { userProfileAsync } from "./features/user/userSlice";
import { nurseryProfileAsync } from "./features/nursery/nurserySlice";
import { cartDataFetchAsync } from "./features/cart/cartSlice";

// Context (temporary)
export const UserContext = createContext(); // TODO: REMOVE AFTER REFACTOR ALL THE CODE.

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/account/verificationEmail" element={<UserVerificationEmailSent />} />
      <Route path="/account/passwordResetEmail" element={<PasswordResetEmailSentPage />} />
      <Route path="/account/verificationConfirmation/:token" element={<UserVerificationConfirmAccount />} />
      <Route path="/account/ResetYourPassword/:token" element={<ResetYourPasswordPage />} />
      <Route path="/nursery" element={<NurseryProfilePage />} />
      <Route path="/nursery/store/view/:id" element={<NurseryPublicStorePage />} />
      <Route path="/nursery/create" element={<CreateNurseryPage />} />
      <Route path="/nursery/update" element={<EditNurseryPage />} />
      <Route path="/nursery/plant/new" element={<AddNewPlants />} />
      <Route path="/nursery/plant/update/:id" element={<EditPlantsPage />} />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/address/new" element={<AddNewAddressPage />} />
      <Route path="/address/update/:id" element={<EditAddressPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout/shipping" element={<CheckoutShippingPage />} />
      <Route path="/checkout/confirm" element={<CheckoutConfirmPage />} />
      <Route path="/checkout/payment" element={<CheckoutPaymentPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/orders/history" element={<OrderHistoryPages />} />
      <Route path="/orders/details/:id" element={<OrderDetailsPages />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/financial-tracker" element={<FinancialTracker />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  const user = useSelector((state) => state.user.user);
  const userAuthCheck = useSelector((state) => state.auth.userAuthCheck);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAuthCheckAsync());
  }, [dispatch]);

  useEffect(() => {
    if (userAuthCheck) {
      dispatch(userProfileAsync());
    }
  }, [dispatch, userAuthCheck]);

  useEffect(() => {
    if (user && user.role.includes("seller")) {
      dispatch(nurseryProfileAsync());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      dispatch(cartDataFetchAsync());
    }
  }, [dispatch, user]);

  // Global configuration for antd message alerts
  message.config({
    top: 75,
    maxCount: 3,
    duration: 3,
    getContainer: () => document.body,
  });

  return (
    <>
       <Navigation />
    <ScrollToTop />
       <div style={{ marginTop: "70px" }}>
         <Routing />
       </div>
       <Footer />
     </>
  );
}

export default App;


// import React, { createContext, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";  // Only import once
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { message } from "antd";

// // Importing styling [sass]
// import "./Asset/Style/Style.scss";

// // Importing pages
// import HomePage from "./pages/HomePage";
// import ProductsPage from "./pages/ProductsPage";
// import ProductPage from "./pages/ProductPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import LogoutPage from "./pages/LogoutPage";
// import ProfilePage from "./pages/ProfilePage";
// import NurseryProfilePage from "./pages/NurseryProfilePage";
// import CreateNurseryPage from "./pages/CreateNurseryPage";
// import EditNurseryPage from "./pages/EditNurseryPage";
// import AddNewPlants from "./pages/AddNewPlants";
// import EditPlantsPage from "./pages/EditPlantsPage";
// import AddressPage from "./pages/AddressPage";
// import AddNewAddressPage from "./pages/AddNewAddressPage";
// import EditAddressPage from "./pages/EditAddressPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import CartPage from "./pages/CartPage";
// import CheckoutShippingPage from "./pages/CheckoutShippingPage";
// import CheckoutConfirmPage from "./pages/CheckoutConfirmPage";
// import CheckoutPaymentPage from "./pages/CheckoutPaymentPage";
// import PageNotFound from "./pages/Error404Page";
// import NurseryPublicStorePage from "./pages/NurseryPublicStorePage";
// import OrderHistoryPages from "./pages/OrderHistoryPages";
// import SuccessPage from "./pages/SuccessPage";
// import OrderDetailsPages from "./pages/OrderDetailsPages";
// import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import UserVerificationEmailSent from "./pages/UserVerificationEmailSent";
// import UserVerificationConfirmAccount from "./pages/UserVerificationConfirmAccount";
// import ResetYourPasswordPage from "./pages/ResetYourPasswordPage";
// import PasswordResetEmailSentPage from "./pages/PasswordResetEmailSentPage";
// import CalendarPage from "./pages/CalendarPage";

// // Redux imports
// import { userAuthCheckAsync } from "./features/auth/authSlice";
// import { userProfileAsync } from "./features/user/userSlice";
// import { nurseryProfileAsync } from "./features/nursery/nurserySlice";
// import { cartDataFetchAsync } from "./features/cart/cartSlice";

// // Importing components
// import Navigation from "./features/common/Navigation";
// import Footer from "./features/common/Footer";
// import ScrollToTop from "./features/common/ScrollToTop";

// // Context (temporary)
// export const UserContext = createContext();

// // ProtectedRoute component
// const ProtectedRoute = ({ element, role, ...rest }) => {
//   const user = useSelector((state) => state.user.user);
//   const isAuthenticated = user && user.token;

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (role && user.role !== role) {
//     return <Navigate to="/" />;
//   }

//   return <Route {...rest} element={element} />;
// };

// // Routing component
// const Routing = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/home" element={<HomePage />} />
//       <Route path="/products" element={<ProductsPage />} />
//       <Route path="/product/:id" element={<ProductPage />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signup" element={<SignupPage />} />
//       <Route path="/logout" element={<LogoutPage />} />
//       <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//       <Route path="/account/verificationEmail" element={<UserVerificationEmailSent />} />
//       <Route path="/account/passwordResetEmail" element={<PasswordResetEmailSentPage />} />
//       <Route path="/account/verificationConfirmation/:token" element={<UserVerificationConfirmAccount />} />
//       <Route path="/account/ResetYourPassword/:token" element={<ResetYourPasswordPage />} />
//       {/* Protected Routes */}
//       <Route
//         path="/profile"
//         element={<ProtectedRoute element={<ProfilePage />} />}
//       />
//       <Route
//         path="/cart"
//         element={<ProtectedRoute element={<CartPage />} />}
//       />
//       <Route
//         path="/nursery"
//         element={<ProtectedRoute element={<NurseryProfilePage />} role="seller" />}
//       />
//       <Route
//         path="/orders/history"
//         element={<ProtectedRoute element={<OrderHistoryPages />} />}
//       />
//       <Route path="*" element={<PageNotFound />} />
//     </Routes>
//   );
// };

// // Main App component
// function App() {
//   const user = useSelector((state) => state.user.user);
//   const userAuthCheck = useSelector((state) => state.auth.userAuthCheck);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(userAuthCheckAsync());
//   }, [dispatch]);

//   useEffect(() => {
//     if (userAuthCheck) {
//       dispatch(userProfileAsync());
//     }
//   }, [dispatch, userAuthCheck]);

//   useEffect(() => {
//     if (user && user.role.includes("seller")) {
//       dispatch(nurseryProfileAsync());
//     }
//   }, [dispatch, user]);

//   useEffect(() => {
//     if (user) {
//       dispatch(cartDataFetchAsync());
//     }
//   }, [dispatch, user]);

//   message.config({
//     top: 75,
//     maxCount: 3,
//     duration: 3,
//     getContainer: () => document.body,
//   });

//   return (
//     <>
//       <Navigation />
//       <ScrollToTop />
//       <div style={{ marginTop: "70px" }}>
//         <Routing />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { createContext, useEffect } from "react";
// import { message } from "antd";
// import Navigation from "./features/common/Navigation"; // Import navigation correctly

// // ... other imports

// function App() {
//   const user = useSelector((state) => state.user.user);
//   const userAuthCheck = useSelector((state) => state.auth.userAuthCheck);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(userAuthCheckAsync());
//   }, [dispatch]);

//   useEffect(() => {
//     if (userAuthCheck) {
//       dispatch(userProfileAsync());
//     }
//   }, [dispatch, userAuthCheck]);

//   useEffect(() => {
//     if (user && user.role.includes("seller")) {
//       dispatch(nurseryProfileAsync());
//     }
//   }, [dispatch, user]);

//   useEffect(() => {
//     if (user) {
//       dispatch(cartDataFetchAsync());
//     }
//   }, [dispatch, user]);

//   // Global configuration for antd message alerts
//   message.config({
//     top: 75,
//     maxCount: 3,
//     duration: 3,
//     getContainer: () => document.body,
//   });

//   return (
//     <Router>
//       <Navigation />
//       <ScrollToTop />
//       <div style={{ marginTop: "70px" }}>
//         <Routing />
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;






// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { createContext, useEffect } from "react";
// import { message } from "antd";
// import { useDispatch, useSelector } from "react-redux"; // <-- Added import

// // Importing styling [sass]
// import "./Asset/Style/Style.scss";

// // Importing pages
// import HomePage from "./pages/HomePage";
// import ProductsPage from "./pages/ProductsPage";
// import ProductPage from "./pages/ProductPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import LogoutPage from "./pages/LogoutPage";
// import ProfilePage from "./pages/ProfilePage";
// import NurseryProfilePage from "./pages/NurseryProfilePage";
// import CreateNurseryPage from "./pages/CreateNurseryPage";
// import EditNurseryPage from "./pages/EditNurseryPage";
// import AddNewPlants from "./pages/AddNewPlants";
// import EditPlantsPage from "./pages/EditPlantsPage";
// import AddressPage from "./pages/AddressPage";
// import AddNewAddressPage from "./pages/AddNewAddressPage";
// import EditAddressPage from "./pages/EditAddressPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import CartPage from "./pages/CartPage";
// import CheckoutShippingPage from "./pages/CheckoutShippingPage";
// import CheckoutConfirmPage from "./pages/CheckoutConfirmPage";
// import CheckoutPaymentPage from "./pages/CheckoutPaymentPage";
// import PageNotFound from "./pages/Error404Page";
// import NurseryPublicStorePage from "./pages/NurseryPublicStorePage";
// import OrderHistoryPages from "./pages/OrderHistoryPages";
// import SuccessPage from "./pages/SuccessPage";
// import OrderDetailsPages from "./pages/OrderDetailsPages";
// import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import UserVerificationEmailSent from "./pages/UserVerificationEmailSent";
// import UserVerificationConfirmAccount from "./pages/UserVerificationConfirmAccount";
// import ResetYourPasswordPage from "./pages/ResetYourPasswordPage";
// import PasswordResetEmailSentPage from "./pages/PasswordResetEmailSentPage";
// import CalendarPage from "./pages/CalendarPage";

// // Importing features
// import Navigation from "./features/common/Navigation";
// import Footer from "./features/common/Footer";  // <-- Added import
// import ScrollToTop from "./features/common/ScrollToTop";  // <-- Added import

// // Redux
// import { userAuthCheckAsync } from "./features/auth/authSlice";  // <-- Added import
// import { userProfileAsync } from "./features/user/userSlice";  // <-- Added import
// import { nurseryProfileAsync } from "./features/nursery/nurserySlice";  // <-- Added import
// import { cartDataFetchAsync } from "./features/cart/cartSlice";  // <-- Added import

// // Context (temporary)
// export const UserContext = createContext(); // TODO: REMOVE AFTER REFACTOR ALL THE CODE.

// const Routing = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/home" element={<HomePage />} />
//       <Route path="/products" element={<ProductsPage />} />
//       <Route path="/product/:id" element={<ProductPage />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signup" element={<SignupPage />} />
//       <Route path="/logout" element={<LogoutPage />} />
//       <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//       <Route path="/profile" element={<ProfilePage />} />
//       <Route path="/account/verificationEmail" element={<UserVerificationEmailSent />} />
//       <Route path="/account/passwordResetEmail" element={<PasswordResetEmailSentPage />} />
//       <Route path="/account/verificationConfirmation/:token" element={<UserVerificationConfirmAccount />} />
//       <Route path="/account/ResetYourPassword/:token" element={<ResetYourPasswordPage />} />
//       <Route path="/nursery" element={<NurseryProfilePage />} />
//       <Route path="/nursery/store/view/:id" element={<NurseryPublicStorePage />} />
//       <Route path="/nursery/create" element={<CreateNurseryPage />} />
//       <Route path="/nursery/update" element={<EditNurseryPage />} />
//       <Route path="/nursery/plant/new" element={<AddNewPlants />} />
//       <Route path="/nursery/plant/update/:id" element={<EditPlantsPage />} />
//       <Route path="/address" element={<AddressPage />} />
//       <Route path="/address/new" element={<AddNewAddressPage />} />
//       <Route path="/address/update/:id" element={<EditAddressPage />} />
//       <Route path="/contact-us" element={<ContactUsPage />} />
//       <Route path="/cart" element={<CartPage />} />
//       <Route path="/checkout/shipping" element={<CheckoutShippingPage />} />
//       <Route path="/checkout/confirm" element={<CheckoutConfirmPage />} />
//       <Route path="/checkout/payment" element={<CheckoutPaymentPage />} />
//       <Route path="/success" element={<SuccessPage />} />
//       <Route path="/orders/history" element={<OrderHistoryPages />} />
//       <Route path="/orders/details/:id" element={<OrderDetailsPages />} />
//       <Route path="/calendar" element={<CalendarPage />} />

//       <Route path="*" element={<PageNotFound />} />
//     </Routes>
//   );
// };

// function App() {
//   const user = useSelector((state) => state.user.user);
//   const userAuthCheck = useSelector((state) => state.auth.userAuthCheck);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(userAuthCheckAsync());
//   }, [dispatch]);

//   useEffect(() => {
//     if (userAuthCheck) {
//       dispatch(userProfileAsync());
//     }
//   }, [dispatch, userAuthCheck]);

//   useEffect(() => {
//     if (user && user.role.includes("seller")) {
//       dispatch(nurseryProfileAsync());
//     }
//   }, [dispatch, user]);

//   useEffect(() => {
//     if (user) {
//       dispatch(cartDataFetchAsync());
//     }
//   }, [dispatch, user]);

//   // Global configuration for antd message alerts
//   message.config({
//     top: 75,
//     maxCount: 3,
//     duration: 3,
//     getContainer: () => document.body,
//   });

//   return (
//     <>
//       <Navigation />
//       <ScrollToTop />
//       <div style={{ marginTop: "70px" }}>
//         <Routing />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;
