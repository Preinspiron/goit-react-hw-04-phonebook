// import PT from 'prop-types';

export default function Friends({ friends }) {
  const friendRender = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className="item">
        <span className={isOnline ? 'online' : 'offline'}></span>
        <img
          className="avatar"
          src={avatar}
          alt="User avatar"
          width="48"
          height="48"
        />
        <p className="name">{name}</p>
      </li>
    );
  });
  return (
    <section className="friends">
      <ul className="friend-list">{friendRender}</ul>
    </section>
  );
}
