import CardBase, { CardProps } from './Card';
import CardBody, { CardBodyProps } from './CardBody';
import CardDropdownButton, {
  CardDropdownButtonProps
} from './CardDropdownButton';
import CardFooter, { CardFooterProps } from './CardFooter';
import CardGridBase, { CardGridProps } from './CardGrid';
import CardHeading, { CardHeadingProps } from './CardHeading';
import CardHeightMatching, {
  CardHeightMatchingProps
} from './CardHeightMatching';
import CardLink, { CardLinkProps } from './CardLink';
import CardTitle, { CardTitleProps } from './CardTitle';
import { Clearfix, Col, Row } from '../Grid';

declare const Card: typeof CardBase & {
  Body: typeof CardBody;
  DropdownButton: typeof CardDropdownButton;
  Footer: typeof CardFooter;
  Heading: typeof CardHeading;
  HeightMatching: typeof CardHeightMatching;
  Link: typeof CardLink;
  Title: typeof CardTitle;
};

declare const CardGrid: typeof CardGridBase & {
  Clearfix: typeof Clearfix;
  Col: typeof Col;
  Row: typeof Row;
};

export {
  Card,
  CardProps,
  CardBody,
  CardBodyProps,
  CardDropdownButton,
  CardDropdownButtonProps,
  CardFooter,
  CardFooterProps,
  CardGrid,
  CardGridProps,
  CardHeading,
  CardHeadingProps,
  CardHeightMatching,
  CardHeightMatchingProps,
  CardLink,
  CardLinkProps,
  CardTitle,
  CardTitleProps
};
export * from './AggregateStatusCard';
export * from './UtilizationTrendCard';
