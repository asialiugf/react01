import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from 'antd';

function App() {
  return (
    <div className="App">


    </div>
  );
}

export default App;


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// function TimeLevel (props) {
//   return (
//     <button className="timelevel" onClick={props.onClick}>

//       {props.value}

//     </button>
//   )
// }

// class Board extends React.Component {
function Board() {
  // let [state, setstate] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  let [state, setstate] = useState(tt)
  const [s1, sets] = useState(1)




  // function initialState() {
  //   let state1 = [1, 2, 3, 4, 5, 6, 7, 8]
  //   state.push(1)

  // }

  console.log('state:', state)
  console.log('s1', s1)
  console.log('state.length', state.length)

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
    setstate(checkedValues) 
    // return (checkedValues)
 
  }


  
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

      <div>
        这是什么鬼?
        {disp(state)}
      </div>


      <button className="te" onClick={() => { setstate(foo) }}>
        {/* <button className="te" onClick={() => { setstate(state=>state.pop()) }}> 有问题的！ */} 
        改变
      </button>
      <button className="te" onClick={() => { sets(bar) }}>
        ++
      </button>
      <div>

        {/* <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
        <br /> */}
        <br />
        <Checkbox.Group options={options} defaultValue={['1F', '5F']} onChange={onChange} />
        <br />
        <br />
        {/* <Checkbox.Group
          options={optionsWithDisabled}
          disabled
          defaultValue={['Apple']}
          onChange={onChange}
        /> */}


      </div>


    </div>
  );

}


export { Board }

function renderSquare(i) {
  return (
    <Square
      value={i}
      onClick={() => { alert(i) }}
    />
  );
}

function disp(state) {
  // return (
  //   <div>
  //     for (let i = 0, i < 5, ++i) {
  //       renderSquare(state[i])
  //     }
  //   </div>

  return state.map((article, index) => (
    // <Article key={index} article={article} />
    renderSquare(article)
  ));


  // )
}

function foo(s) {
  // console.log("0", s)
  // return s.push(1)
  // console.log("1", s)
  let s2 = s.slice(0)
  s2.pop()
  return s2
  // console.log('s:',s)
  // s.pop()
  // console.log('after pop s:',s)
  // return s

}

function bar(s) {
  return s + 1
}

const tt = () => {
  // return [1, 2, 3, 4, 5, 6, 7, 8]
  // let op = [
  //   { label: '1F', value: '1F' },
  //   { label: '5F', value: '5F' },
  //   { label: '15F', value: '15F' },
  //   { label: '30F', value: '30F' },]

  let op =['1F','5F']

  return op
}





const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: '1F', value: '1F' },
  { label: '5F', value: '5F' },
  { label: '15F', value: '15F' },
  { label: '30F', value: '30F' },
  { label: '1H', value: '1H' },
  { label: '2H', value: '2H' },
  { label: '3H', value: '3H' },
  { label: '4H', value: '4H' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];


