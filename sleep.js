
export default function randomSleep(num){
    return new Promise((resolve) => {
        setTimeout(resolve, num);
    });
}