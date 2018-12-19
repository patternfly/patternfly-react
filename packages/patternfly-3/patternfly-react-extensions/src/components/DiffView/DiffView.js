import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { parseDiff, Diff, markCharacterEdits, markWordEdits } from 'react-diff-view';
import { formatLines, diffLines } from 'unidiff';

const getDiff = (oldText, newText) => {
  const diffText = formatLines(diffLines(oldText, newText));
  // these two lines are faked to mock git diff output
  const header = ['diff --git a/a b/b', 'index 0000000..1111111 100644'];
  return `${header.join('\n')}\n${diffText}`;
};

const DiffView = ({
  oldText,
  newText,
  className,
  viewType,
  patch,
  markEditsByWord,
  emptyState,
  markThreshold,
  markLongDistanceDiff,
  ...props
}) => {
  const markEditProps = { markThreshold, markLongDistanceDiff };
  const markEdits = markEditsByWord ? markWordEdits(markEditProps) : markCharacterEdits(markEditProps);
  const classes = classNames('diff-pf', className);

  // Old, New Text
  if (!patch) {
    const gitDiff = getDiff(oldText, newText);
    const files = parseDiff(gitDiff);
    const hunk = files[0].hunks;

    if (hunk.length === 0) return emptyState;
    return hunk && <Diff className={classes} hunks={hunk} markEdits={markEdits} viewType={viewType} {...props} />;
  }

  // Patch
  const files = parseDiff(patch);
  // eslint-disable-next-line react/prop-types
  const renderFile = ({ oldRevision, newRevision, type, hunks }) => (
    <Diff
      className={classes}
      key={`${oldRevision}-${newRevision}`}
      viewType={viewType}
      diffType={type}
      hunks={hunks}
      markEdits={markEdits}
      {...props}
    />
  );

  if (patch === '') return emptyState;
  return <div>{files.map(renderFile)}</div>;
};

DiffView.propTypes = {
  /** className */
  className: PropTypes.string,
  /** oldText to compare */
  oldText: PropTypes.string,
  /** newText to compare */
  newText: PropTypes.string,
  /** viewType of the DiffView (Unified, Split) */
  viewType: PropTypes.string.isRequired,
  /** git diff output */
  patch: PropTypes.string,
  /** mark Diff by Words instead of Characters */
  markEditsByWord: PropTypes.bool,
  /** emptyState node when there is no diff */
  emptyState: PropTypes.node.isRequired,
  /** The maximum string distance when this function should try to mark edits */
  markThreshold: PropTypes.number,
  /**  If true, two strings with distance greater than threshold will create an edit containing the whole string */
  markLongDistanceDiff: PropTypes.bool
};

DiffView.defaultProps = {
  oldText: null,
  newText: null,
  patch: null,
  markEditsByWord: false,
  markThreshold: 30,
  markLongDistanceDiff: true,
  className: ''
};

export default DiffView;
