import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Components/Authorization/Auth.jsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
        <Route index element={<Auth />} />
          <Route path="*" element={<>error</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
