import { useSelector } from 'react-redux';

import './styles.scss';

const Button = props => {
  const { isDisabled, color, onClick } = props;

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <button
      className="button"
      onClick={isAuthenticated ? onClick : null}
      disabled={isDisabled}
      // styles={color}
      //
    >
      {`${!isAuthenticated ? 'Login' : 'Logout'}`}
    </button>
  );
};

export default Button;
