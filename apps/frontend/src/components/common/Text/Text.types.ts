import { ReactNode } from 'react';
import { CSSObject } from 'styled-components';

import { TYPOGRAPHY } from '@/foundation';

export interface TextProps {
  children: ReactNode;
  as?: TextTag;
  variant: keyof typeof TYPOGRAPHY;
  color?: CSSObject['color'];
  customCSS?: CSSObject;
  className?: string;
}

export type TextTag =
  | 'b'
  | 'caption'
  | 'em'
  | 'del'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'i'
  | 'label'
  | 'p'
  | 'pre'
  | 'small'
  | 'span'
  | 'strong';
