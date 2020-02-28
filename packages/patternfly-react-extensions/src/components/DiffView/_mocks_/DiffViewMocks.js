import React from 'react';

export const diffMock = {
  oldText: 'hello friend',
  newText: 'hello there friend',
  viewType: 'split',
  emptyState: <div>empty</div>
};

export const patchMock = {
  viewType: 'unified',
  patch: '---',
  emptyState: <div>empty</div>
};

export const emptyState = {
  oldText: 'hello friend',
  newText: 'hello friend',
  viewType: 'split',
  emptyState: <div>empty</div>
};
