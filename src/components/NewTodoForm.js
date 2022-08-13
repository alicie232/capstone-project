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
        <StyledHeader>Aufgabe hinzufügen</StyledHeader>

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
        <StyledCloseButton onClick={onClose}>zurück</StyledCloseButton>
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
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledHeader = styled.header`
  padding-bottom: 10px;
`;

const StyledForm = styled.form`
  max-width: 375px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: solid;
  border-radius: 15px;
`;

const StyledLabelInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TaskInput = styled.input``;

const StyledLabelSelect = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledSelect = styled.select`
  width: 100px;
  font-size: 16px;
`;

const StyledSubmitButton = styled.button`
  width: 100px;
`;

const StyledCloseButton = styled.button`
  width: 100px;
`;
