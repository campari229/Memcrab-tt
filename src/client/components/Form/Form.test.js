import React from 'react';
import { Form } from './Form';
import TestRender from 'react-test-renderer';

describe('form methods sould work correct', () => {
  let component

  TestRender.act(() => {
    component = TestRender.create(
      <Form />
    )
  })

  it('initial render test', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('rows input test', () => {
    const name = "rows"
    const input = component.root.findByProps({ name: "rows" });
    let event = { target: { name, value: "test" } }

    TestRender.act(() => input.props.onChange(event))

    expect(component.toJSON()).toMatchSnapshot()

    event = { target: { name, value: "" } }
    TestRender.act(() => input.props.onChange(event))
  })

  it('columns input test', () => {
    const name = "columns"
    const input = component.root.findByProps({ name: "columns" });
    let event = { target: { name, value: "test" } }

    TestRender.act(() => input.props.onChange(event))

    expect(component.toJSON()).toMatchSnapshot()

    event = { target: { name, value: "" } }
    TestRender.act(() => input.props.onChange(event))
  })

  it('closest input test', () => {
    const name = "closest"
    const input = component.root.findByProps({ name: "closest" });
    let event = { target: { name, value: "test" } }

    TestRender.act(() => input.props.onChange(event))

    expect(component.toJSON()).toMatchSnapshot()

    event = { target: { name, value: "" } }
    TestRender.act(() => input.props.onChange(event))
  })

  it('test closest input validation', () => {
    const form = component.root.findByProps({ className: 'form' });
    const rowsInput = component.root.findByProps({ name: "rows" });
    const columnsInput = component.root.findByProps({ name: "columns" });
    const closestInput = component.root.findByProps({ name: "closest" });
    let event = { target: { name, value: "2" } }

    TestRender.act(() => rowsInput.props.onChange(event))
    TestRender.act(() => columnsInput.props.onChange(event))
    TestRender.act(() => closestInput.props.onChange({ target: { name, value: "10" } }))

    const withPrevent = { preventDefault: jest.fn() }

    TestRender.act(() => form.props.onSubmit(withPrevent))

    expect(component.root.findByProps({ className: 'form__error closest-error' }).props).toEqual({children: "Enter a number of closest cells to shown (min: 1, max: columns * rows)", className: "form__error closest-error", style: { opacity: "1" } })

    event = { target: { name, value: "" } }

    TestRender.act(() => rowsInput.props.onChange(event))
    TestRender.act(() => columnsInput.props.onChange(event))
    TestRender.act(() => closestInput.props.onChange(event))
  })

  it('form submit test with empty inputs', () => {
    const form = component.root.findByProps({ className: 'form' });

    const withPrevent = { preventDefault: jest.fn() }

    TestRender.act(() => form.props.onSubmit(withPrevent))

    expect(component.root.findByProps({ className: 'form__error row-error' }).props).toEqual({children: "Enter a number of rows", className: "form__error row-error", style: { opacity: "1" } })
  })

  it('form submit test with valid inputs', () => {
    const form = component.root.findByProps({ className: 'form' });
    const rowsInput = component.root.findByProps({ name: "rows" });
    const columnsInput = component.root.findByProps({ name: "columns" });
    const closestInput = component.root.findByProps({ name: "closest" });
    let event = { target: { name, value: "3" } }

    TestRender.act(() => rowsInput.props.onChange(event))
    TestRender.act(() => columnsInput.props.onChange(event))
    TestRender.act(() => closestInput.props.onChange(event))

    // const withPrevent = { preventDefault: jest.fn() }

    TestRender.act(() => form.props.onSubmit({ preventDefault: jest.fn() }))

    expect(component.toJSON()).toMatchSnapshot()
  })
})
