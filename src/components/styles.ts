import Styled from 'styled-components';

export const AppWrapper = Styled.section`
    width: 80%;
    margin: 0 auto;
`;

export const StyledH3 = Styled.h3`
    color: grey;
`;

export const StyledDateContainer = Styled.span`
    color: #303f9f;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
`;

export const StyledPollsContainer = Styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
`;

export const StyledQuestionContainer = Styled.div`
    display: flex;
    flex: 1 1 400px;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background: #eee;
    }
`;

export const StyledDoughnut = Styled.div`
    width: 35px;
    min-width: 35px;
    height: 35px;
    border-radius: 50%;
    border-top: 25px solid #ff6d00;
    border-bottom: 25px solid #1565c0;
    border-left: 25px solid #ff6d00;
    border-right: 25px solid #1565c0;
    position: relative;
    span {
        font-size: 25px;
        /* margin: 0px 20%; */
        position: absolute;
        font-weight: bold;
        vertical-align: middle;
        left: 22%;
        top: 5px;
    }
`;

export const StyledQuestionWrapper = Styled.div`
    padding: 8px;
    h4 {
        margin: 4px 0;
    }
`;
