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
      <img src="../assets/icons/button-delete.svg" alt="delete" />
    </DeleteButton>
  );
}

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
`;
