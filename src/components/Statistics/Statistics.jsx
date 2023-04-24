// import PT from 'prop-types';

export default function Statistics({ title, stats }) {
  console.log(stats);
  const dataRender = stats.map(({ id, label, percentage }) => {
    return (
      <li key={id} className="item">
        <span className="label">{label}</span>
        <span className="percentage"> {percentage}%</span>
      </li>
    );
  });
  console.log(dataRender);
  return (
    <section className="statistics">
      <h2 className="title">{title || 'Upload stats'}</h2>

      <ul className="stat-list">{dataRender}</ul>
    </section>
  );
}
