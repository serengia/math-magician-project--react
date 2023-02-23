// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";

import Quote from "./Quote";

it("render quotes correctly", () => {
  const quoteObj = {
    quote: "Test quote",
    by: "Mandela",
  };
  const tree = renderer.create(<Quote quoteObj={quoteObj} />).toJSON();
  expect(tree).toMatchSnapshot();
});
