export const updatePoints = (points) => {
    console.log('ACTION UPDATE POINTS', points);
    return { type: 'UPDATE_POINTS', payload: points }
}