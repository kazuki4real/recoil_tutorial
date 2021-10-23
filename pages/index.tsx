import type { NextPage } from 'next'
import { atom, useRecoilValue } from 'recoil';
import TodoItem from "./TodoItem"
import TodoItemCreator from "./TodoItemCreator"
import TodoListStats from "./TodoListStats"
import TodoListFilters from "./TodoListFilters"
import { filteredTodoListState } from "./TodoListFilters"

export const todoListState = atom({
  key: "todoListState",
  default: []
})

const Home: NextPage = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
    <TodoListStats />
    <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todo: any) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  )
}

export default Home