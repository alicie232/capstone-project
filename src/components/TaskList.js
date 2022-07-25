export default function TaskList({tasks}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
}
