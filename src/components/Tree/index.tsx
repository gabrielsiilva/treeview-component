import { Branch } from '../Branch/index';

interface Data {
  id: string;
  children: { [key: string]: Data },
  name: string;
  level: number;
}

interface TreeProps {
  treeData: Data[],
  checked?: boolean;
}

export const Tree = ({ treeData, checked = false }: TreeProps) => {

  return (
    <div>
      {treeData.map((item) => {
        const children: Data[] = Object.values(item.children);

        return (
          <Branch
            key={item.id}
            item={item}
            children={children}
            checked={checked}
          />
        )
      })}
    </div>
  )
}