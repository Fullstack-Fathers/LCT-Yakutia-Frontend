import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Components/Authorization/Auth.jsx';
import { MainPage } from './pages/mainPage/mainPage.jsx';
import { MainWrapper } from './Components/main-wrapper/index.jsx';
import { PrivateRoute } from './Components/private-route/index.jsx';

 function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Auth />} />
          <Route
            path="main"
            element={
              <PrivateRoute
                element={<MainWrapper children={<MainPage />} />}
              />
            }
          />
          <Route path="dev">
            <Route
              path="main"
              element={<MainWrapper children={<MainPage />} />}
            />
          <Route path="login" element={<Auth />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;