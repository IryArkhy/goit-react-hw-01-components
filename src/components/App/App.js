import React from 'react';
import Profile from '../Profile';
import Stats from '../Stats';
import FriendsList from '../FriendList';
import TransactionHistory from '../TransactionHistory';
import user from '../data/userInfo.json';
import stats from '../data/stats.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendsList friends={friends} />
    <TransactionHistory items={transactions} />,
  </>
);

export default App;
