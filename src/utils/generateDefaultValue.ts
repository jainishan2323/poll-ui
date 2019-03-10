interface ILabel {
    id: number;
    label: string;
}

const generateDefaultValue = (data: ILabel[]) => {
    return data.reduce((acc, val) => ({
        ...acc,
        [val.label]: 1,
    }), {})
}

export default generateDefaultValue;
