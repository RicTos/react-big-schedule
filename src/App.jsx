import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Result } from 'antd';
import 'react-big-schedule/dist/css/style.css';

import Landing from './components/Landing';
import Fallback from './components/Fallback';

const Home = lazy(() => import('./pages/Home'));
const Basic = lazy(() => import('./pages/Basic'));
const ReadOnly = lazy(() => import('./pages/Read-Only'));
const AddMore = lazy(() => import('./pages/Add-More'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<Fallback />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: 'basic',
          element: (
            <Suspense fallback={<Fallback />}>
              <Basic />
            </Suspense>
          ),
        },
        {
          path: 'read-only',
          element: (
            <Suspense fallback={<Fallback />}>
              <ReadOnly />
            </Suspense>
          ),
        },
        {
          path: 'add-more',
          element: (
            <Suspense fallback={<Fallback />}>
              <AddMore />
            </Suspense>
          ),
        },
        {
          path: '*',
          element: <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist or is under construction." />,
        },
      ],
    },
    {
      path: '*',
      element: <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
