import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index element={<></>} />
          <Route path="*" element={<>error</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
