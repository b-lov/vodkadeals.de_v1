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
  return (
    <div>
      {pubDate} <br />
      {duration} <br />
      {title} <br />
      {subtitle}
    </div>
  );
};

export default EpisodeItem;
