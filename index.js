import { fetchKeywordValue } from './google'
import { getMarketSummary } from './bittrex'

// if (require.main === module) {
//   try {
//     setInterval(fetchKeywordValue, 1500, 'key', 'value')
//   } catch (err) {
//     throw new Error(err)
//   }
// }

// fetchKeywordValue('trump').then((results) => {
//   console.log('results: ', results)
//   process.exit()
// }).catch(err => {
//   console.error(err)
//   process.exit(1)
// })

const sleeP = (ms = 0) => (
  new Promise(resolve => setTimeout(() => resolve(null), ms))
)

const main = async () => {
  while (true) {
    try {
      await getMarketSummary()
      // await fetchKeywordValue('trump')
      await sleeP(1500)
    } catch (err) {
      throw new Error(err)
    }
  }
}

if (require.main === module) {
  main().then(() => {
    process.exit()
  }).catch(err => {
    console.error(err)
    process.exit(1)
  })
}
