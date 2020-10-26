import { useState } from 'react';

// import Input from '../Input';
// https://www.youtube.com/watch?v=wOENJWPu23U&ab_channel=JustinKim
import Button from '../Button';

import './style.css';

function Container() {
  const [calculationValue, setCalculationValue] = useState('0');
  const [stack, setStack] = useState(null);
  const [operator, setOperator] = useState(null);

  // const [inputValue, setInputValue] = useState('');

  const handleButtonEvent = (calctype) => () => {
    // console.log('calctype:', calctype);
    if (calctype === 'AC') {
      setCalculationValue('0');
      setStack(null);
      setOperator(null);
      return;
    }

    if (calctype === '.') {
      if (calculationValue.includes('.')) return;

      setCalculationValue(`${calculationValue}.`);
      return;
    }

    if (calctype === '+') {
      if (operator !== null) {
        if (operator === '+') {
          setStack(stack + parseFloat(calculationValue));
        } else if (operator === '-') {
          setStack(stack - parseFloat(calculationValue));
        } else if (operator === '*') {
          setStack(stack * parseFloat(calculationValue));
        } else if (operator === '/') {
          setStack(stack / parseFloat(calculationValue));
        }
      } else {
        setStack(parseFloat(calculationValue));
      }

      setCalculationValue('0');
      setOperator('+');
      return;
    }

    if (calctype === '-') {
      if (operator !== null) {
        if (operator === '+') {
          setStack(stack + parseFloat(calculationValue));
        } else if (operator === '-') {
          setStack(stack - parseFloat(calculationValue));
        } else if (operator === '*') {
          setStack(stack * parseFloat(calculationValue));
        } else if (operator === '/') {
          setStack(stack / parseFloat(calculationValue));
        }
      } else {
        setStack(parseFloat(calculationValue));
      }

      setCalculationValue('0');
      setOperator('-');
      return;
    }

    // if (calctype === '−') {
    //   if (operator !== null) {
    //     if (operator === '+') {
    //       setStack(stack + parseFloat(calculationValue));
    //     } else if (operator === '−') {
    //       setStack(stack - parseFloat(calculationValue));
    //     } else if (operator === '*') {
    //       setStack(stack * parseFloat(calculationValue));
    //     } else if (operator === '/') {
    //       setStack(stack / parseFloat(calculationValue));
    //     }
    //   } else {
    //     setStack(parseFloat(calculationValue));
    //   }
    //   setCalculationValue('0');
    //   setOperator('−');
    //   return;
    // }

    if (calctype === '*') {
      if (operator !== null) {
        if (operator === '+') {
          setStack(stack + parseFloat(calculationValue));
        } else if (operator === '-') {
          setStack(stack - parseFloat(calculationValue));
        } else if (operator === '*') {
          setStack(stack * parseFloat(calculationValue));
        } else if (operator === '/') {
          setStack(stack / parseFloat(calculationValue));
        }
      } else {
        setStack(parseFloat(calculationValue));
      }

      setCalculationValue('0');
      setOperator('*');
      return;
    }

    if (calctype === '/') {
      if (operator !== null) {
        if (operator === '+') {
          setStack(stack + parseFloat(calculationValue));
        } else if (operator === '-') {
          setStack(stack - parseFloat(calculationValue));
        } else if (operator === '*') {
          setStack(stack * parseFloat(calculationValue));
        } else if (operator === '/') {
          setStack(stack / parseFloat(calculationValue));
        }
      } else {
        setStack(parseFloat(calculationValue));
      }

      setCalculationValue('0');
      setOperator('/');
      return;
    }

    if (calctype === '=') {
      if (!operator) return;

      // console.log('calctype:', calctype);
      // console.log('calc operation:', operator);

      if (operator === '+') {
        console.log('operator:', operator);
        console.log('stack:', stack);
        console.log('calculationValue:', parseFloat(calculationValue));
        setCalculationValue((stack + parseFloat(calculationValue)).toString());
      } else if (operator === '−') {
        console.log('operator:', operator);
        console.log('i am "-"'); // don't show in console!
        console.log('stack:', stack);
        console.log('calculationValue:', calculationValue);
        setCalculationValue((stack - parseFloat(calculationValue)).toString());
      } else if (operator === '*') {
        setCalculationValue((stack * parseFloat(calculationValue)).toString());
      } else if (operator === '/') {
        setCalculationValue((stack / parseFloat(calculationValue)).toString());
      }

      setStack(null);
      setOperator(null);
      return;
    }

    if (calculationValue[calculationValue.length - 1] === '.') {
      setCalculationValue(calculationValue + calctype);
    } else {
      // const number = parseFloat(calculationValue);
      setCalculationValue(parseFloat(parseFloat(calculationValue) + calctype).toString());
    }
  };

  return (
    <div className="container-lg calc-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="float-right">{ calculationValue }</h2>
            {/* <div className="input-group input-group-lg">
              <Input
                className="form-control"
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                readOnly
              />
            </div> */}
          </div>
        </div>

        <div className="row">
          <div className="row text-center my-4 flex-wrap">
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="&nbsp;"
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="&nbsp;"
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="&nbsp;"
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="AC"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="7"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="8"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="9"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="*"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="w-100" />
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="4"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="5"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="6"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="/"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="w-100" />
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="1"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="2"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="3"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="-"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="0"
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="."
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-primary btn-lg btn-block"
                type="button"
                calctype="="
                onClick={handleButtonEvent}
              />
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
                calctype="+"
                onClick={handleButtonEvent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
