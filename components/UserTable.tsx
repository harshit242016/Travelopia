import { Table } from '@nextui-org/react';
import React from 'react';

export default function UserTable(props:any) {
  const {rows,columns} = props;

  return (
    <div style={styles.tableContainer}>
      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header columns={columns}>
          {(column:any) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={rows.map((row:any) => ({ ...row, id: row.name }))}>
          {(item:any) => (
            <Table.Row key={item.id}>
              {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

const styles = {
  tableContainer: {
    padding: '1.5rem',
    margin: '1.5rem',
  },
};
