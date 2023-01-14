import * as React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";

const mockData = [
  { imdbID: "tt0848228", Title: "XYZ", Poster: "PQR" },
  { imdbID: "tt6320628", Title: "RLB", Poster: "PQR" },
  { imdbID: "tt1825683", Title: "VUT", Poster: "PQR" },
];

const selectedList = ["tt0848228", "tt1825683"];
describe("Plan Details Component", () => {
  it("Should check date field to be populated", () => {
    PlanDetailsTileComponent = render(
      <Carousel
        list={mockData}
        selectedList={selectedList}
        fevoriteMovie={jest.fn()}
      />
    );
    const { getByTestId } = PlanDetailsTileComponent;

    const date = getByTestId("contractdate");
    expect(date).toHaveTextContent("29 December 2023");
  });
});
