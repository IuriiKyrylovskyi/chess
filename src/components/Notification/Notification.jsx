import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notificationActions } from '../../store/notification';

import './styles.scss';

const Notification = () => {
  const notification = useSelector(state => state.notification.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(notificationActions.hideNotification());
    }, 3000);
  }, [notification, dispatch]);

  if (!notification) {
    return null;
  }

  const { status, title, message } = notification;
  const notificationClasses = `notification ${status === 'ERROR' ? 'red' : 'green'}`;

  console.log(notification.status);

  return (
    <div className={notificationClasses}>
      <div className="notification__title">{title}</div>
      <div className="notification__message">{message}</div>
    </div>
  );
};

export default Notification;
