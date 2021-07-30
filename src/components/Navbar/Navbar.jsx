import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import './style.scss';

import { GrClose } from 'react-icons/gr';
import { CgSearch } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';
import Button from '../Button/Button';

const Navbar = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="navbar">
      <span className="navbar__logo">
        <img src="./images/logo.jpeg" alt="utlandia" />
      </span>
      <div className="navbar__logo">UTLANDIA</div>
      <div className="navbar__select">
        building 1 <IoMdArrowDropdown />
      </div>
      <div className="navbar__select">
        section 1 <IoMdArrowDropdown />
      </div>
      <div className="navbar__search">
        search <CgSearch />
      </div>
      <div className="navbar__close">
        <GrClose />
      </div>
      <Button
        onClick={logoutHandler}
        disabled={false}
        // color={}
      />
    </div>
  );
};

export default Navbar;
