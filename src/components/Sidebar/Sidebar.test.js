import { fireEvent, render } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("<Sidebar/> component", () => {
  it("should render disabled with no sidebar--open class", () => {
    const { container } = render(<Sidebar />);

    expect(container.getElementsByClassName("sidebar--open").length).toBe(0);
  });

  it("should add class sidebar--open if isOpen is true", () => {
    const { container } = render(<Sidebar isOpen={true} />);

    expect(container.getElementsByClassName("sidebar--open").length).toBe(1);
  });

  it("should remove class sidebar--open if onClose is clicked", () => {
    const onCloseFunction = jest.fn();

    const { getByText } = render(
      <Sidebar isOpen={true} onClose={onCloseFunction} />
    );

    fireEvent.click(getByText(/X/));

    expect(onCloseFunction).toHaveBeenCalled();
  });
});
