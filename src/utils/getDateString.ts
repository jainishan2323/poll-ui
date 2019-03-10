export const getDateString = (date: number): string => {
    const d = new Date(date);
    return d.toDateString();
}