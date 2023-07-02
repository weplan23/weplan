import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import Editor from './pages/Editor';
import BlogPage from './pages/BlogPage';
import ViewPage from './pages/ViewPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: <DashboardAppPage /> },
        { path: 'itinerary/create', element: <AddPage /> },
        { path: 'itinerary/list', element: <ProductsPage /> },
        { path: 'edit', element: <EditPage />},
        { path: 'edit/0', element: <Editor />},
        { path: 'blog', element: <BlogPage />},
        { path: 'view', element: <ViewPage />},
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
