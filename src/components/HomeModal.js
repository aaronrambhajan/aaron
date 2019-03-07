// @flow

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class HomeModal extends React.Component {
  props: {
    header: string,
    description: string,
    link: string,
    style: object,
    headerClass: string,
    emojiWork: string,
    text: string,
    tech: string,
  };

  state: {
    showingModal: boolean,
  };

  state = {
    showingModal: false,
  };

  toggleModal = () => {
    this.setState({
      showingModal: !this.state.showingModal,
    });
  };

  render = () => {
    return (
      <div onClick={this.toggleModal}>
        <div
          className="home-hover"
          style={{
            fontWeight: 600,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            ...this.props.style,
          }}
        >
          <div style={{ maxWidth: '75%' }}>
            <h1 style={{ fontSize: '1.35em' }}>{this.props.header}</h1>
            <p
              style={{
                fontSize: '0.8em',
                fontFamily: 'times',
                opacity: 0.8,
                fontWeight: 100,
              }}
            >
              {this.props.description}
            </p>
          </div>
          <div
            className="arrow"
            style={{
              fontFamily:
                'BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif, -apple-system',
              fontSize: '200%',
              marginLeft: '1em',
            }}
          >
            ↗
          </div>
        </div>

        <Modal
          isOpen={this.state.showingModal}
          toggle={this.toggle}
          keyboard={true}
          centered={true}
          autoFocus={true}
          backdropTransition={500}
        >
          <ModalHeader
            className={this.props.headerClass}
            toggle={this.toggleModal}
            style={{ color: 'white', fontWeight: 600 }}
          >
            <div>{this.props.header}</div>
            <div style={{ fontWeight: 100, fontSize: '0.7em' }}>
              {this.props.description}
            </div>
          </ModalHeader>
          <ModalBody>{this.props.modalText.description}</ModalBody>
          <ModalFooter>
            <div className="row-1 text-left" style={{ fontSize: '1.5em' }}>
              {this.props.emojiWork}
            </div>

            <Button size="sm" color="secondary" onClick={this.toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };
}
