import React from 'react';

import PieChart from '../PieChart';

import {
    Wrapper,
} from './styles';

interface IPollProps {
    chartData: any;
    onPollUpdate: any;
    selectedPollId: number;
}

export default class Poll extends React.PureComponent<IPollProps> {
    public render() {
        return (
            <Wrapper>
                <div>
                    <h3>
                        Is bitcoin worth the time and money that mining requires?
                        <span>
                            17 Jan 2018
                        </span>
                    </h3>
                    <PieChart
                        data={this.props.chartData}
                        onPollUpdate={this.props.onPollUpdate}
                        type='single'
                        pollId={this.props.selectedPollId}
                    />
                    <p>Total number of votes recorded: 182</p>
                </div>
            </Wrapper>
        )
    }
}