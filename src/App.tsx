
import Data from './data.json';
import { Tree } from './components/Tree/index';

interface Data {
  id: string;
  children: { [key: string]: Data },
  name: string;
  level: number;
}

export const App = () => {

  const getTreeData = (): Data[] => {
    return Object.values(Data);
  }

  return (
    <>
      <Tree treeData={getTreeData()} />
    </>
  );
}

export default App;