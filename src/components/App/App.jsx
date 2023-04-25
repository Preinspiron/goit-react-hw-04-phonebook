import Profiles from '../Prifiles/Profile';
import Statistics from '../Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';
import transactions from '../transactions.json';
import friends from '../friends.json';
import Friends from '../Friends/Freinds';
import { Container } from './App.styled.js';
import { Transactions } from '../Transactions/Transactions';

// console.log(users);

export const App = () => {
  return (
    <Container>
      <Profiles
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <Friends friends={friends} />
      <Transactions items={transactions} />
    </Container>
  );
};
