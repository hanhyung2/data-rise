import { PropsWithChildren } from 'react';

import * as S from './Layout.styled.ts';

const Layout = ({ children }: PropsWithChildren) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Layout;
