import { render } from "@testing-library/react";
import MovieCard from "./MovieCard";

describe("<MovieCard/> component", () => {
  it("should render with its props", () => {
    const props = {
      image:
        "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
      name: "Avengers",
      categories: "Horror",
      size: "big",
      description: "Description",
    };

    const { getByText } = render(
      <MovieCard
        image={props.image}
        name={props.name}
        categories={props.categories}
        size={props.size}
        description={props.description}
      />
    );

    expect(getByText(props.name)).toBeInTheDocument();
  });

  it("description shouldn't be if size is different to big", () => {
    const props = {
      image:
        "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
      name: "Avengers",
      categories: "Horror",
      size: "medium",
      description: "Description",
    };

    const { queryByText } = render(
      <MovieCard
        image={props.image}
        name={props.name}
        categories={props.categories}
        size={props.size}
        description={props.description}
      />
    );

    expect(queryByText(/props.description/)).toBeNull();
  });
});
