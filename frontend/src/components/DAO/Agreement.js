import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../stylesheets/Dapp.scss";

class Agreement extends Component {
  render() {
    return (
      <Container className="my-5 p-4">
        <div className="paper-stack">
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <h1 className="agreement-text" style={{ fontWeight: "bold" }}>
              <img
                className="logo"
                src="logos/og-dao-v2.png"
                title="OG DAO"
                alt="OG DAO"
              /> Participation Agreement 2021
              </h1>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <h5 className="agreement-text text-center mb-3">
                <b>Agreement Terms</b>
              </h5>
              <p className="agreement-text">
                Please read this participation "agreement" carefully before confirming your intent to be bound by it and participating in the OG DAO. This agreement includes the terms of participation in the OG DAO. You understand, agree and confirm that:
              </p>
              <ol className="mb-5">
                <li className="agreement-text">
                  The OG DAO is an experiment in the field of decentralized governance structures, in which participation is entirely at your own risk.
                </li>
                <li className="agreement-text">
                  This agreement has legal consequences and by entering into this agreement you release all rights, claims, or other causes of action whether in equity or law you may have against OG DAO service providers or other OG DAO participants. You also agree to waive and limit any potential liability of OG DAO service providers or other OG DAO participants.
                </li>
                <li className="agreement-text">
                  You are sophisticated and have sufficient technical understanding of the functionality, usage, storage, transmission mechanisms, and intricacies associated with cryptographic tokens, token storage facilities (including wallets), blockchain technology, and blockchain-based software systems.
                </li>
              </ol>
              <h5 className="agreement-text">
                There are 2 options:
              </h5>
              <ol>
                <li className="agreement-text">
                  I, the owner of this address, Opt-out completely from the OG DAO.
                </li>
                <li className="agreement-text">
                  I, the owner of this address, Opt-in to the OG DAO. I have read and agreed to the participation agreement below.
                </li>
              </ol>
              <br></br>
              <h5 className="agreement-text text-center" style={{wordBreak: 'break-all' }}>
                I, the owner of address {this.props.selectedAddress}:
              </h5>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 1 }} className="text-center mt-4">
              <Button
                className="mb-4 px-3 py-2"
                variant="success"
                disabled={this.props.selectedAddress === undefined}
                onClick={this.props.optIn}
              >
                Opt In
              </Button>
            </Col>
            <Col md={{ span: 4, offset: 2 }} className="text-center mt-4">
              <Button
                className="mb-4 px-3 py-2"
                variant="danger"
                disabled={this.props.selectedAddress === undefined}
                onClick={this.props.optOut}
              >
                Opt Out
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <p className="agreement-text">
                If you do not opt-in or out, you are still a member of the OG DAO. You still have the same voting power, however you will not receive airdrops, payments, or other benefits. This to protect the OG DAO, it’s members, and assets.
              </p>
              <br/>
            </Col>
          </Row>
        </div>
        <div className="text-center mt-5 mb-2 p-4">
          <h5 className="mt-3">Total: {this.props.totalAccounts}</h5>
          {this.props.adminAddress === this.props.selectedAddress && (
            <Button
              className="my-4 px-3 py-2"
              variant="warning"
              disabled={this.props.selectedAddress === undefined}
              onClick={this.props.addMembers}
            >
              Add Members
            </Button>
          )}
        </div>
        <Row className="my-4" style={{ border: "1px solid #d3d3d3" }}>
          <Col md={{ span: 4, offset: 1 }} className="text-center mt-4">
            <table className="table table-bordered my-4">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Opted In</th>
                </tr>
              </thead>
              <tbody>
                {this.props.optedInAccounts.map((account, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{this.props.minifyHash(account)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Col>
          <Col md={{ span: 4, offset: 2 }} className="text-center mt-4">
            <table className="table table-bordered my-4">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Opted Out</th>
                </tr>
              </thead>
              <tbody>
                {this.props.optedOutAccounts.map((account, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{this.props.minifyHash(account)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Agreement;
