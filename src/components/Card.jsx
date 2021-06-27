import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = ({name, age, desc, friends}) => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        {age}
      </Card.Meta>
      <Card.Description>
        {desc}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {friends} Friends
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard