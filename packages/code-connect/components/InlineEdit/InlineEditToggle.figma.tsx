import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1664-8905&m=dev',
  {
    props: {},
    example: () => (
      // Documentation for InlineEdit can be found at https://www.patternfly.org/components/inline-edit
      // Inline edit is NOT a React component
      <div className="pf-v6-c-inline-edit" id="inline-edit-toggle-example">
        <div className="pf-v6-c-inline-edit__action pf-m-enable-editable">
          <button
            className="pf-v6-c-button pf-m-plain"
            type="button"
            id="inline-edit-toggle-example-edit-button"
            aria-label="Edit"
            aria-labelledby="inline-edit-toggle-example-edit-button inline-edit-toggle-example-label"
          >
            <span className="pf-v6-c-button__icon">
              <i className="fas fa-pencil-alt" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
    )
  }
);
