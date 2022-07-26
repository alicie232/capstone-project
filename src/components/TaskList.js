export default function TaskList({todos, onTodoChange}) {
  return (
    <ul>
      {todos.map(({id, isChecked, task}) => (
        <li key={id} style={{listStyle: 'none'}}>
          <label>
            <input type="checkbox" checked={isChecked} onChange={() => onTodoChange(id)} />
            <span style={{textDecoration: isChecked && 'line-through'}}>{task}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
