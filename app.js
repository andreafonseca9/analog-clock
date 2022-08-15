const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')

function getTime(){
    const now=new Date()
    const seconds=now.getSeconds()
    const minutes=now.getMinutes()
    const hours=now.getHours()

    console.log(now)
}
getTime()