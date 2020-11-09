export interface Outcome {
    eventStage: Stage;

    offerTicketDelayLive: Number;
    offerTicketDelayUpcoming: Number;

    eventTicketDelayLive: Number;
    eventTicketDelayUpcoming: Number;

    sportTicketDelayLive: Number;
    sportTicketDelayUpcoming: Number;
};

export enum Stage {
    UPCOMING = 1,
    LIVE = 2,
}

// The delayCalculator function must 
// - receive an input of type Outcome Array
// - return an output of type Number

export type DelayCalculator = (input: Outcome[]) => Number;

// Please put your code here
export const delayCalculator: DelayCalculator = (input: Outcome[]): Number => {

    let delay: Number;
    let largest: Number;

    const calculateDelay = (outcome: Outcome, stage: string): Number => {
        const arrayOfKeys = Object.keys(outcome).filter(item => item.indexOf(stage) !== -1)
        const maxValue = arrayOfKeys.map(key => outcome[key]).reduce((a, b) => a > b ? a : b);
        return maxValue;
    }

    const delayList: Array<Number> = input.map(outcome => {
        switch (outcome.eventStage) {
            case Stage.UPCOMING:
                delay = calculateDelay(outcome, 'DelayUpcoming')
                return delay;

            case Stage.LIVE:
                delay = calculateDelay(outcome, 'DelayLive');
                return delay;

            default:
                break;
        }
    }).filter(Boolean)


    largest = delayList.length > 1 ? delayList.reduce((prev: Number, cur: Number) => {
        return largest = prev > cur ? prev : cur
    }) : delay;

    return largest;
};