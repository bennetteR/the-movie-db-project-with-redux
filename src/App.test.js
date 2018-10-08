import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

/* fixture */
import state from './testsFixtures/state';

configure({ adapter: new Adapter() });

function shallowComponent(store) {
  return shallow(<App store={ store } />);
}

function mountComponent(store) {
  return mount(<Provider store={ store }><App /></Provider>);
}

describe('Shallow Component App', () => {
  let mockStore;
  let store;
  let component;

  beforeEach(() => {
    mockStore = configureStore();
    store = mockStore(state);
    component = shallowComponent(store);
  });

  test('renders without crashing', () => {
    console.log(component)
    expect(component).toBePresent();
  });
});

describe('Mount App Container', () => {
  let mockStore;
  let store;
  let component;

  beforeEach(() => {
    mockStore = configureStore();
    store = mockStore(state);
    component = mountComponent(store);
  });

  test('has been mounted', () => {
    expect(component).toBePresent();
  });
});
