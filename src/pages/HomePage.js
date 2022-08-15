import TaskList from '../components/TaskList';

export default function HomePage({todos, onTodoCheck, insertNewTodo, taskTemplates, deleteTodo, edit}) {
  return (
    <>
      <TaskList
        todos={todos}
        onTodoCheck={onTodoCheck}
        insertNewTodo={insertNewTodo}
        taskTemplates={taskTemplates}
        deleteTodo={deleteTodo}
        edit={edit}
      />
    </>
  );
}
