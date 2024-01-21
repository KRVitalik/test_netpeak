import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy } from 'react';

const Goal = lazy(() => import('./pages/Goal/Goal'));
const YourParameters = lazy(() =>
  import('./pages/YourParameters/YourParameters')
);
const PhysicalExercise = lazy(() =>
  import('./pages/PhysicalExercise/PhysicalExercise')
);
const Behaviors = lazy(() => import('./pages/Behaviors/Behaviors'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Goal />} />
        <Route path="measure/" element={<YourParameters />} />
        <Route path="destructive-behaviors/" element={<Behaviors />} />
        <Route path="physical-exercise/" element={<PhysicalExercise />} />
      </Route>
    </Routes>
  );
};
