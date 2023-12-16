import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './components/authorization/index.tsx';
import { MainWrapper } from './components/main-wrapper/index.tsx';
import { PrivateRoute } from './components/private-route/index.tsx';
import { MainPage } from './pages/mainPage/mainPage.tsx';
import TestPage from './pages/testPage/testPage.tsx';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'}>
            <Route index element={<MainWrapper children={<MainPage />} />} />
            <Route path="signin" element={<Auth isSignIn={true} />} />
            <Route path="signup" element={<Auth isSignIn={false} />} />
            <Route
              path="main"
              element={
                <PrivateRoute
                  element={<MainWrapper children={<MainPage />} />}
                />
              }
            />
            <Route path="*" element={<>error</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
