import {
  Button,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListTermHelpText,
  DescriptionListTermHelpTextButton,
  Stack,
  StackItem,
  Title,
  Divider,
  Popover
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import { Component } from 'react';

export class DescriptionListDemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderSimpleDescriptionList() {
    return (
      <StackItem isFilled>
        <Title headingLevel="h2" size="2xl">
          Simple Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList id="simple-description-list" aria-label="Basic description list">
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }

  renderDescriptionListWithHelpText() {
    return (
      <StackItem isFilled>
        <Title headingLevel="h2" size="2xl">
          Description List with help text
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList id="description-list-help-text" aria-label="Description list with term help text">
            <DescriptionListGroup>
              <DescriptionListTermHelpText>
                <Popover headerContent={<div>Name</div>} bodyContent={<div>Additional name info</div>}>
                  <DescriptionListTermHelpTextButton> Name </DescriptionListTermHelpTextButton>
                </Popover>
              </DescriptionListTermHelpText>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTermHelpText>
                <Popover headerContent={<div>Namespace</div>} bodyContent={<div>Additional namespace info</div>}>
                  <DescriptionListTermHelpTextButton> Namespace </DescriptionListTermHelpTextButton>
                </Popover>
              </DescriptionListTermHelpText>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTermHelpText>
                <Popover headerContent={<div>Labels</div>} bodyContent={<div>Additional labels info</div>}>
                  <DescriptionListTermHelpTextButton> Labels </DescriptionListTermHelpTextButton>
                </Popover>
              </DescriptionListTermHelpText>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTermHelpText>
                <Popover headerContent={<div>Pod selector</div>} bodyContent={<div>Additional pod selector info</div>}>
                  <DescriptionListTermHelpTextButton> Pod selector </DescriptionListTermHelpTextButton>
                </Popover>
              </DescriptionListTermHelpText>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTermHelpText>
                <Popover headerContent={<div>Annotation</div>} bodyContent={<div>Additional annotation info</div>}>
                  <DescriptionListTermHelpTextButton> Annotation </DescriptionListTermHelpTextButton>
                </Popover>
              </DescriptionListTermHelpText>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }

  render2ColDescriptionList() {
    return (
      <StackItem isFilled>
        <br />
        <Title headingLevel="h2" size="2xl">
          Two Column Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList
            id="2-col-description-list"
            columnModifier={{ default: '2Col' }}
            aria-label="Two-column description list"
          >
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }

  renderResponsiveDescriptionList() {
    return (
      <StackItem isFilled>
        <br />
        <Title headingLevel="h2" size="2xl">
          Responsive Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList
            id="responsive-description-list"
            columnModifier={{ lg: '2Col', xl: '3Col' }}
            aria-label="Responsive columns based on screen size"
          >
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }

  renderHorizontalDescriptionList() {
    return (
      <StackItem isFilled>
        <br />
        <Title headingLevel="h2" size="2xl">
          Horizontal Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList id="horizontal-description-list" isHorizontal aria-label="Horizontal description list">
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }

  renderAutoColumnWidthsDescriptionList() {
    return (
      <StackItem isFilled>
        <br />

        <Title headingLevel="h2" size="2xl">
          Auto Column Widths Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList id="auto-col-widths-description-list" isAutoColumnWidths aria-label="Auto column width">
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }

  renderInlineGridDescriptionList() {
    return (
      <StackItem isFilled>
        <br />
        <Title headingLevel="h2" size="2xl">
          Inline Grid Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList
            id="inline-grid-description-list"
            isInlineGrid
            aria-label="Default inline grid description list"
          >
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }
  renderAutoFitDescriptionList() {
    return (
      <StackItem isFilled>
        <br />
        <Title headingLevel="h2" size="2xl">
          Auto Fit Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList
            autoFitMinModifier={{ md: '100px', lg: '150px', xl: '200px', '2xl': '300px' }}
            id="auto-fit-description-list"
            isAutoFit
            aria-label="Responsive auto-fit grid with minimum width"
          >
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }
  renderCompactDescriptionList() {
    return (
      <StackItem isFilled>
        <Title headingLevel="h2" size="2xl">
          Compact Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList id="compact-description-list" isCompact aria-label="Compact description list">
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }
  renderFluidDescriptionList() {
    return (
      <StackItem isFilled>
        <Title headingLevel="h2" size="2xl">
          Compact Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList
            id="fluid-description-list"
            isFluid
            isHorizontal
            aria-label="Fluid horizontal description list"
          >
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }
  render() {
    return (
      <Stack hasGutter>
        {this.renderSimpleDescriptionList()}
        {this.renderDescriptionListWithHelpText()}
        {this.renderResponsiveDescriptionList()}
        {this.renderHorizontalDescriptionList()}
        {this.renderAutoColumnWidthsDescriptionList()}
        {this.renderInlineGridDescriptionList()}
        {this.renderAutoFitDescriptionList()}
        {this.renderCompactDescriptionList()}
        {this.renderFluidDescriptionList()}
      </Stack>
    );
  }
}

export default DescriptionListDemo;
