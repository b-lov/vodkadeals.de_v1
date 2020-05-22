// vim: ft=javascriptreact
import React from 'react';
import './App.css';
import EpisodeItem from './components/EpisodeItem';
import Parser from 'rss-parser';
let parser = new Parser();

export default class App extends React.Component {
  state = {
    feed: [],
    loading: true,
  };

  async componentDidMount() {
    const feed = await parser.parseURL('https://pinecast.com/feed/vodkadeals');
    this.setState({ feed, loading: false });
  }

  render() {
    const { feed, loading } = this.state;
    // !loading && console.log(feed.items);
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="episode-container">
            <EpisodeItem data={feed.items[27]} />
          </div>
        </div>
      );
    }
  }
}
