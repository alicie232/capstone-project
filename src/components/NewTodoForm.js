import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';
import {dailyTodos} from '../db';
import {loadFromLocalStorage, writeToLocalStorage} from '../util/localstorage';

export default function NewTodoForm({insertNewTodo, open, onClose}) {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState(42);

  function handleSubmit(event) {
    event.preventDefault();
    const currentTemplates =
      loadFromLocalStorage('TaskTemplates') !== null ? loadFromLocalStorage('TaskTemplates') : dailyTodos;

    const newTask = {id: nanoid(), task, checkedAt: '', isChecked: false};

    writeToLocalStorage(
      'TaskTemplates',
      currentTemplates.map(template => {
        if (template.tasks !== undefined) {
          if (template.weekday === category) {
            return {...template, tasks: [...template.tasks, newTask]};
          }
        }
        return template;
      })
    );

    insertNewTodo(category, newTask);
    setTask('');
  }
  if (!open) return null;
  return (
    <>
      <Overlay />
      <ModalStyles>
        {/* <StyledHeader>Aufgabe hinzufügen</StyledHeader> */}
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabelInput htmlFor="task">
            Aufgabe hinzufügen:
            <TaskInput
              id="task"
              type="text"
              value={task}
              onChange={e => {
                setTask(e.target.value);
              }}
              placeholder="Aufgabe"
              autoComplete="off"
              required
            />
          </StyledLabelInput>

          <StyledLabelSelect htmlFor="category">
            Kategorie:
            <StyledSelect
              id="category"
              name="category"
              value={category}
              onChange={e => {
                setCategory(Number(e.target.value));
              }}
            >
              <option value="42">täglich</option>
              <option value="1">Montag</option>
              <option value="2">Dienstag</option>
              <option value="3">Mittwoch</option>
              <option value="4">Donnerstag</option>
              <option value="5">Freitag</option>
              <option value="6">Samstag</option>
              <option value="0">Sonntag</option>
            </StyledSelect>
          </StyledLabelSelect>

          <StyledSubmitButton type="submit">senden</StyledSubmitButton>
        </StyledForm>
        <StyledCloseButton onClick={onClose}>abbrechen</StyledCloseButton>
      </ModalStyles>
    </>
  );
}
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;

  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: var(--fontsize-medium);
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  line-height: 27px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  color: #f5f5f5;
  text-decoration: none;
  background-color: var(--color-highlight);

  position: fixed;
  top: 20px;
  right: 15px;

  /* &:active {
    background-color: ;
  }

  &:hover {
    background-color: ;
  } */
`;

const StyledForm = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLabelInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TaskInput = styled.input`
  padding-left: 5px;
  /* border-radius: 8px; */
  height: 35px;
  border: none;
  border-bottom: 1px solid;
  margin-top: 10px;
`;

const StyledLabelSelect = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledSelect = styled.select`
  background-color: transparent;
  border-radius: 8px;
  height: 35px;
  padding-left: 5px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;

const StyledSubmitButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: var(--color-highlight);
  padding: 8px 15px 10px;

  &:active {
    background-color: #08541f;
  }
`;

const StyledCloseButton = styled.button`
  border: none;
  border-radius: 8px;
  color: white;
  background-color: var(--color-highlight);
  padding: 8px 15px 10px;

  &:active {
    background-color: #560808;
  }
`;
