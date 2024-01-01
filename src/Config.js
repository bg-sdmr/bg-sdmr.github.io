import data from './data.json';

function Config() {
  return <div>{JSON.stringify(data, '', 4)}</div>;
}

export default Config;
