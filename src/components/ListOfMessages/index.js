// @flow
import React, { Component } from 'react';
import Mensaje from '../Mensaje';

type Props = {
  Messages: any
};

class ListOfMessages extends Component<Props> {
  render() {
    return this.props.Messages.map((x, i) => (
      <Mensaje key={i} title={x.title} mensaje={x.mensaje} publicMod={x.publicMod} />
    ));
  }
}

export default ListOfMessages;
