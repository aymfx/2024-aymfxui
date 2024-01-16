import data from './data.json';
export default function () {
  import('./message.js').then(({ default: foo }) => console.log(foo));
}
