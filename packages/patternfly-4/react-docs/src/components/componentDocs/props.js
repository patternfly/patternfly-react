import React from 'react';

const Props = ({ propList }) => {

  return <table style={{ width: "100%" }}>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      {propList.map(prop =>
        <tr key={prop.name}>
          <td>{prop.name}</td>
          <td>{prop.type.name}</td>
          <td>{'' + prop.required}</td>
          <td>{prop.defaultValue && prop.defaultValue.value}</td>
          <td>{'' + prop.description}</td>
        </tr>
      )}
    </tbody>
  </table>
}

export default Props
