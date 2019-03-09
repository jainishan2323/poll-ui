import React from 'react';
import {Doughnut} from 'react-chartjs-2';

import {
    ChartWrapper,
    PollButton,
    ChartContainer,
} from './styles';

interface IPieChartProps {
    data: any;
    onPollUpdate: any;
    type: string;
    pollId: number;
}

// const data = {
//     datasets: [{
//         data: [20, 80],
        
//     }],
//     labels: ['No', 'Yes'],
// }

const singlePollColors = ['#ff6d00', '#1565c0'];
const multiPollColors = [];


export default class PieChart extends React.Component<IPieChartProps> {

    public getChartConfig = () => {
        const {
            data,
            type,
        } = this.props;

        const labels = Object.keys(data);
        const chartData = labels.map((label: string) => data[label]);
        const backgroundColor = type === 'single' ? singlePollColors : [];

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
                    labels.map((label) => (
                        <PollButton
                            key={label}
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
            <div>
                <div>
                    {
                        this.renderPollButtons(data.labels)
                    }
                </div>
                <ChartWrapper>
                    <Doughnut data={data} />
                </ChartWrapper>
            </div>
        )
    }
}