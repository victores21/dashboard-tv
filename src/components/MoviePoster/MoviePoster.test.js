import { render } from "@testing-library/react";
import MoviePoster from "./MoviePoster";

describe("<MoviePoster/> component", () => {
  it("should render with image prop", () => {
    const image =
      "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg";
    const { container } = render(<MoviePoster image={image} />);

    expect(container.querySelector("img").getAttribute("src")).toBe(image);
  });
});
