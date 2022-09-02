import styled from 'styled-components';

export default function EditTodo({onEditTodo}) {
  return (
    <>
      <EditButton onClick={onEditTodo}>
        <img src="./assets/icons/button_edit.svg" alt="Aufgabe löschen" />
      </EditButton>
    </>
  );
}

const EditButton = styled.button`
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 75px;
  right: 15px;
  width: 65px;
  height: 65px;
  border: none;
  border-radius: 50%;
  color: #f5f5f5;
  text-decoration: none;
  background-color: red;
  font-size: 1rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: 1;
`;
