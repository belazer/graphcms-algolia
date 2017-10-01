import React from "react";
import { List, Divider, Image } from "semantic-ui-react";
// First, we need to add the Hits component to our import
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  RefinementList,
  ClearAll,
  CurrentRefinements,
  PoweredBy
} from "react-instantsearch/dom";

// [...]

function MyHit({ hit }) {
  return [
    <Divider />,
    <List.Item>
      <List.Header as="a" href={hit.objectID}>
        <Highlight attributeName="name" hit={hit} />
      </List.Header>
      <List.Description>{hit.class}</List.Description>
    </List.Item>
  ];
}

function Search() {
  return (
    <div>
      <Image
        src="https://graphcms.com/assets/swapi.svg"
        size="small"
        style={{ padding: "0px 0px 20px 0px" }}
        centered
      />
      <SearchBox />
      <List divided relaxed>
        <Hits hitComponent={MyHit} />
      </List>

      <PoweredBy />
    </div>
  );
}

export default Search;
