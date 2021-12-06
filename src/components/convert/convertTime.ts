import moment from "moment";


export const convertTime = (unix: number):string => {
    return moment(unix * 1000).format('h:mm a')
}