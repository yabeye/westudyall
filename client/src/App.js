import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Signup } from './pages/Auth';

import './App.css';
import { Home, LoadInit, NotFound, User } from './pages';

function App() {
  const [isPageLoading, setIsPageLoading] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        {/* Pages that don't depend by routes */}
        {isPageLoading && <LoadInit />}
        {/* routes */}
        <div>
          <Routes>
            <Route path="/notfound" exact element={<NotFound />} />
            <Route path="/users/signup" exact element={<Signup />} />
            <Route path="/users/login" exact element={<Login />} />
            <Route path="/users" exact element={<User />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
