import React from 'react';

import PieChart from '../PieChart';
import { getDateString } from '../../utils/getDateString';

import {
    IPollProps,
} from '../types'
import {
    Wrapper,
} from './styles';
import {
    StyledDateContainer,
} from '../styles';

export default class Poll extends React.PureComponent<IPollProps> {
    public render() {
        const {
            polldata,
            chartData,
        } = this.props;
        const totalVotes = Object.keys(chartData).reduce((acc, option) => acc + chartData[option], 0)
        return (
            <Wrapper>
                <div>
                    <h3>
                        {polldata.title}
                        <StyledDateContainer>
                            {getDateString(polldata.publishedDate)}
                        </StyledDateContainer>
                    </h3>
                    <PieChart
                        data={this.props.chartData}
                        onPollUpdate={this.props.onPollUpdate}
                        type={polldata.answer.type}
                        pollId={this.props.selectedPollId}
                    />
                    <p>Total number of votes recorded: <b>{totalVotes}</b></p>
                </div>
            </Wrapper>
        )
    }
}