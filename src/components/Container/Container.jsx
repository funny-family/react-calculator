import { useState } from 'react';

// import Input from '../Input';
import Button from '../Button';

import './style.css';

const signEnum = {
  plus: '+',
  minus: '-',
  multiply: '*',
  divide: '/',
  equals: '=',
  dot: '.',
  clearAll: 'AC'
};

function Container() {
  const [calculationValue, setCalculationValue] = useState('0');
  const [stack, setStack] = useState(null);
  const [operator, setOperator] = useState(null);

  // const [inputValue, setInputValue] = useState('');

  const performOperation = () => {
    if (operator !== null) {
      switch (operator) {
        case signEnum.plus:
          setStack(stack + parseFloat(calculationValue));
          break;

        case signEnum.minus:
          setStack(stack - parseFloat(calculationValue));
          break;

        case signEnum.multiply:
          setStack(stack * parseFloat(calculationValue));
          break;

        case signEnum.divide:
          setStack(stack / parseFloat(calculationValue));
          break;

        default:
      }
    } else {
      setStack(parseFloat(calculationValue));
    }
  };

  const calculateValue = () => {
    switch (operator) {
      case signEnum.plus:
        setCalculationValue((stack + parseFloat(calculationValue)).toString());
        break;

      case signEnum.minus:
        setCalculationValue((stack - parseFloat(calculationValue)).toString());
        break;

      case signEnum.multiply:
        setCalculationValue((stack * parseFloat(calculationValue)).toString());
        break;

      case signEnum.divide:
        setCalculationValue((stack / parseFloat(calculationValue)).toString());
        break;

      default:
    }
  };

  const handleButtonEvent = (calctype) => () => {
    switch (calctype) {
      case signEnum.plus: {
        performOperation();

        setCalculationValue('0');
        setOperator(signEnum.plus);
        return;
      }

      case signEnum.clearAll: {
        setCalculationValue('0');
        setStack(null);
        setOperator(null);
        return;
      }

      case signEnum.dot: {
        if (calculationValue.includes(signEnum.dot)) return;

        setCalculationValue(`${calculationValue}.`);
        return;
      }

      case signEnum.minus: {
        performOperation();

        setCalculationValue('0');
        setOperator(signEnum.minus);
        return;
      }

      case signEnum.multiply: {
        performOperation();

        setCalculationValue('0');
        setOperator(signEnum.multiply);
        return;
      }

      case signEnum.divide: {
        performOperation();

        setCalculationValue('0');
        setOperator(signEnum.divide);
        return;
      }

      case signEnum.equals: {
        if (!operator) return;

        calculateValue();

        setStack(null);
        setOperator(null);
        return;
      }

      default: {
        if (calculationValue[calculationValue.length - 1] === signEnum.dot) {
          setCalculationValue(calculationValue + calctype);
        } else {
          setCalculationValue(parseFloat(parseFloat(calculationValue) + calctype).toString());
        }
      }
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
