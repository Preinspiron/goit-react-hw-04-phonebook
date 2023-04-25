import PT from 'prop-types';
import sass from './Friends.module.scss';
import clsx from 'clsx';
export default function Friends({ friends }) {
  const friendRender = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className={sass.item}>
        <span className={clsx(isOnline ? 'online' : 'offline')}></span>
        <img
          className="avatar"
          src={avatar}
          alt="User avatar"
          width="48"
          height="48"
        />
        <p className={sass.name}>{name}</p>
      </li>
    );
  });
  return (
    <section className="friends">
      <ul className="friend-list">{friendRender}</ul>
    </section>
  );
}

Friends.propTypes = {
  friends: PT.arrayOf(
    PT.shape({
      avatar: PT.string.isRequired,
      name: PT.string.isRequired,
      isOnline: PT.bool.isRequired,
      id: PT.number.isRequired,
    })
  ),
};
