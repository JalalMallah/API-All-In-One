import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, Paragraph, Wrapper } from 'styles/MyStyledComponents';

const demo_cors_link = 'https://cors-anywhere.herokuapp.com/corsdemo';

export default function RequestPanel({ setShouldShowRequestPanel }) {
  function handleButtonClick() {
    setTimeout(() => setShouldShowRequestPanel(false), 2000);
  }

  return (
    <Wrapper>
      <Paragraph>
        If you're seeing this message it means that the access to the server has timed out. In order
        to get access to it, click the button below and on the next page click on 'Request temporary
        access to demo server'. After the confirmation appears, you can come back here and check the
        weather for your city!
      </Paragraph>
      <StyledButton as='a' href={demo_cors_link} target='_blank' onClick={handleButtonClick}>
        Request access
      </StyledButton>
    </Wrapper>
  );
}

RequestPanel.propTypes = {
  setShouldShowRequestPanel: PropTypes.func.isRequired,
};

const StyledButton = styled(Button)`
  display: inline-block;
`;
