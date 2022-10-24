import React from "react";
import "common/polyfills/polyfills.full";
import "focus-visible";
import { MemoryRouter } from "react-router";

export const decorators = (Story) => <MemoryRouter>{Story()}</MemoryRouter>;
