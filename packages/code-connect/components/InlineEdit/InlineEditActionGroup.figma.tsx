import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1664-5805&m=dev',
  {
    props: {},
    example: () => (
      // Documentation for InlineEdit can be found at https://www.patternfly.org/components/inline-edit
      // Inline edit is NOT a React component
      <div className="pf-v6-c-inline-edit pf-m-inline-editable" id="inline-edit-action-group-example">
        <div className="pf-v6-c-inline-edit__group pf-m-action-group">
          <div className="pf-v6-c-inline-edit__action">
            <button className="pf-v6-c-button pf-m-primary" type="button">
              <span className="pf-v6-c-button__text">Save</span>
            </button>
          </div>
          <div className="pf-v6-c-inline-edit__action">
            <button className="pf-v6-c-button pf-m-secondary" type="button">
              <span className="pf-v6-c-button__text">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
);
