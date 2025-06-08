import { FallbackProps } from 'react-error-boundary';

import * as S from './ErrorBoundary.styled.ts';

import { Text } from '@/components/common';

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <S.ErrorWrapper>
      <Text variant='body'>문제가 발생했습니다: {error?.message}</Text>
      <S.ResetButton onClick={resetErrorBoundary}>다시 시도</S.ResetButton>
    </S.ErrorWrapper>
  );
};

export default Error;
