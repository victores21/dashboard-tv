import { fireEvent, render } from "@testing-library/react";
import Login from "./Login";
import { Provider } from "react-redux";
import store from "../../app/store";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Login/> component", () => {
  it("should render", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(getByText(/USERNAME/).textContent).toBe("USERNAME");
  });

  it("should navigate to Dashboard if login is ok", () => {
    const { getByRole, getByPlaceholderText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const usernameInput = getByPlaceholderText(/username/i);
    const passwordInput = getByPlaceholderText(/password/i);
    const loginButton = getByRole("button", { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: "victores21" } });
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    fireEvent.click(loginButton);

    expect(usernameInput.getAttribute("value")).toBe("victores21");

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/dashboard");
  });

  it("shouldn't navigate to Dashboard if login is not ok", () => {
    const { getByRole, getByPlaceholderText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const usernameInput = getByPlaceholderText(/username/i);
    const passwordInput = getByPlaceholderText(/password/i);
    const loginButton = getByRole("button", { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: "victores21s" } });
    fireEvent.change(passwordInput, { target: { value: "12345s" } });
    fireEvent.click(loginButton);

    expect(mockedUsedNavigate).not.toHaveBeenCalledWith("/dashboard");
  });
});
