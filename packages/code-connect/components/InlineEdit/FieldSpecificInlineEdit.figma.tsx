import figma from '@figma/code-connect';

// Inline edit is NOT a React component
// Documentation for InlineEdit can be found at https://www.patternfly.org/components/inline-edit

figma.connect('https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1664-8856', {
  props: {},
  example: () => (
    <form className="pf-v6-c-inline-edit" id="single-inline-edit-example">
      <div className="pf-v6-c-inline-edit__group">
        <div className="pf-v6-c-inline-edit__value" id="single-inline-edit-example-label">
          Static value
        </div>
        <div className="pf-v6-c-inline-edit__action pf-m-enable-editable">
          <button
            className="pf-v6-c-button pf-m-plain"
            type="button"
            id="single-inline-edit-example-edit-button"
            aria-label="Edit"
            aria-labelledby="single-inline-edit-example-edit-button single-inline-edit-example-label"
          >
            <span className="pf-v6-c-button__icon">
              <i className="fas fa-pencil-alt" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="pf-v6-c-inline-edit__group">
        <div className="pf-v6-c-inline-edit__input">
          <span className="pf-v6-c-form-control">
            <input type="text" value="Static value" aria-label="Editable text input" />
          </span>
        </div>
        <div className="pf-v6-c-inline-edit__group pf-m-action-group pf-m-icon-group">
          <div className="pf-v6-c-inline-edit__action pf-m-valid">
            <button className="pf-v6-c-button pf-m-plain" type="button" aria-label="Save edits">
              <span className="pf-v6-c-button__icon">
                <i className="fas fa-check" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="pf-v6-c-inline-edit__action">
            <button className="pf-v6-c-button pf-m-plain" type="button" aria-label="Cancel edits">
              <span className="pf-v6-c-button__icon">
                <i className="fas fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
});
