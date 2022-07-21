export default function DailyTaskList() {
  const dailyTask = dailyTasks.map(dailyTask => <li key={dailyTask.toString()}>{dailyTask} </li>);
  return <ul>{dailyTask}</ul>;
}

const dailyTasks = [
  'Betten machen',
  'Räume lüften',
  'Spülmaschine ausräumen',
  'Wäsche machen',
  'Müll rausbringen',
  'Böden saugen',
  'ungenutzte Dinge wegräumen',
  'Waschbecken im Bad reinigen',
  'Toilette im Bad reinigen',
  'Arbeitsflächen in der Küche abwischen',
  'volle Spülmaschine anschalten',
];
