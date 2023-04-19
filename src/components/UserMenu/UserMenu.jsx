import { useDispatch, useSelector } from 'react-redux';
import { getUserName, getUserEmail } from 'redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);
  return (
    <div>
      <span>{`Hello, ${name} (${email})`} </span>
      <button type="button" onClick={() => dispatch(logout())}>
        LogOut
      </button>
    </div>
  );
};
