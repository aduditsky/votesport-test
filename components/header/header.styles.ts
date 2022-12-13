import styled from 'styled-components';

export const HeaderStyles = styled.header`
  position: sticky;
  top: 0;
  width: 100%;

  z-index: 10;

  min-height: 50px;

  background: #1e1e1e;
`;

export const Container = styled.div`
  display: flex;
  gap: 23px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 23px;

  width: fit-content;
  border: 1px solid #404040;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 20px;

  justify-content: center;
  align-items: center;

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    /* v2/fff */
    color: #ffffff;
    text-decoration: none;
  }
`;

export const UserNav = styled.div`
  display: flex;

  gap: 20px;

  .user-nav {
    display: flex;
    gap: 15px;
    color: #fff;

    .language {
      position: relative;

      height: fit-content;
      display: flex;

      &:after {
        content: '>';

        position: absolute;
        font-size: 10px;

        top: 50%;
        right: -10px;

        transform: translateY(-50%) rotate(90deg);
      }
    }
  }
`;
