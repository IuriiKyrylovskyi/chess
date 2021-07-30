import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { fetchProjectsData } from './store/projects-actions';

import NavBar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Auth from './components/Auth/Auth';
import Notification from './components/Notification/Notification';

import './App.scss';

let isInitial = true; // not to send empty arr to back(errase all data)

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProjectsData());
  // }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
  }, []);

  return (
    <div className="app">
      {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
      ) : ( */}
      <Router>
        <div className="wrapper">
          <NavBar />
          {/* <p>{data}</p> */}
          {!isAuthenticated && <Auth />}
          <Hero />
          <Notification />
        </div>
      </Router>
      {/* )} */}
    </div>
  );
};

export default App;
