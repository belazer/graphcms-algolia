import React from "react";
import { render } from "react-dom";
import Algolia from "./algolia";
import DetailView from "./detail_view";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Segment, Grid } from "semantic-ui-react";
import "./index.css";

const styles = {
  backgroundImage:
    "radial-gradient(farthest-corner at 0px 6000px, #61045f 0%, #282d4c 100%)"
};

const App = () => (
  <BrowserRouter>
    <div className="outer">
        <Segment compact padded="very" raised style={{ margin: "30px auto" }}>
          <Switch>
            <Route path="/:id" component={DetailView} />
            <Route path="/" component={Algolia} />
          </Switch>
        </Segment>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
