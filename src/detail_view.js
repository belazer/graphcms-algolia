import React, { Component } from "react";
import { createApolloFetch } from "apollo-fetch";
import Starship from './starship';
const uri = "https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master";
const apolloFetch = createApolloFetch({ uri });
class DetailView extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    const variables = { id };

    const query = `query getStarshipDetails($id: ID!) {
  Starship(id: $id) {
    id
    name
    cargoCapacity
    costInCredits
    class
    mglt
    maxAtmospheringSpeed
    consumables
  }
}`;

    apolloFetch({ query, variables })
      .then(result => {
        const { data } = result;
        this.setState({ data });
      })
      .catch(error => {
        //respond to a network error
      });
  }

  render() {
    const { match } = this.props;
    if (!this.state.data) return "Loading..."
    return <Starship {... this.state.data.Starship} />
  }
}

export default DetailView;
