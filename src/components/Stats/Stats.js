import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(obj => {
        return (
          <li key={obj.id} className={styles.item}>
            <span className={styles.label}> {obj.label}</span>
            <span className={styles.percentage}> {obj.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Stats.propTypes = {
  title: T.string.isRequired,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
