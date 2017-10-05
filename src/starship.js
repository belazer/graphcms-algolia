import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Starship = ({
  id,
  name,
  maxAtmospheringSpeed,
  consumables,
  costInCredits,
  ...props
}) => (
  <div>
    <a href="/">🔙</a>
    <Card>
      <Image
        src={`https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb`}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{props.class}</span>
        </Card.Meta>
        <Card.Description>Cosumables for {consumables}</Card.Description>
      </Card.Content>
      <Card.Content>🚀 {maxAtmospheringSpeed}</Card.Content>
      <Card.Content>💰 {costInCredits}</Card.Content>
    </Card>
  </div>
);
export default Starship;
