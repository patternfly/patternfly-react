import React from 'react';
import { Table } from '../index';
import { mockRows } from '../__mocks__/mockRows';
import { mockPatternflyColumns } from '../__mocks__/mockColumns';

/**
 * Patternfly Table stories
 */

const patternflyTableAddWithInfo = stories => {
  stories.addWithInfo('PatternFly Table Styles', '', () => (
    <div>
      <h2>
        PatternFly recommendation: Bootstrap striped, bordered, hover, and
        responsive
      </h2>
      <Table.PfProvider striped bordered hover columns={mockPatternflyColumns}>
        <Table.Header />
        <Table.Body rows={mockRows} rowKey="id" />
      </Table.PfProvider>
    </div>
  ));
};

export default patternflyTableAddWithInfo;
