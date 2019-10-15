import React from 'react';
import T from 'prop-types';
import clsx from 'clsx';
import styles from './FriendList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        const classesForActivity = clsx(
          styles.status,
          friend.isOnline && styles.isOnline,
        );

        return (
          <li key={friend.id} className={styles.item}>
            <span className={classesForActivity} />
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User"
              width="48"
            />
            <p className={styles.name}> {friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendsList;
