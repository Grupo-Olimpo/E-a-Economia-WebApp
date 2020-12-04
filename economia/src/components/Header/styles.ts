import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: -1;
  left: 0;
  height: 128px;
  padding: 15px 30px;
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.25);
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  > img {
    height: 100px;
    width: 100px;
    margin-right: 16px;
  }
`;
