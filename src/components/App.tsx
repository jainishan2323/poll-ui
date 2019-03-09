import React from 'react';
import Poll from './Poll';

import mockdata from './data';

import generateDefaultValue from '../utils/generateDefaultValue';

import {
    StyledH3,
    AppWrapper,
} from './styles';

interface IAppProps {
    title: string;
}

interface IAppState {
    selectedPollId: number;
    pollValues: any;
}
export default class App extends React.PureComponent<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        const pollValues = mockdata.map((poll) => generateDefaultValue(poll.answer.options));
        this.state = {
            selectedPollId: 3,
            pollValues,
        }
    }

    public onPollUpdate = (pollId, label) => {
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
                    chartData={pollValues[selectedPollId]}
                />
            </AppWrapper>
        )
    }
}