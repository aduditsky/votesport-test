import styled from 'styled-components';

export const FooterStyles = styled.footer`
  width: 100%;

  padding: 0 32px;
`;

export const Container = styled.div`
  border-top: 1px solid #e4e4e4;
  padding: 32px 0;

  display: flex;

  gap: 32px;

  align-items: center;
  justify-content: space-between;
`;

export const Credentials = styled.div`
  display: flex;
  gap: 8px;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 0.86em;
    line-height: 130%;

    color: #999999;
  }
`;

export const Navigations = styled.nav`
  display: flex;
  gap: 20px;

  flex: 1;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 0.86em;
    line-height: 130%;
    color: #1e1e1e;
  }
`;

export const Socials = styled.div`
  display: flex;

  align-items: center;

  gap: 20px;

  .separator {
    height: 14px;
    width: 1px;
    background-color: #d3d3d3;
  }

  .icons-holder {
    display: flex;
    gap: 10px;
  }
`;
