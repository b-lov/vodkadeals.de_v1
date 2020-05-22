// vim: ft=javascriptreact
import React from 'react';
import './EpisodeItem.css';
import sound from './schumann.mp3';

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
      <div className="upper">
        <div className="date">{modDate}</div>
        <div className="duration">{duration}</div>
        <div className="title">{title.toUpperCase()}</div>
      </div>
      <div className="lower">
        <audio controls src={sound} type="audio/mp3"></audio>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default EpisodeItem;
