import React from 'react';
import Profile from '../Profile';
import Stats from '../Stats';
import FriendsList from '../FriendList';
import TransactionHistory from '../TransactionHistory';
import user from '../../userInfo.json';
import stats from '../../stats.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendsList friends={friends} />
    <TransactionHistory items={transactions} />,
  </>
);

export default App;
