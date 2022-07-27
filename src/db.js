import {nanoid} from 'nanoid';

let date = new Date();

const dailyTasks = [
  {task: 'Räume lüften', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
  {task: 'Betten machen', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
  {task: 'Spülmaschine ausräumen', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
  {task: 'Wäsche machen', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
  {task: 'Müll rausbringen', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
  {task: 'Böden saugen', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
  {task: 'ungenutzte Dinge wegräumen', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
  {task: 'Waschbecken im Bad reinigen', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
  {task: 'Toilette im Bad reinigen', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
  {task: 'Arbeitsflächen in der Küche abwischen', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
  {task: 'volle Spülmaschine anschalten', isChecked: false, checkedAt: date.toLocaleDateString(), id: nanoid()},
];

export default dailyTasks;
