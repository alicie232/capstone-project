import styled from 'styled-components';

export default function DeleteTaskButton({task, deleteTodo}) {
  return (
    <DeleteButton
      type="button"
      onClick={event => {
        event.stopPropagation();
        deleteTodo(task.id);
      }}
    >
      &times;
    </DeleteButton>
  );
}

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
`;
