import styled from 'styled-components';

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 500px;
  padding-top: 20px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
