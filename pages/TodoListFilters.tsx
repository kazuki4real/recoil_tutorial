import React from 'react'
import { atom, selector, useRecoilState } from "recoil"
import { todoListState } from ".";

const todoListFilteredState = atom({
  key: "todoListFilteredState",
  default: "Show All"
})

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({get}) => {
    const filter = get(todoListFilteredState);
    const list = get(todoListState)

    switch (filter) {
      case "Show Completed":
        return list.filter((item: any) => item.isComplete)
      case "Show Uncompleted":
          return list.filter((item: any) => !item.isComplete )
      default:
        return list;  
    }
  }
})

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilteredState)

  const updateFilter = ({target: {value}}) => {
    setFilter(value);
  };
  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

export default TodoListFilters