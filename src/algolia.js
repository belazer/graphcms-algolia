import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch/dom';
import Search from './search';

class Algolia extends Component {
  render() {
    return (
      <InstantSearch
        appId="YMB21X5BTP"
        apiKey="ec872657b0caa6392c88df2a04d920b6"
        indexName="Starships"
        resultsState={[]}
        createURL={searchState => console.log(searchState)}
      >
        <Search />
      </InstantSearch>
    );
  }
}

export default Algolia;
