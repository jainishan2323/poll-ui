
export interface IAnswer {
    type: string;
    options: {id: number, label: string}[];
}
export interface IQuestion {
    id: number;
    title: string;
    publishedDate: number;
    answer: IAnswer;
}

export interface IAppProps {
    title: string;
}

export interface IAppState {
    selectedPollId: number;
    pollValues: any;
}

export interface IPollProps {
    chartData: any;
    onPollUpdate: any;
    selectedPollId: number;
    polldata: IQuestion;
}