import React from 'react';
import styled from 'styled-components';
import MainVideo from '../assets/selfi-fashion.mp4'


const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    video{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`
const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
`

const Title = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.text};

    div{
        display: flex;
        flex-didection: row;
    }

    h1{
        font-family: 'Kaushan Script';
        font-size: ${props => props.theme.fontBig};
        text-shadow: 1px 1px 30px ${props => props.theme.body};
    }
    h2{
        font-family: "Sirin Stencil";
        font-size: ${props => props.theme.fontlg};
        text-shadow: 1px 1px 10px ${props => props.theme.body};
        font-weight: 300;
        text-transfrom: capitalize;
    }
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <DarkOverlay />
            <Title>
                <div className="">
                    <h1 data-scroll data-scroll-delay='0.20' data-scroll-speed='4'>S</h1>
                    <h1 data-scroll data-scroll-delay='0.17' data-scroll-speed='4'>e</h1>
                    <h1 data-scroll data-scroll-delay='0.15' data-scroll-speed='4'>l</h1>
                    <h1 data-scroll data-scroll-delay='0.12' data-scroll-speed='4'>f</h1>
                    <h1 data-scroll data-scroll-delay='0.10' data-scroll-speed='4'>i</h1>
                </div>
                <h2 data-scroll data-scroll-delay='0.10' data-scroll-speed='2'>Stay Real, Be Confident</h2>
            </Title>
            <video src={MainVideo} type='video.mp4' autoPlay muted loop />
        </VideoContainer>
    );
};

export default CoverVideo;