import React from 'react'
import { useRecoilState } from "recoil"
import { todoListState } from "."

const TodoItem = ({ item }: any) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: {value}}: any) => {
    const newList: any = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })
    setTodoList(newList);
  }
  
  const toggleItemComletion = () => {
    const newList: any = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })
    setTodoList(newList);
  }

  const deleteItem = () => {
    const newList: any = removeItemAtIndex(todoList, index);
    setTodoList(newList)
  }
  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemComletion} />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}
function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
export default TodoItem