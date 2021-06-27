import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

const CardExampleCard = ({ name, age, desc, friends }) => {
  // must provide default props or error of undefined will appear on 'isRequired' propTypes
  Card.defaultProps = {
    name: "Thomas",
    age: 22,
    desc: "default",
    friends: 0,
  };

  // propTypes expected.  Will throw error is a different type is passed in
  Card.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    desc: PropTypes.string.isRequired,
    friends: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
  };

  return (
    <Card>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{age}</Card.Meta>
        <Card.Description>{desc}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        {friends} Friends
      </Card.Content>
    </Card>
  );
};

export default CardExampleCard;
