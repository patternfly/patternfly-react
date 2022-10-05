import React from 'react';
import { Slider, Text, TextVariants } from '@patternfly/react-core';

export const DiscreteInput: React.FunctionComponent = () => {
  const initialValues = {
    value1: 50,
    value2: 50,
    value3: 25,
    value4: 50,
    value5: 50,
    value6: 3,
    value7: 25
  };

  const [numValue, setNumValue] = React.useState(initialValues);

  const handleChange = (value: number, event) => {
    const { name } = event.currentTarget;
    setNumValue({ ...numValue, [name]: value });
  };

  const steps = [
    { value: 0, label: '0' },
    { value: 12.5, label: '1', isLabelHidden: true },
    { value: 25, label: '2' },
    { value: 37.5, label: '3', isLabelHidden: true },
    { value: 50, label: '4' },
    { value: 62.5, label: '5', isLabelHidden: true },
    { value: 75, label: '6' },
    { value: 87.5, label: '7', isLabelHidden: true },
    { value: 100, label: '8' }
  ];

  // const stepsDiscreteWithMax = [
  //   { value: 0, label: "A" },
  //   { value: 1, label: "B" },
  //   { value: 2, label: "C" },
  //   { value: 3, label: "D" },
  //   { value: 4, label: "E" },
  //   { value: 5, label: "F" }
  // ];

  // const stepsDiscreteNoLinearWithMaxMin = [
  //   { value: 12, label: '12' },
  //   { value: 15, label: '15' },
  //   { value: 25, label: '25' },
  //   { value: 54, label: '54' },
  //   { value: 67, label: '67' },
  //   { value: 86, label: '86' }
  // ];

  return (
    <>
      <Text component={TextVariants.h3}>Slider value is: {initialValues.value1}</Text>
      <Slider name="value1" value={initialValues.value1} onChange={handleChange} customSteps={steps} />
      <br />
    </>
  );
};

// class DiscreteInput1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value1: 50,
//       value2: 50,
//       value3: 25,
//       value4: 50,
//       value5: 50,
//       value6: 3,
//       value7: 25
//     };

//     this.steps = [
//       { value: 0, label: '0' },
//       { value: 12.5, label: '1', isLabelHidden: true },
//       { value: 25, label: '2' },
//       { value: 37.5, label: '3', isLabelHidden: true },
//       { value: 50, label: '4' },
//       { value: 62.5, label: '5', isLabelHidden: true },
//       { value: 75, label: '6' },
//       { value: 87.5, label: '7', isLabelHidden: true },
//       { value: 100, label: '8' }
//     ];

//     this.stepsDiscreteWithMax = [
//       { value: 0, label: "A" },
//       { value: 1, label: "B" },
//       { value: 2, label: "C" },
//       { value: 3, label: "D" },
//       { value: 4, label: "E" },
//       { value: 5, label: "F" }
//     ];

//     this.stepsDiscreteNoLinearWithMaxMin = [
//       { value: 12, label: '12' },
//       { value: 15, label: '15' },
//       { value: 25, label: '25' },
//       { value: 54, label: '54' },
//       { value: 67, label: '67' },
//       { value: 86, label: '86' }
//   ];

//     this.onChange = value => {
//         this.setState({
//           value1: value
//         });
//     };

//     this.onChange2 = value => {
//         this.setState({
//           value2: value
//         });
//     };

//     this.onChange3 = value => {
//         this.setState({
//           value3: value
//         });
//     };

//     this.onChange4 = value => {
//         this.setState({
//           value4: value
//         });
//     };

//     this.onChange5 = value => {
//         this.setState({
//           value5: value
//         });
//     };

//     this.onChange6 = value => {
//         this.setState({
//           value6: value
//         });
//     };

//       this.onChange7 = value => {
//         this.setState({
//           value7: value
//         });
//     };
//   }

//   render() {
//     const step = this.steps.find(step => step.value === this.state.value1);
//     const displayValue = step ? step.label : 0;
//     return (
//       <>
//         <Text component={TextVariants.h3}>Slider value is: {displayValue}</Text>
//         <Slider value={this.state.value1} onChange={this.onChange} customSteps={this.steps} />
//         <br />
//         <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value2)}</Text>
//         <Text component={TextVariants.small}>(min = 0, max = 200, step = 50) </Text>
//         <Slider value={this.state.value2} onChange={this.onChange2} max={200} step={50} showTicks/>
//         <br />
//         <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value3)}</Text>
//         <Text component={TextVariants.small}>(min = -25, max = 75, step = 10, boundaries not shown) </Text>
//         <Slider value={this.state.value3} onChange={this.onChange3} min={-25} max={75} step={10} showTicks showBoundaries={false}/>
//         <br />
//         <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value4)}</Text>
//         <Text component={TextVariants.small}>(min = -25, max = 75, step = 10, boundaries shown) </Text>
//         <Slider value={this.state.value4} onChange={this.onChange4} min={-25} max={75} step={10} showTicks />
//         <br />
//         <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value5)}</Text>
//         <Text component={TextVariants.small}>(min = -25, max = 75, step = 10, boundaries shown, ticks not shown) </Text>
//         <Slider value={this.state.value5} onChange={this.onChange5} min={-25} max={75} step={10} />
//         <br />
//         <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value6)}</Text>
//         <Text component={TextVariants.small}>(max = 5, custom steps) </Text>
//         <Slider
//             value={this.state.value6}
//             showTicks
//             max={5}
//             customSteps={this.stepsDiscreteWithMax}
//             onChange={this.onChange6}
//           />
//         <br />
//         <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value7)}</Text>
//         <Text component={TextVariants.small}>(min = 12, max = 86, custom steps with non linear data) </Text>
//         <Slider
//             value={this.state.value7}
//             showTicks
//             customSteps={this.stepsDiscreteNoLinearWithMaxMin}
//             onChange={this.onChange7}
//             min={12}
//             max={86}
//           />
//         <br />
//       </>
//     );
//   }
// }
