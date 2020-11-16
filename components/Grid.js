import React, {Component} from 'react';

import {
  SortableContainer,
  SortableElement,
  sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import styles from './Grid.module.css'

const SortableData = {
  items: [
    {
      widget: 'One',
      span: 1
    },
    {
      widget: 'Two',
      span: 1
    },
    {
      widget: 'Three',
      span: 1
    },
    {
      widget: 'Four',
      span: 2
    },
    {
      widget: 'Five',
      span: 1
    },
  ]
}

const DragHandle = sortableHandle(() => <span tabIndex={0} className={styles.handle}>::</span>);

const SortableItem = SortableElement(({value}) => (
  <div className={`${styles.panel} span-${value.span}`}>
    <DragHandle />
    {value.widget}
  </div>
))

const SortableList = SortableContainer(({items}) => {
  return (
    <div>
      <div className={styles.grid}>
        {items.map((value, index) => (
          <SortableItem key={`item-${value.widget}`} index={index} value={value} />
        ))}
      </div>
      <div className={styles.data}>
<pre><code>
  {JSON.stringify(items, null, 2) }
</code></pre>
      </div>
    </div>
  );
});

class SortableComponent extends Component {
  state = SortableData

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList
      axis='xy'
      useDragHandle={true}
      items={this.state.items}
      onSortEnd={this.onSortEnd} />;
  }
}

export default SortableComponent