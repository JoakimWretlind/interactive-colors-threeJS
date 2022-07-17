import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(#5e5e5e, #0e0e0e);
    color: white;    
`;

export const InnerWrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 156rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 1000px){
        display: flex;
        flex-direction: row;
        padding: 0 3rem;
    }
`;

export const Card = styled.div`
    height: 60vh;
    border-radius: 1.3rem;
    box-shadow: 2rem 4rem 3.3rem rgba(0,0,0,0.3);
    width: 48vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(#aaaaaa, #505050);
`;

export const ProductCanvas = styled.div`
    width: 45vw;
    height: 48vh;
    background:white;
    box-shadow:  1rem 1.5rem 1.5rem .6rem #00020e66;
    border-radius: 0;
    margin-bottom: 2rem;
`;

export const Colors = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 24vw;
`;

export const Picker = styled.div`
    display: flex;
    align-items: center;
`;

export const Label = styled.label`
    margin: 0 .5rem;
`;