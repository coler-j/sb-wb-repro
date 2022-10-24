import React from "react";
import "common/polyfills/polyfills.full";
import "focus-visible";
import { MemoryRouter } from "react-router";
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};

export const decorators = (Story) => <MemoryRouter>{Story()}</MemoryRouter>;
