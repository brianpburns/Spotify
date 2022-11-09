import { Checkbox, InputField } from 'smart-builder-sdk';
import styled from 'styled-components';

export const Wrapper = styled.div<{ hasSrc: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ hasSrc }) => (hasSrc ? '100%' : '100px')};
`;

export const Info = styled.p`
  color: #808080;
  font-size: 14px;
`;

export const Error = styled.p`
  color: #ff3e51;
  font-size: 14px;
  margin-top: 4px;
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputField = styled(InputField)<{ hasValue: boolean }>`
  font-size: 20px;
  padding: 2px;
  font-weight: 400;
  color: ${({ hasValue }) => (hasValue ? '#303030' : '#8D8D8D')};
`;

export const Overlay = styled.div<{ compact: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 11;
  height: ${({ compact }) => (compact ? '80px' : '380px')};
`;

export const StyledCheckbox = styled(Checkbox)`
  label {
    font-size: 14px;
    color: #606060;
    font-weight: 400;
  }
`;
