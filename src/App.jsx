import React from 'react';
import {
  HashRouter,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import CreateContainer from './components/CreateContainer';
import Home from './pages/Home';
import Login from './pages/Login';
import MainContainer from './components/MainContainer';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            {/* <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} /> */}
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
export default WrappedApp;
