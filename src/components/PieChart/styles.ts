import Styled from 'styled-components';

export const ChartWrapper = Styled.div`
    width: 500px;
`;

export const PollButton = Styled.button`
    padding: 8px 32px;
    width: 100px;
    margin: 8px 0;
    display: block;
    background: ${(props: {color?: string}) => props.color ? props.color : 'white'};
    font-size: 14px;
    color: white;
    cursor: pointer;
`;

export const ChartContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;