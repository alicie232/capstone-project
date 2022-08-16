import styled from 'styled-components';

export default function NewTodo({onOpenForm}) {
  return (
    <>
      <AddTodoButton type="button" aria-label="Aufgabe hinzufügen" onClick={onOpenForm}>
        +
      </AddTodoButton>
    </>
  );
}

const AddTodoButton = styled.button`
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
  bottom: 75px;
  right: 15px;
  width: 65px;
  height: 65px;
  border: none;
  border-radius: 50%;
  color: #f5f5f5;
  text-decoration: none;
  background-color: #63c5da;
  font-size: 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: 1;
`;
