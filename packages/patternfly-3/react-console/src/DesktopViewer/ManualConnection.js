import React from 'react';
import PropTypes from 'prop-types';

import consoleDetailPropType from './consoleDetailPropType';
import { Form, FormGroup, Col } from 'patternfly-react';

const Detail = ({ title, value }) => (
  <FormGroup>
    <Col xs={5} className="manual-connection-pf-title">
      {title}
    </Col>
    <Col xs={7} className="manual-connection-pf-value">
      {value}
    </Col>
  </FormGroup>
);
Detail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

const ManualConnection = ({
  spice,
  vnc,
  textSpice,
  textVNC,
  textNoProtocol,
  textConnectWith,
  textManualConnection,
  textAddress,
  textSpiceAddress,
  textVNCAddress,
  textSpicePort,
  textVNCPort,
  textSpiceTlsPort,
  textVNCTlsPort
}) => {
  const msg = spice || vnc ? textConnectWith : textNoProtocol;
  const address = spice && vnc && spice.address === vnc.address && spice.address; // merge value if equal

  return (
    <div className="manual-connection-pf">
      <h2>{textManualConnection}</h2>
      <p>{msg}</p>
      <Form horizontal>
        {address && <Detail title={textAddress} value={address} />}
        {!address && spice && <Detail title={textSpiceAddress} value={spice.address} />}
        {spice && spice.port && <Detail title={textSpicePort} value={spice.port} />}
        {spice && spice.tlsPort && <Detail title={textSpiceTlsPort} value={spice.tlsPort} />}
        {!address && vnc && <Detail title={textVNCAddress} value={vnc.address} />}
        {spice && vnc.port && <Detail title={textVNCPort} value={vnc.port} />}
        {spice && vnc.tlsPort && <Detail title={textVNCTlsPort} value={vnc.tlsPort} />}
      </Form>
    </div>
  );
};

ManualConnection.propTypes = {
  spice: consoleDetailPropType,
  vnc: consoleDetailPropType,

  textManualConnection: PropTypes.string.isRequired /** Internationalization */,
  textSpice: PropTypes.string.isRequired,
  textVNC: PropTypes.string.isRequired,
  textNoProtocol: PropTypes.string.isRequired,
  textConnectWith: PropTypes.string.isRequired,

  textAddress: PropTypes.string.isRequired,
  textSpiceAddress: PropTypes.string.isRequired,
  textVNCAddress: PropTypes.string.isRequired,
  textSpicePort: PropTypes.string.isRequired,
  textVNCPort: PropTypes.string.isRequired,
  textSpiceTlsPort: PropTypes.string.isRequired,
  textVNCTlsPort: PropTypes.string.isRequired
};

ManualConnection.defaultProps = {
  spice: null,
  vnc: null
};

export default ManualConnection;
