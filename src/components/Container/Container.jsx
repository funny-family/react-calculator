import { useState } from 'react';

// import Input from '../Input';
import Button from '../Button';

import './style.css';

function Container() {
  const [calculationValue, setCalculationValue] = useState('0');
  const [stack, setStack] = useState(null);
  const [operator, setOperator] = useState(null);

  // const [inputValue, setInputValue] = useState('');

  const performOperation = (sign) => {
    if (operator !== null) {
      switch (operator) {
        case sign.plus:
          setStack(stack + parseFloat(calculationValue));
          break;

        case sign.minus:
          setStack(stack - parseFloat(calculationValue));
          break;

        case sign.multiply:
          setStack(stack * parseFloat(calculationValue));
          break;

        case sign.divide:
          setStack(stack / parseFloat(calculationValue));
          break;

        default:
      }
    } else {
      setStack(parseFloat(calculationValue));
    }
  };

  const calculateValue = (sign) => {
    switch (operator) {
      case sign.plus:
        setCalculationValue((stack + parseFloat(calculationValue)).toString());
        break;

      case sign.minus:
        setCalculationValue((stack - parseFloat(calculationValue)).toString());
        break;

      case sign.multiply:
        setCalculationValue((stack * parseFloat(calculationValue)).toString());
        break;

      case sign.divide:
        setCalculationValue((stack / parseFloat(calculationValue)).toString());
        break;

      default:
    }
  };

  const handleButtonEvent = (calctype) => () => {
    // console.log('calctype:', calctype);
    const signEnum = {
      plus: '+',
      minus: '-',
      multiply: '*',
      divide: '/',
      equals: '=',
      dot: '.',
      clearAll: 'AC'
    };

    switch (calctype) {
      case signEnum.clearAll: {
        setCalculationValue('0');
        setStack(null);
        setOperator(null);
        break;
      }

      case sign.dot: {
        if (calculationValue.includes(sign.dot)) return;

        setCalculationValue(`${calculationValue}.`);
        break;
      }

      case sign.plus:
        performOperation(sign);

        setCalculationValue('0');
        setOperator(sign.plus);
        break;

      case sign.minus:
        performOperation(sign);

        setCalculationValue('0');
        setOperator(sign.minus);
        break;

      case sign.multiply:
        performOperation(sign);

        setCalculationValue('0');
        setOperator(sign.multiply);
        break;

      case sign.divide:
        performOperation(sign);

        setCalculationValue('0');
        setOperator(sign.divide);
        break;

      case sign.equals:
        if (!operator) return;

        calculateValue(sign);

        setStack(null);
        setOperator(null);
        break;

      default:
    }

    // if (calctype === sign.clearAll) {
    //   setCalculationValue('0');
    //   setStack(null);
    //   setOperator(null);
    //   return;
    // }

    // if (calctype === sign.dot) {
    //   if (calculationValue.includes(sign.dot)) return;

    //   setCalculationValue(`${calculationValue}.`);
    //   return;
    // }

    // if (calctype === sign.plus) {
    //   performOperation(sign);

    //   setCalculationValue('0');
    //   setOperator(sign.plus);
    //   return;
    // }

    // if (calctype === sign.minus) {
    //   performOperation(sign);

    //   setCalculationValue('0');
    //   setOperator(sign.minus);
    //   return;
    // }

    // if (calctype === sign.multiply) {
    //   performOperation(sign);

    //   setCalculationValue('0');
    //   setOperator(sign.multiply);
    //   return;
    // }

    // if (calctype === sign.divide) {
    //   performOperation(sign);

    //   setCalculationValue('0');
    //   setOperator(sign.divide);
    //   return;
    // }

    // if (calctype === sign.equals) {
    //   if (!operator) return;

    //   calculateValue(sign);

    //   setStack(null);
    //   setOperator(null);
    //   return;
    // }

    if (calculationValue[calculationValue.length - 1] === sign.dot) {
      setCalculationValue(calculationValue + calctype);
    } else {
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
