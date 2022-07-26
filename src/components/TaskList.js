export default function TaskList({todos, onTodoChange}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{listStyle: 'none'}}>
          <input type="checkbox" checked={todo.isChecked} onChange={() => onTodoChange(todo)} />
          <span style={{textDecoration: todo.isChecked && 'line-through'}}>{todo.task}</span>
        </li>
      ))}
    </ul>
  );
}
