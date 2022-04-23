import { useState, useEffect } from "react";
import { Tree } from "../Tree/index";

import { FaAngleRight } from 'react-icons/fa';

import * as S from './Branch.styles';

interface Data {
  id: string;
  children: { [key: string]: Data },
  name: string;
  level: number;
}

interface BranchProps {
  item: Data,
  children: Data[],
  checked: boolean
}

export const Branch = ({ item, children, checked = false }: BranchProps ) => {
  const [showBranches, setShowBranches] = useState<boolean>(false);
  const [boxChecked, setBoxChecked] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<String[]>([]);
  const childrenList = Object.values(children) as Data[];

  useEffect(() => {
    (checked)
      ? setBoxChecked(checked)
      : changeBoxCheckedStateById(item.id);
  }, [checked]);

  const changeBoxCheckedStateById = (itemId: string) => {
    checkedList.map((id) => {
      (id === itemId) && setBoxChecked(prevState => !prevState);
      return id;
    });
  };

  useEffect(() => {
    (boxChecked)
      ? setCheckedList([...checkedList, item.id])
      : removeItemFromCheckedListById(checkedList, item);

  }, [boxChecked, item]);

  const removeItemFromCheckedListById = (checkedList: String[], { id: itemId }: Data) => {
    const items = checkedList.filter((id: String) => id !== itemId);
    setCheckedList(items);
  }

  return (
    <S.Container>
      <S.Content level={item.level}>
        <label>
          <input
            type='checkbox'
            checked={boxChecked}
            id={item.id}
            onChange={() => setBoxChecked(!boxChecked)}
          />
          {item.name}
        </label>

        {childrenList.length && (
          <S.ExpandButton transformIcon={showBranches}
            onClick={() => setShowBranches(!showBranches)}
          >
            <FaAngleRight />
          </S.ExpandButton>
        )}
      </S.Content>

      {showBranches && (
        <Tree treeData={childrenList} checked={boxChecked} />
      )}
    </S.Container>
  )
}
