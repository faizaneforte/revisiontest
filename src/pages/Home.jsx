import React from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';
import { Button} from "antd";



const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: linear-gradient(to bottom, #ff0066 0%, #ff99cc 100%);
`;

const Hello = styled(Link)`
color: white;
`;


const Home = () => {
 
    return (
        <>
            <Wrapper>
                <Hello to="SignIn">SignIn</Hello>
                <Hello to="SignUp">SignUp</Hello>
                <Button> Click
                <iframe><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></iframe>
                </Button>
            </Wrapper>
        </>
    )
}

export default Home;
