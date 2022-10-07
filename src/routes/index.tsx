import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  CreateCompany,
  SignIn,
  SignUp,
  Dashboard,
  PlacePage,
  CreatePlace,
  CompanyPage,
  Tickets,
} from '../pages';

import { ProtectedRoute } from './ProtectedRoute';

export function AppRoutes() {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SignIn />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute>
              <SignUp />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticate>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-company"
          element={
            <ProtectedRoute isAuthenticate>
              <CreateCompany />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tickets"
          element={
            <ProtectedRoute isAuthenticate>
              <Tickets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/company/:idCompany"
          element={
            <ProtectedRoute isAuthenticate>
              <CompanyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/place/:idPlace"
          element={
            <ProtectedRoute isAuthenticate>
              <PlacePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-place/:idCompany"
          element={
            <ProtectedRoute isAuthenticate>
              <CreatePlace />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="*"
          element={
            <main sx="">
              <p >There's nothing here!</p>
            </main>
          }
        /> */}
      </Routes>
    </Suspense>
  );
}
