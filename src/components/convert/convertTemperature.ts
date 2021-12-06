export const convertTemp = (tempK: number): number => {
    return Math.floor(tempK - 273.15)
}