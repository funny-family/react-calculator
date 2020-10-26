import { useState } from 'react';

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

  const parsedFloatCalculationValue = parseFloat(calculationValue);

  const performOperation = () => {
    if (operator !== null) {
      switch (operator) {
        case signEnum.plus:
          setStack(stack + parsedFloatCalculationValue);
          break;

        case signEnum.minus:
          setStack(stack - parsedFloatCalculationValue);
          break;

        case signEnum.multiply:
          setStack(stack * parsedFloatCalculationValue);
          break;

        case signEnum.divide:
          setStack(stack / parsedFloatCalculationValue);
          break;

        default:
      }
    } else {
      setStack(parsedFloatCalculationValue);
    }
  };

  const calculateValue = () => {
    switch (operator) {
      case signEnum.plus:
        setCalculationValue((stack + parsedFloatCalculationValue).toString());
        break;

      case signEnum.minus:
        setCalculationValue((stack - parsedFloatCalculationValue).toString());
        break;

      case signEnum.multiply:
        setCalculationValue((stack * parsedFloatCalculationValue).toString());
        break;

      case signEnum.divide:
        setCalculationValue((stack / parsedFloatCalculationValue).toString());
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
          setCalculationValue(parseFloat(parsedFloatCalculationValue + calctype).toString());
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
