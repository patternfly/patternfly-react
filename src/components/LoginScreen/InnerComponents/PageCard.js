import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const PageCard = props => (
  <div className="row">
    <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
      <div className="card-pf">
        <CardHeader {...props} />
        <CardBody {...props} />
        <CardFooter {...props} />
      </div>
    </div>
  </div>
);

export default PageCard;
