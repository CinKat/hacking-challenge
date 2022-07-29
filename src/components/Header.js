import styled from '@emotion/styled';
import Logo from '../assets/icons/logo.svg';
import Phone from '../assets/icons/phone.svg';
import { colors } from '../styles/colors';
import { fonts, typography } from '../styles/typography';
import Icon from './Icon';

const HeaderWrap = styled.header`
  padding: 1.25rem 2rem;
  font-family: ${fonts.secondary};
  /* width: 100%; */
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 600px) {
    padding: 1.5rem 7.5rem;
  }
`
const StyleContact = styled.div`
  display: flex;
  align-items: center;
  gap:0.5rem;
  &::after {
    color: ${colors.blueberry[500]};
    ${typography.paragraph.regular_14};
    cursor: pointer;
    content: "Llámanos";
    @media (min-width: 600px) {
      content: "(01) 411 6001";
    }
  }
`
const StyleQuestion = styled.p`
  display: none;
  color: ${colors.gray[200]};
  @media (min-width: 600px) {
      display: block;
      margin-right: 1.4rem;
      ${typography.paragraph.regular_12};
  }
`



function Header() {
  return (
    <HeaderWrap>
      <Icon icon={Logo} width="5.75rem" height="1rem" />
      <StyleContact>
        <StyleQuestion>¿Tienes alguna duda?</StyleQuestion>
        <Icon icon={Phone} width="0.9rem" height="1.2rem" />
      </StyleContact>
    </HeaderWrap>
  )
}

export default Header;