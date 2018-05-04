import bittrex from 'node-bittrex-api'

bittrex.options({
  'apikey': 'f44ff74872a942d292139f34676fcb97',
  'apisecret': 'CFUQBO53TYZOZXHI',
})

export const getMarketSummary = async () => {
  bittrex.getmarketsummaries(( data, err ) => {
    console.log('data: ', data.result.length)
    if (err) {
      return console.error(err);
    }
    // for (let i in data.result) {
    //   bittrex.getticker({ market : data.result[i].MarketName }, (ticker) => {
    //     console.log('Market Name: ', data.result[i].MarketName)
    //     console.log('ticker: ', ticker)
    //   })
    // }
  })
}
