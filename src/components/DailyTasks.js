import TaskList from './TaskList';

export default function DailyTasks({todos, updateTodo}) {
  function handleTodos(event) {
    const todoId = event.target.dataset.todoid;
    const taskId = event.target.dataset.taskid;

    updateTodo(todoId, taskId);
  }

  return <TaskList todos={todos} onTodoChange={handleTodos} />;
}
