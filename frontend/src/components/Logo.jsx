import styled from 'styled-components';
import logoImage from '../assets/images/logoImage.png';

const LogoStyle = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  flex-shrink: 0;
  border-radius: 5px;
  background:
    url(${logoImage}),
    lightgray 50% / cover no-repeat;
  background-size: cover;
`;

function Logo() {
  return <LogoStyle alt="T4Y Logo" />;
}

export default Logo;
