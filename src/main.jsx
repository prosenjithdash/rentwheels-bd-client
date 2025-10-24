import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './providers/AuthProvider';
const queryClient = new QueryClient()

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </StrictMode>
   </QueryClientProvider>
)

