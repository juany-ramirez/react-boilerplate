import React from 'react';
import styled from 'styled-components';
//import Button from './Button';

const InputGroup = styled.div.attrs({
  className: 'input-group'
})``;

const InputPrepend = styled.div.attrs({
  className: 'input-group-prepend'
})``;

const InputText = styled.span.attrs({
  className: 'input-group-text'
})``;

const TextArea = styled.textarea.attrs({
  className: 'form-control'
})``;

// $FlowFixMe
const AddMessage = props => (
  <InputGroup>
    <InputPrepend>
      <InputText>Mensaje</InputText>
    </InputPrepend>
    <TextArea />
  </InputGroup>
);

/** @component */
export default AddMessage;