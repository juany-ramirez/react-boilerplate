import styled from 'styled-components';
import React from 'react';

const PublicPrivacy = styled.span.attrs({
  className: 'badge badge-primary'
})``;
const PrivatePrivacy = styled.span.attrs({
  className: 'badge badge-danger'
})``;
// $FlowFixMe
const Privacy = props => {
  const MyPrivacy = props.publicMod ? PrivatePrivacy : PublicPrivacy;
  const message = props.publicMod ? 'Private' : 'Public';
  return <MyPrivacy>{message}</MyPrivacy>;
};
/** @component */
export default Privacy;
