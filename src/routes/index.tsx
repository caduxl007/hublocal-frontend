import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from '../pages';

import { ProtectedRoute } from './ProtectedRoute';

export function AppRoutes() {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Suspense>
  );
}
