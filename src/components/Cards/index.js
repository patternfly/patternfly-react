import Card from './Card';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import CardGrid from './CardGrid';
import CardHeading from './CardHeading';
import CardFooter from './CardFooter';
import CardLink from './CardLink';
import CardDropdownButton from './CardDropdownButton';
import CardHeightMatching from './CardHeightMatching';

import { default as Row } from '../Grid/Row';
import { default as Col } from '../Grid/Col';
import { default as Clearfix } from '../Grid/Clearfix';

Card.Title = CardTitle;
Card.Body = CardBody;
Card.Heading = CardHeading;
Card.Footer = CardFooter;
Card.Link = CardLink;
Card.DropdownButton = CardDropdownButton;
Card.HeightMatching = CardHeightMatching;
CardGrid.Row = Row;
CardGrid.Col = Col;
CardGrid.Clearfix = Clearfix;

export {
  Card,
  CardTitle,
  CardBody,
  CardGrid,
  CardHeading,
  CardFooter,
  CardLink,
  CardDropdownButton,
  CardHeightMatching
};
