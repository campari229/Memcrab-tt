import React from 'react';
import { Matrix } from './Matrix';
import TestRender from 'react-test-renderer';

import { createStore } from 'redux';
import { reducer } from '../../store/store';
import { Provider } from 'react-redux';
import { setCells, setNumberOfClosest } from '../../store/store';

const cells = [
  [{ amount: 432, id: 1, isPercentShown: false, isClosest: false }, { amount: 123, id: 2, isPercentShown: false, isClosest: false }, { amount: 534, id: 3, isPercentShown: false, isClosest: false }],
  [{ amount: 228, id: 6, isPercentShown: false, isClosest: false }, { amount: 322, id: 5, isPercentShown: false, isClosest: false }, { amount: 152, id: 4, isPercentShown: false, isClosest: false }],
  [{ amount: 122, id: 7, isPercentShown: false, isClosest: false }, { amount: 899, id: 8, isPercentShown: false, isClosest: false }, { amount: 356, id: 9, isPercentShown: false, isClosest: false }]
]

describe('matrix should work correct', () => {
  let component

  const store = createStore(reducer);
  store.dispatch(setCells(cells))
  store.dispatch(setNumberOfClosest(1));


  TestRender.act(() => {
    component = TestRender.create(
      <Provider store={store}>
        <Matrix />
      </Provider>
    )
  })

it('initial render test', () => {
  expect(component.toJSON()).toMatchSnapshot();
  })

  it('remove button should remove row', () => {
    const button = component.root.findByProps({ id: "remove-btn0" });

    TestRender.act(() => {
      button.props.onClick()
      return undefined
    })

    expect(component.root.findAllByProps({ className: "table__button-remove" }).length).toBe(2)
  });

  it('should increment on click', () => {
    const cell = component.root.findByProps({ id: '0-0' })
    const cellText = component.root.findByProps({ id: 'text:0-0' })

    TestRender.act(() => {
      cell.props.onClick()
      return undefined;
    })

    expect(cellText.props.children).toEqual(229);
  })

  it('should show and hide closest', () => {
    const cell = component.root.findByProps({ id: '1-1' })
    const closestCell = component.root.findByProps({ id: '1-2' })
    const closestText = component.root.findByProps({ id: 'text:1-2' })

    TestRender.act(() => {
      cell.props.onMouseOver()
      return undefined
    })

    expect(closestCell.props.className).toEqual("table__cell table__cell-closest")

    TestRender.act(() => {
      cell.props.onMouseOut()
      return undefined
    })

    expect(closestCell.props.className).toEqual("table__cell")
  })

  it('should show percents', () => {
    const percentsCell = component.root.findByProps({ id: 'percents0' });
    const cell = component.root.findByProps({ id: "text:0-0" });

    TestRender.act(() => {
      percentsCell.props.onMouseOver()
    })

    expect(cell.props.children).toEqual("33%")

    TestRender.act(() => {
      percentsCell.props.onMouseOut()
    })

    expect(cell.props.children).toEqual(229)
  })

  it('add row button should add a row', () => {
      const button = component.root.findByProps({ id: "add-button" })

      TestRender.act(() => {
        button.props.onClick()
      })

      expect(component.root.findAllByProps({ className: "table__row" }).length).toBe(3)
    })
})
