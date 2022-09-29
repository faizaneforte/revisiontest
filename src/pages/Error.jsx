import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: linear-gradient(to bottom, #ff0000 0%, #ff99cc 100%);
`;


const Error = () => {
    return (
      <Wrapper>
        <h1>Error this does not exist</h1>
      </Wrapper>
    )
}

export default Error;