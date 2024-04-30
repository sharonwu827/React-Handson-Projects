import { useState } from "react";
import { PasswordServices } from "../services/PasswordServices";
export const PasswordGenerator = () => {
  const [state, setState] = useState({
    generatedPassword: "",
    passwordLength: 0,
    symbol: false,
    number: false,
    lower: false,
    upper: false,
  });
  const updateInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const updateCheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let passwordObj = PasswordServices.getPasswordObj(state);
    let thePassword = PasswordServices.generatePassword(
      passwordObj,
      state.passwordLength
    );
    setState({ ...state, generatedPassword: thePassword });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-header bg-warning">
                <p className="h4">Password Generator</p>
              </div>
              <div className="card-body bg-warning">
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text">Password</span>
                      <input
                        type="text"
                        value={state.generatedPassword}
                        onChange={updateInput}
                        name="generatedPassword"
                        className="form-control"
                        placeholder="Generated Password"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <input
                        required={true}
                        value={state.passwordLength}
                        name="passwordLength"
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="password length"
                      />
                      <span className="input-group-text">Password Length</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text">
                        <input
                          onChange={updateCheck}
                          name="symbol"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        disabled={true}
                        className="form-control"
                        placeholder="Symbols"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text">
                        <input
                          onChange={updateCheck}
                          name="number"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        disabled={true}
                        className="form-control"
                        placeholder="Numbers"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text">
                        <input
                          onChange={updateCheck}
                          name="lower"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        disabled={true}
                        className="form-control"
                        placeholder="Lowercase Letters"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="input-group">
                      <span className="input-group-text">
                        <input
                          onChange={updateCheck}
                          name="upper"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        disabled={true}
                        className="form-control"
                        placeholder="Uppercase Letters"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      value="Generate"
                      className="btn btn-outline-dark"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
