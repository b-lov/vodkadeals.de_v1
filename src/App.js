// vim: ft=javascriptreact
import React from 'react';
import './App.css';
import Parser from 'rss-parser';
let parser = new Parser();

export default class App extends React.Component {
  state = { feed: [] };

  async componentDidMount() {
    const feed = await parser.parseURL('https://pinecast.com/feed/vodkadeals');
    this.setState({ feed });
  }

  render() {
    const { feed } = this.state;
    console.log(feed);
    return (
      <div>{feed.description}</div>
      // {/* <div> */}
      // {/*     <h1>RSS Feed</h1> */}
      // {/*     this.state.feed.map((item, i) => ( */}
      // {/*         <div key={i}> */}
      // {/*             <h1>item.title</h1> */}
      // {/*             <a href="">item.link</a> */}
      // {/*         </div> */}
      // {/*     )) */}
      // {/* </div> */}
    );
  }
}
