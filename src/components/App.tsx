import React from 'react';
import Poll from './Poll';

import mockdata from './data';

import generateDefaultValue from '../utils/generateDefaultValue';
import { getDateString } from '../utils/getDateString';

import {
    IAppProps,
    IAppState,
    IQuestion,
} from './types'
import {
    StyledH3,
    AppWrapper,
    StyledPollsContainer,
    StyledDoughnut,
    StyledQuestionContainer,
    StyledQuestionWrapper,
    StyledDateContainer,
} from './styles';

export default class App extends React.PureComponent<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        // const pollValues = mockdata.map((poll) => generateDefaultValue(poll.answer.options));
        const pollValues = mockdata.reduce((acc, poll) => ({
            ...acc,
            [poll.id]: generateDefaultValue(poll.answer.options),
        }), {});
        this.state = {
            selectedPollId: 3,
            pollValues,
        }
    }

    public onPollUpdate = (pollId: number, label: string) => {
        this.setState((prevState) => ({
            pollValues: {
                ...prevState.pollValues,
                [pollId]: {
                    ...prevState.pollValues[pollId],
                    [label]: prevState.pollValues[pollId][label] + 1,
                }
            }
        }))
    }

    public onPollSelect = (id: number) => {
        this.setState({selectedPollId: id});
    }

    public renderPollQuestions = () => {
        return mockdata.map((question: IQuestion) => (
            <StyledQuestionContainer
                key={question.id}
                onClick={() => this.onPollSelect(question.id)}
            >
                <StyledDoughnut>
                    <span>%</span>
                </StyledDoughnut>
                <StyledQuestionWrapper>
                    <span>{getDateString(question.publishedDate)}</span>
                    <h4>
                        {question.title}
                    </h4>
                </StyledQuestionWrapper>
            </StyledQuestionContainer>
        ))
    }
    public render() {
        const {
            selectedPollId,
            pollValues,
        } = this.state;
        return (
            <AppWrapper>
                <StyledH3>{this.props.title}</StyledH3>
                <Poll
                    onPollUpdate={this.onPollUpdate}
                    selectedPollId={selectedPollId}
                    polldata={mockdata.find((poll) => poll.id === selectedPollId)}
                    chartData={pollValues[selectedPollId]}
                />
                <StyledPollsContainer>
                    {this.renderPollQuestions()}
                </StyledPollsContainer>
            </AppWrapper>
        )
    }
}