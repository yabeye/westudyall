import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Help, Home, LoadInit, NotFound, User } from './pages';
import { Account, Login, Signup } from './pages/Auth';

import './App.css';

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
            <Route path="/help" exact element={<Help />} />
            <Route path="/notfound" exact element={<NotFound />} />
            <Route path="/account" exact element={<Account />} />
            <Route path="/account/signup" exact element={<Signup />} />
            <Route path="/account/login" exact element={<Login />} />
            <Route path="/users" exact element={<User />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
