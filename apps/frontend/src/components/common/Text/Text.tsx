import * as S from './Text.styled';
import { TextProps } from './Text.types';

const Text = ({ children, as = 'p', variant, color, customCSS, className }: TextProps) => {
  return (
    <S.Tag as={as} $variant={variant} $color={color} $customCSS={customCSS} className={className}>
      {children}
    </S.Tag>
  );
};

export default Text;
