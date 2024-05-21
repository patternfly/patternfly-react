/* eslint-disable camelcase */
import * as React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Divider,
  Flex,
  FlexItem,
  Gallery,
  Grid,
  GridItem,
  Stack,
  Icon
} from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';

interface ContentType {
  icon?: React.ReactNode;
  count?: number;
  status?: string;
  subtitle?: string;
}
interface CardData {
  [attribute: string]: {
    title: string;
    content: {
      icon: JSX.Element;
      count?: number;
      status?: string;
      subtitle?: string;
    }[];
    layout: string;
  }[];
}

const cardData: CardData = {
  iconOnly: [
    {
      title: '5 Clusters',
      content: [
        {
          icon: (
            <Icon status="success">
              <CheckCircleIcon />
            </Icon>
          )
        }
      ],
      layout: 'icon'
    },
    {
      title: '15 Clusters',
      content: [
        {
          icon: (
            <Icon status="warning">
              <ExclamationTriangleIcon />
            </Icon>
          )
        }
      ],
      layout: 'icon'
    },
    {
      title: '3 Clusters',
      content: [
        {
          icon: (
            <Icon status="danger">
              <ExclamationCircleIcon />
            </Icon>
          )
        }
      ],
      layout: 'icon'
    }
  ],
  iconWithCount: [
    {
      title: '10 Hosts',
      content: [
        {
          icon: (
            <Icon status="success">
              <CheckCircleIcon />
            </Icon>
          ),
          count: 2
        },
        {
          icon: (
            <Icon status="warning">
              <ExclamationTriangleIcon />
            </Icon>
          ),
          count: 1
        }
      ],
      layout: 'multiIcon'
    },
    {
      title: '50 Hosts',
      content: [
        {
          icon: (
            <Icon status="success">
              <CheckCircleIcon />
            </Icon>
          ),
          count: 5
        },
        {
          icon: (
            <Icon status="danger">
              <ExclamationCircleIcon />
            </Icon>
          ),
          count: 12
        }
      ],
      layout: 'multiIcon'
    },
    {
      title: '12 Hosts',
      content: [
        {
          icon: (
            <Icon status="warning">
              <ExclamationTriangleIcon />
            </Icon>
          ),
          count: 3
        },
        {
          icon: (
            <Icon status="danger">
              <ExclamationCircleIcon />
            </Icon>
          ),
          count: 7
        }
      ],
      layout: 'multiIcon'
    }
  ],
  withSubtitle: [
    {
      title: '13 Hosts',
      content: [
        {
          icon: (
            <Icon status="danger">
              <ExclamationCircleIcon />
            </Icon>
          ),
          status: '2 errors',
          subtitle: 'subtitle'
        },
        {
          icon: (
            <Icon status="warning">
              <ExclamationTriangleIcon />
            </Icon>
          ),
          status: '1 warning',
          subtitle: 'subtitle'
        }
      ],
      layout: 'withSubtitle'
    },
    {
      title: '3 Hosts',
      content: [
        {
          icon: (
            <Icon status="success">
              <CheckCircleIcon />
            </Icon>
          ),
          status: '2 successes',
          subtitle: 'subtitle'
        },
        {
          icon: (
            <Icon status="warning">
              <ExclamationTriangleIcon />
            </Icon>
          ),
          status: '3 warnings',
          subtitle: 'subtitle'
        }
      ],
      layout: 'withSubtitle'
    },
    {
      title: '50 Hosts',
      content: [
        {
          icon: (
            <Icon status="warning">
              <ExclamationTriangleIcon />
            </Icon>
          ),
          status: '7 warnings',
          subtitle: 'subtitle'
        },
        {
          icon: (
            <Icon status="danger">
              <ExclamationCircleIcon />
            </Icon>
          ),
          status: '1 error',
          subtitle: 'subtitle'
        }
      ],
      layout: 'withSubtitle'
    }
  ]
};

export const CardAggregateStatus: React.FunctionComponent = () => {
  const renderContent = (content: ContentType[], layout: string) => {
    if (layout === 'icon') {
      return content[0].icon;
    }
    if (layout === 'multiIcon') {
      return (
        <Flex display={{ default: 'inlineFlex' }}>
          {content.map(({ icon, count }, index: number) => (
            <React.Fragment key={index}>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <FlexItem>{icon}</FlexItem>
                <FlexItem>
                  <a href="#">{count}</a>
                </FlexItem>
              </Flex>
              {content.length > 1 && index === 0 && (
                <Divider
                  key={`${index}_d`}
                  orientation={{
                    default: 'vertical'
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Flex>
      );
    }
    if (layout === 'withSubtitle') {
      return (
        <Flex justifyContent={{ default: 'justifyContentSpaceAround' }}>
          {content.map(({ icon, status, subtitle }, index: number) => (
            <Flex key={index}>
              <FlexItem>{icon}</FlexItem>
              <Stack>
                <a href="#">{status}</a>
                <span>{subtitle}</span>
              </Stack>
            </Flex>
          ))}
        </Flex>
      );
    }
  };
  return (
    <Grid hasGutter>
      {Object.keys(cardData).map((cardGroup, groupIndex) => {
        let galleryWidth: string = '';
        let cardAlign: string;
        let titleAlign: string;
        if (cardGroup === 'withSubtitle') {
          galleryWidth = '260px';
          cardAlign = '';
          titleAlign = 'center';
        } else {
          cardAlign = 'center';
        }
        return (
          <GridItem key={groupIndex}>
            <Gallery
              hasGutter
              style={{ [l_gallery_GridTemplateColumns_min.name]: galleryWidth } as React.CSSProperties}
            >
              {cardData[cardGroup].map(({ title, content, layout }, cardIndex: number) => (
                <Card
                  style={{ textAlign: cardAlign } as React.CSSProperties}
                  key={`${groupIndex}${cardIndex}`}
                  component="div"
                >
                  <CardTitle style={{ textAlign: titleAlign } as React.CSSProperties}>{title}</CardTitle>
                  <CardBody>{renderContent(content, layout)}</CardBody>
                </Card>
              ))}
            </Gallery>
          </GridItem>
        );
      })}
    </Grid>
  );
};
