import React from 'react';
import {
  Focusable,
  Card,
  CardHeader,
  Tooltip,
  Button,
  Radio,
  Gallery,
  GalleryItem,
  Title,
  TextInput
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import alignmentStyles from '@patternfly/react-styles/css/utilities/Alignment/alignment';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { BeerIcon } from '@patternfly/react-icons';

export class FocusableDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title className={spacingStyles.mbLg} size="lg" headingLevel="h2">
          Non-interactive elements
        </Title>
        <Focusable tabIndex={0} className={css('non-interactive-elements', alignmentStyles.textAlignCenter)}>
          <Gallery>
            <GalleryItem>
              <Focusable className="simple-text-example" data-text-example>
                Simple text
              </Focusable>
            </GalleryItem>
            <GalleryItem>
              <Focusable aria-label="Example focusable article" data-non-interactive-html-example>
                <article>Article element</article>
              </Focusable>
            </GalleryItem>
            <GalleryItem>
              <Focusable data-non-interactive-component-example>
                <Card>
                  <CardHeader>Header</CardHeader>
                </Card>
              </Focusable>
            </GalleryItem>
            <GalleryItem>
              <Tooltip content="Focus on beer">
                <Focusable data-icon-example>
                  <BeerIcon />
                </Focusable>
              </Tooltip>
            </GalleryItem>
          </Gallery>
        </Focusable>

        <Title className={spacingStyles.mbLg} size="lg" headingLevel="h2">
          Interactive elements (disabled)
        </Title>
        <Focusable tabIndex={0} className={css('interactive-elements-disabled', alignmentStyles.textAlignCenter)}>
          <Gallery>
            <GalleryItem>
              <Tooltip content="Disabled button component tooltip content">
                <Focusable withContainer component="div" data-disabled-button-tooltip-example>
                  <Button
                    isDisabled
                    onClick={() => {
                      // eslint-disable-next-line
                      console.log('click event fired for disabled button');
                    }}
                  >
                    Disabled button text
                  </Button>
                </Focusable>
              </Tooltip>
            </GalleryItem>
            <GalleryItem>
              <Tooltip content="Disabled html button tooltip content">
                <Focusable withContainer component="div" data-disabled-html-button-tooltip-example>
                  <button
                    disabled
                    onClick={() => {
                      // eslint-disable-next-line
                      console.log('click event fired for html disabled button');
                    }}
                  >
                    Disabled button text
                  </button>
                </Focusable>
              </Tooltip>
            </GalleryItem>
            <GalleryItem>
              <Tooltip content="Disabled radio tooltip content">
                <Focusable withContainer data-disabled-radio-tooltip-example>
                  <Radio
                    isDisabled
                    label="Disabled radio with tooltip"
                    id="disabled-radio-with-tooltip"
                    name="radio-1"
                  />
                </Focusable>
              </Tooltip>
            </GalleryItem>
            <GalleryItem>
              <Tooltip content="Positive tabindex values are not recommended, notice how they cause elements to be removed from natural tab flow of the document.">
                <Focusable tabIndex={3} withContainer data-disabled-textinput-tooltip-example>
                  <TextInput
                    isDisabled
                    type="text"
                    value="Second focusable component on the page"
                    aria-label="disabled text input example"
                  />
                </Focusable>
              </Tooltip>
            </GalleryItem>
          </Gallery>
        </Focusable>

        <Title className={spacingStyles.mbLg} size="lg" headingLevel="h2">
          Interactive elements (enabled)
        </Title>
        <Focusable tabIndex={0} className={css('interactive-elements-enabled', alignmentStyles.textAlignCenter)}>
          <Gallery>
            <GalleryItem>
              <Tooltip content="Positive tabindex values are not recommended, notice how they cause elements to be removed from natural tab flow of the document.">
                <Focusable tabIndex={1} data-positive-tabindex-example>
                  <button className="pf-c-button pf-m-tertiary">First focusable component on the page</button>
                </Focusable>
              </Tooltip>
            </GalleryItem>
            <GalleryItem>
              <Tooltip content="Enabled button tooltip content">
                <Focusable component="div" data-enabled-button-tooltip-example>
                  <Button
                    onClick={() => {
                      // eslint-disable-next-line
                      console.log('click event fired for enabled button');
                    }}
                  >
                    Enabled button text
                  </Button>
                </Focusable>
              </Tooltip>
            </GalleryItem>
            <GalleryItem>
              <Tooltip content="Enabled radio tooltip content">
                <Focusable data-enabled-radio-tooltip-example>
                  <Radio label="Enabled radio with tooltip" id="disabled-radio-with-tooltip" name="radio-1" />
                </Focusable>
              </Tooltip>
            </GalleryItem>
            <GalleryItem>
              <Tooltip content="Enabled button component tooltip content">
                <Focusable isFocusable={false} component="div" data-redundantly-undisabled-button-tooltip-example>
                  <Button
                    onClick={() => {
                      // eslint-disable-next-line
                      console.log('click event fired for enabled/non-focusable button');
                    }}
                  >
                    Enabled button wrapped with non-focusable wrapper
                  </Button>
                </Focusable>
              </Tooltip>
            </GalleryItem>
          </Gallery>
        </Focusable>
      </React.Fragment>
    );
  }
}
