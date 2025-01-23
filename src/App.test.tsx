import App from "./App";
import React from "react";
import test from "node:test";
import { render, screen } from "@testing-library/react";

test('Testing React app', () => {
  render(<App />);

});
