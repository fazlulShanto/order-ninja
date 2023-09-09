import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
// import App from "../App";
import { handleErrorMessage } from "../services/pureFunction";

// src/__ tests __/App.test.tsx
const errorData = [
  {
    response: {
      data: {
        error: "error data",
      },
    },
  },
  {
    response: {
      data: {
        data: "error data",
      },
    },
  },
];

test("demo", () => {
  expect(true).toBe(true);
});

// test("Renders the main page", () => {
//   render(<App />);
//   expect(true).toBeTruthy();
// });

test("test first pure function", async () => {
  const res = await handleErrorMessage(errorData[0]);
  expect(res).toStrictEqual("error data");
});

test("test first pure function", async () => {
  const res2 = await handleErrorMessage(errorData[1]);
  expect(res2).toStrictEqual("error data");
});
