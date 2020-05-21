// vim: ft=javascriptreact
import React from 'react';

const EpisodeItem = ({
  data: {
    pubDate,
    itunes: { duration, subtitle },
    title,
  },
}) => {
  // console.log(pubDate);
  // const { duration, subtitle } = itunes;
  const modDate = new Date(pubDate).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div>
      {modDate.toString()} <br />
      {duration} <br />
      {title} <br />
      {subtitle}
    </div>
  );
};

export default EpisodeItem;
