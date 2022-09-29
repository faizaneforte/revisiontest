import React from "react";
import styled from 'styled-components';


const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: linear-gradient(to bottom, #00ffff 0%, #ff6699 100%);
`;

const Dashboard = () => {
    return (
      <Wrapper>
        <h1>Welcome to Dashboard</h1>
      </Wrapper>
    )
}


export default Dashboard;