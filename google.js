import googleTrends from 'google-trends-api'
import mongo from 'mongodb'
// console.log('mongo: ', mongo)
const startDate = new Date('2018-01-03')
// startDate.setHours(startDate.getHours() - 24)
const endDate = new Date()
// const endDate = new Date('2018-03-01')

console.log('start: ', startDate)
console.log('end: ', endDate)

export const fetchKeywordValue = async (keyword, value) => {
  const resultsStr = await googleTrends.interestOverTime({keyword: 'trump', startTime: startDate, granularTimeResolution: true})
  const results = JSON.parse(resultsStr)
  console.log(resultsStr)
  let count = 0
  let total = 0
  let highest = 0
  results.default.timelineData.forEach((time) => {
    highest = parseInt(time.value) > highest ? parseInt(time.value) : highest
    total += parseInt(time.value)
    count += 1
    // console.log('val: ', parseInt(time.value))
  })

  const average = total / count

  console.log('average: ', average)
  console.log('highest : ', highest)
  // console.log('results: ', results)
}
