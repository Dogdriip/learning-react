import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a: number, b: number) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>("");
  const inputEl = useRef<HTMLInputElement>(null);

  /*
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const onInsert = (e: React.MouseEvent<HTMLButtonElement>) => {
    setList((state) => state.concat(parseInt(number)));
    setNumber("");
  };
  */

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setList((state) => state.concat(parseInt(number)));
      setNumber("");
      inputEl.current?.focus();
    },
    [number]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
