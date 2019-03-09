import Styled from 'styled-components';

export const Wrapper = Styled.section`
    paddIng: 8px 16px;
    background: #eee;
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
