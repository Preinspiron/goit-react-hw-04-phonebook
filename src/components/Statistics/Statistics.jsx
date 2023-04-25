// import PT from 'prop-types';
import { LiRender, UlRender } from './Statistics.styled';

// import saas from './Statistics.module.scss';
// console.log(scss);
export default function Statistics({ title, stats }) {
  console.log(stats);
  const dataRender = stats.map(({ id, label, percentage }) => {
    console.log(label);

    return (
      <LiRender key={id} label={label.slice(1)}>
        <span className="label">{label}</span>
        <span className="percentage"> {percentage}%</span>
      </LiRender>
    );
  });
  return (
    <section className="Statistics">
      <h2 className="title">{title || 'Upload statssss'}</h2>

      <UlRender>{dataRender}</UlRender>
    </section>
  );
}
