import { css } from 'styled-components';

export const TYPOGRAPHY = {
  // Title
  heading: css`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.4;
  `,
  body: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
  `,
} as const;
