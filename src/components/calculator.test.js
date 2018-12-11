import React from "react";
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactCalulator from './calculator';

Enzyme.configure({ adapter: new Adapter() });

let wrapper = shallow(<ReactCalulator />);

test('shallow render to check calculator renders correctly', () => {
  expect(wrapper.find('button').length).toEqual(19)
});

let mountWrapper = mount(<ReactCalulator />);

test('full DOM rendering', () => {
  //initial state
  expect(mountWrapper.state('resultBlock')).toBe('')
});

test('event getting triggered',() =>{
  mountWrapper.find('button').at(0).simulate('click');
  expect(mountWrapper.state('resultBlock')).toBe('0')
});
