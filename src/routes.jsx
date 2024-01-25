import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  useLocation,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header/header.jsx";
import {
  Home,
  Login,
  Register,
  Catalog,
  Profile,
  NotFound,
  NotAuthenticated,
} from "./pages";

// For the routes that need the user to be logged in
function PrivateRoutes() {
  const auth = true;
  const { pathname: from } = useLocation();

  return !auth ? (
    <Navigate to="/notAuthenticated" state={{ from }} />
  ) : (
    <Outlet />
  );
}

// For the routes that need the user to be of the type Master
function MasterRoutes() {
  const auth = false;
  const { pathname: from } = useLocation();

  return !auth ? <Navigate to="/login" state={{ from }} /> : <Outlet />;
}

// For the routes that need the user to be of the type Librarian
function LibrarianRoutes() {
  const auth = false;
  const { pathname: from } = useLocation();

  return !auth ? <Navigate to="/login" state={{ from }} /> : <Outlet />;
}

// For the routes that need footer
function HasHeaderRoutes() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/">
        <Route element={<HasHeaderRoutes />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Register />} />
          <Route element={<PrivateRoutes />}>
            <Route path="catalogo" element={<Catalog />} />
            <Route path="perfil" element={<Profile />} />
            <Route element={<MasterRoutes />}></Route>
            <Route element={<LibrarianRoutes />}></Route>
          </Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
        <Route path="notAuthenticated" element={<NotAuthenticated />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
