import PT from 'prop-types';

import { Profiled, Stats } from './Profiles.styled';
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Profiled>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p name="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </Stats>
    </Profiled>
  );
}
Profile.propTypes = {
  username: PT.string.isRequired,
  tag: PT.string.isRequired,
  location: PT.string.isRequired,
  avatar: PT.string.isRequired,
  stats: PT.any.isRequired,
};
