import Profiles from './Prifiles/Profile';
import Statistics from './Statistics/Statistics';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import Friends from './Friends/Freinds';

// console.log(users);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexWrap: 'nowrap',
        flexDirection: 'column',
      }}
    >
      <Profiles
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload statss" stats={data} />
      {/* <Statistics stats={data} /> */}
      <Friends friends={friends} />
    </div>
  );
};
