import React from 'react';
import {Doughnut} from 'react-chartjs-2';

import {
    ChartWrapper,
    PollButton,
    ChartContainer,
} from './styles';

interface IPieChartProps {
    data: any;
    onPollUpdate: (pollId: number, label: string) => {};
    type: string;
    pollId: number;
}

const singlePollColors = ['#ff6d00', '#1565c0'];
const multiPollColors = ['#ff6d00', '#1565c0', '#c2185b', '#d500f9', '#1de9b6', '#fdd835'];


export default class PieChart extends React.Component<IPieChartProps> {

    public getChartConfig = () => {
        const {
            data,
            type,
        } = this.props;

        const labels = Object.keys(data);
        const chartData = labels.map((label: string) => data[label]);
        const backgroundColor = type === 'single' ? singlePollColors : multiPollColors;

        return {
            datasets: [
                {
                    data: chartData,
                    backgroundColor,
                }
            ],
            labels,
        }
    }

    renderPollButtons = (labels) => {
        const {
            pollId,
        } = this.props;
        return (
            <>
                {
                    labels.map((label, index) => (
                        <PollButton
                            key={label}
                            color={multiPollColors[index]}
                            onClick={() => this.props.onPollUpdate(pollId, label)}
                        >
                            {label}
                        </PollButton>
                    ))
                }
            </>
        )
    }

    public render() {
        const data = this.getChartConfig();
        return (
            <ChartContainer>
                <div>
                    {
                        this.renderPollButtons(data.labels)
                    }
                </div>
                <ChartWrapper>
                    <Doughnut data={data} />
                </ChartWrapper>
            </ChartContainer>
        )
    }
}