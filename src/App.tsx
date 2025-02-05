import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSpring, animated } from '@react-spring/web';
import Layout from './components/Layout';

import Counter from './pages/Counter';
import Form from './pages/Form';
import Editor from './pages/Editor';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  const count = useSelector((state: any) => state.counter.count);
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  const springProps = useSpring({
    backgroundColor: `rgb(180, ${Math.min(count * 2, 255)}, ${Math.min(count * 5, 255)})`,
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.div style={{ ...springProps, height: '100vh' }}>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path='/login' element={isAuthenticated ? <Navigate to="/" /> : <Layout><Login /></Layout>} />

          {/* Protected Routes */}
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Layout><Dashboard /></Layout>} />
              <Route path="/counter" element={<Layout><Counter /></Layout>} />
              <Route path="/form" element={<Layout><Form /></Layout>} />
              <Route path="/editor" element={<Layout><Editor /></Layout>} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Router>
    </animated.div>
  );
}

export default App;
