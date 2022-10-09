export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';


export function increment(payload: number) {
    return {
        type: INCREMENT_COUNT,
        payload
    }
}

export function decrement(payload:number) {
    return {
        type: DECREMENT_COUNT,
        payload
    }
}