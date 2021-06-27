import {Spin} from "antd";
import styled from 'styled-components';


const Loader = styled(Spin)`
  margin: 20px 0;
  text-align: center;
  position:absolute;
  z-index: 1;
  left: 50%;
  top: 60%;
  transform: translateX(-50%) ;
`

export default Loader;