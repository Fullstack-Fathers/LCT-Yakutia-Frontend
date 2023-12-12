import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './components/authorization/index.jsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index element={<Auth />} />
          <Route path="signin" element={<Auth isSignIn={true} />} />
          <Route path="signup" element={<Auth isSignIn={false} />} />

          <Route path="*" element={<>error</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
