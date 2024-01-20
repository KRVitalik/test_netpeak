import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { MainPage } from './pages/MainPage';
import YourParameters from './YourParameters/YourParameters';
import Behaviors from './Behaviors/Behaviors';
import PhysicalExercise from './PhysicalExercise/PhysicalExercise';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="measure/" element={<YourParameters />} />
        <Route path="destructive-behaviors/" element={<Behaviors />} />
        <Route path="physical-exercise/" element={<PhysicalExercise />} />
      </Route>
    </Routes>
  );
};
