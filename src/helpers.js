export const generateMaxRandomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
}
export const generateArithmProgression = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}