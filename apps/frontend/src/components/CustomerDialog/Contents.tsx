import * as S from './CustomerDialog.styled.ts';

import { useGetCustomerPurchases } from '@/hooks/api';
import { Text } from '@/components/common';

interface ContentsProps {
  customerId: number;
}

const Contents = ({ customerId }: ContentsProps) => {
  const { data } = useGetCustomerPurchases({
    pathVariable: {
      customerId,
    },
  });

  return (
    <S.ContentsWrapper>
      {data?.map(({ product, price, imgSrc, date, quantity }, index) => (
        <S.ProductWrapper key={`${product}-${index}`}>
          <S.ProductImage src={imgSrc} alt={product} />
          <S.ProductDetails>
            <Text as='h4' variant='heading'>
              {product}
            </Text>
            <Text variant='body'>가격: {price.toLocaleString()}</Text>
            <Text variant='body'>수량: {quantity.toLocaleString()}</Text>
            <Text variant='body'>구매일: {date}</Text>
          </S.ProductDetails>
        </S.ProductWrapper>
      ))}
    </S.ContentsWrapper>
  );
};

export default Contents;
