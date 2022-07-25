export default function TaskList({tasks}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input type="checkbox" />
          {task.task}
        </li>
      ))}
    </ul>
  );
}
