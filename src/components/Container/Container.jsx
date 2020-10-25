import Input from '../Input';
import Button from '../Button';

import './style.css';

function Container() {
  return (
    <div className="container-lg calc-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="input-group input-group-lg">
              <Input
                type="text"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="row text-center my-4 flex-wrap">
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                7
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                8
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                9
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                &times;
              </Button>
            </div>
            <div className="w-100" />
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                4
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                5
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                6
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                ÷
              </Button>
            </div>
            <div className="w-100" />
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                1
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                2
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                3
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                -
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                0
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                .
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-primary btn-lg btn-block"
                type="button"
              >
                =
              </Button>
            </div>
            <div className="col-3 py-1">
              <Button
                className="btn btn-light btn-lg btn-block"
                type="button"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
