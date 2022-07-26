export default function TaskList({todos, onTodos}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{listStyle: 'none'}}>
          <input type="checkbox" checked={todo.isChecked} onChange={() => onTodos(todo)} />
          <span style={{textDecoration: todo.isChecked && 'line-through'}}>{todo.task}</span>
        </li>
      ))}
    </ul>
  );
}
