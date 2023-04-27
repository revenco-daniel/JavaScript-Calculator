import React from 'react';
import './App.css';

function App() {

  const [number, setNumber] = React.useState('');
  const [expression, setExpression] = React.useState('');
  const [answer, setAnswer] = React.useState('0');

  const numberClear = () => {
    setNumber('');
  }

  const display = (symbol) => {

    setExpression(prev => prev + symbol);
    setNumber(prev => prev +symbol);

    if(symbol==='*' || symbol==='/' || symbol==='+')
    {
      if(expression[expression.length-1]==='*' || expression[expression.length-1]==='/' || expression[expression.length-1]==='+')
      {
        setExpression(expression.split('').slice(0, expression.length-1).join('')+symbol);
      }
      else if(expression[expression.length-1]==='-')
      {
        setExpression(expression.split('').slice(0, expression.length-2).join('')+symbol);
      }
    }
    
    if(symbol==='-' && expression[expression.length-1]==='-')
    {
      setExpression(expression);
    }

    if(symbol==='.' && number==='')
    {
      setExpression(expression+'0.');
      setNumber(number+'0.');
    }

    if(symbol==='.' && number.includes('.')===true)
    {
      setNumber(number);
      setExpression(expression);
    }
    
    if(number==='0')
    {
      if(symbol==='0')
      {
        setNumber(number);
        setExpression(expression);
      }
      else if(/[1-9]/.test(symbol))
      {
        setExpression(expression.split('').slice(0, expression.length-1).join('')+symbol);
        setNumber(expression.split('').slice(0, expression.length-1).join('')+symbol);
      }
      
    }

    if(symbol!=='*' && symbol!=='/'&& symbol!=='-' && symbol!=='+')
    { 
      if(number==='0')
      { if(symbol==='0')
        {
          setAnswer(number);
        }
        else if(/[1-9]/.test(symbol))
        {
          setAnswer(symbol);
        }
      }
      else if(symbol==='.' && number.includes('.')===true)
      {
        setAnswer(number);
      }
      else if(symbol==='.' && number==='')
      {
        setAnswer('0.');
      }
      else
      {
        setAnswer(number+symbol);
      }
    }
    
    if(expression[expression.length-1] === '=' )
    {
      if(/[1-9.]/.test(symbol))
      {
        setExpression(symbol);
      }
      else
      {
        setExpression(answer+symbol);
      }
    }
    
  };

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + '=');
    setNumber('');
  };

  const clear = () => {
    setExpression((prev) => prev.split('').slice(0, prev.length-1).join(''));
    setNumber((prev) => prev.split('').slice(0, prev.length-1).join(''));
    setAnswer('0');
  };
  const allClear = () => {
    setExpression('');
    setAnswer('0');
    setNumber('');
  };

  return (
    <div className='calculator'>
      <h2 className='text-center'>JavaScript Calculator</h2>
      <div className=" d-flex align-items-center justify-content-center container mt-3 ">
        <div className='grid App p-2 rounded'>
          <div className='dis' id='display'>
            <input type='text' className='displayExp' placeholder='0' value={expression} disabled />
            <div className='total'>{answer}</div>
          </div>
          <div onClick={allClear} id='clear' className='padButton AC control'>AC</div>
          <div onClick={clear} className='padButton C control'>C</div>
          <div onClick={() => {display('/'); numberClear();} } id='divide' className='padButton operation'>/</div>
          <div onClick={() => {display('*'); numberClear();} } id='multiply' className='padButton operation'>x</div>
          <div onClick={() => display('7') } id='seven' className='padButton'>7</div>
          <div onClick={() => display('8') } id='eight' className='padButton'>8</div>
          <div onClick={() => display('9') } id='nine' className='padButton'>9</div>
          <div onClick={() => {display('-'); numberClear();} } id='subtract' className='padButton operation'>-</div>
          <div onClick={() => display('4') } id='four' className='padButton'>4</div>
          <div onClick={() => display('5') } id='five' className='padButton'>5</div>
          <div onClick={() => display('6') } id='six' className='padButton'>6</div>
          <div onClick={() => {display('+'); numberClear();} } id='add' className='padButton operation'>+</div>
          <div onClick={() => display('1') } id='one' className='padButton'>1</div>
          <div onClick={() => display('2') } id='two' className='padButton'>2</div>
          <div onClick={() => display('3') } id='three' className='padButton'>3</div>
          <div onClick={calculate} id='equals' className='padButton'>=</div>
          <div onClick={() => display('0') } id='zero' className='padButton'>0</div>
          <div onClick={() => display('.') } id='decimal' className='padButton'>.</div>
        </div>
      </div>
      <p className='mt-2'>By Revenco Daniel</p>
    </div>
  );
}

export default App;
