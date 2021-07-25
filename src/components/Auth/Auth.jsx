import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import Button from '../Button/Button';

import './styles.scss';

const Auth = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    !isAuthenticated ? dispatch(authActions.login()) : dispatch(authActions.logout());
  };

  return (
    <main className="auth">
      <section className="form-section">
        <form onSubmit={loginHandler}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <Button
            isDisabled={false}
            // color={false}
          />
        </form>
      </section>
    </main>
  );
};

export default Auth;
