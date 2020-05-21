// vim: ft=javascriptreact
import React from 'react';
import './EpisodeItem.css';

const EpisodeItem = ({
  data: {
    pubDate,
    itunes: { duration, subtitle },
    title,
  },
}) => {
  const modDate = new Date(pubDate).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // const modDuration = new Date(duration);
  // console.log(modDuration);

  return (
    <div className="episode-item">
      <div className="details">
        <div className="date">{modDate.toString()}</div>
        <div className="duration">{duration}</div>
      </div>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};

export default EpisodeItem;
