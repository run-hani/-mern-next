// 리액트 내부의 상태를 쓸것이다.
import React, {useState} from "react";
import tableStyles from '../common/styles/table.module.css';

// 이게...아톰?
// 리액트는 렌더 꼭불러야하는데 next는 return에 넣고 렌더를 따로 안불러도 됨, return
export default function Counter() { // ()안은 props
    // count는 getter, setCount는 setter
    const [count, setCount] = useState(0); // state
    return (<table className={tableStyles.table}>
        <thead>
            <tr>
                <th><h2>카운터</h2></th>
            </tr>
        </thead>
        <tbody>
    <tr>
    <td><button style={{width:100}} onClick={() => setCount(count+1)}> + </button>
        <button style={{width:100}} onClick={() => setCount(count-1)}> - </button>
       </td></tr>
        <tr><td><h3>결과: {count}</h3></td></tr>
                    </tbody>
                </table>
    )
}