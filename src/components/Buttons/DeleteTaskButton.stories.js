import DeleteTaskButton from './DeleteTaskButton';

export default {
  title: 'Buttons/DeleteTaskButton',
  component: DeleteTaskButton,
};

const tasks = [
  {
    id: 1,
    task: 'Räume lüften',
    checkedAt: '',
    isChecked: false,
  },
  {
    id: 2,
    task: 'Betten machen',
    checkedAt: '',
    isChecked: false,
  },
];

export const Default = () => <DeleteTaskButton task={tasks} deleteTodo={() => console.log('Button was clicked.')} />;
