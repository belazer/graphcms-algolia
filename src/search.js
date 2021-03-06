import React from 'react';
import { List, Divider, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// First, we need to add the Hits component to our import
import {
  Hits,
  SearchBox,
  Highlight,
  PoweredBy,
  Pagination,
  Configure,
} from 'react-instantsearch/dom';

// [...]

function MyHit({ hit }) {
  return [
    <Divider />,
    <List.Item>
      <List.Header>
        <Link to={`${hit.objectID}`}>
          <Highlight attributeName="name" hit={hit} />
        </Link>
      </List.Header>
      <List.Description>{hit.class}</List.Description>
    </List.Item>,
  ];
}

function Search() {
  return (
    <div>
      <Image
        src="https://storage.googleapis.com/graphcms-public/swapi.svg"
        size="small"
        style={{ padding: '0px 0px 20px 0px' }}
        centered
      />
      <SearchBox />
      <List divided relaxed>
        <Hits hitComponent={MyHit} />
      </List>
      <Configure hitsPerPage={5} />
      <Divider />
      <Pagination />
      <PoweredBy />
    </div>
  );
}

export default Search;
