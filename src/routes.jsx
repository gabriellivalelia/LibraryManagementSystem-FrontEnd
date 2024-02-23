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
  EditProfile,
  AddUser,
  AddBook,
  UserList,
  Notifications,
  NotFound,
  NotAuthenticated,
  AcessDenied,
} from "./pages";

// For the routes that need the user to be logged in
function PrivateRoutes() {
  const auth = true;
  const { pathname: from } = useLocation();

  return !auth ? (
    <Navigate to="/naoAutenticado" state={{ from }} />
  ) : (
    <Outlet />
  );
}

// For the routes that need the user to be of the type Master or Librarian
function AdmRoutes() {
  const auth = true;
  const { pathname: from } = useLocation();

  return !auth ? <Navigate to="/acessoNegado" state={{ from }} /> : <Outlet />;
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
            <Route path="editarPerfil" element={<EditProfile />} />
            <Route path="notificacoes" element={<Notifications />} />
            <Route element={<AdmRoutes />}>
              <Route path="cadastrarUsuario" element={<AddUser />} />
              <Route path="adicionarLivro" element={<AddBook />} />
              <Route path="listaDeUsuarios" element={<UserList />} />
            </Route>
          </Route>
          <Route path="naoAutenticado" element={<NotAuthenticated />} />
          <Route path="acessoNegado" element={<AcessDenied />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
