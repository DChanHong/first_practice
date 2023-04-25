import React from 'react'
import { DetailCoin } from '../../Types'

const CoinDetailCard = ({data}: {data:DetailCoin} ) => {
  return (
    <div className=' flex justify-col mt-10'>
      <ul>
        <h3 className='text-2xl'> {data.name} 상세 정보</h3>
        <li>코인 순위: {data.rank}</li>
        <li>코인 심볼: {data.symbol}</li>
        <li>코인 순환양: {data.circulating_supply}</li>
        <li>코인 전체 공급량: {data.total_supply}</li>
        <li>코인 공급 최대치: {data.max_supply}</li>
        <li>코인 베타값: {data.beta_value}</li>
        <li>코인 첫번째 발행일: {data.first_data_at}</li>
        <li>코인 마지막 업데이트일: {data.last_updated}</li>
        <li>코인 가격: {data.quotes.KRW.price}</li>
        <li>코인 24시간 볼륨: {data.quotes.KRW.volume_24h}</li>
        <li>코인 24시간 가격변화율: {data.quotes.KRW.volume_24h_change_24h}</li>
        <li>코인 마켓캡: {data.quotes.KRW.market_cap}</li>
        <li>코인 24시간 수요변화율: {data.quotes.KRW.market_cap_change_24h}</li>
        <li>코인 15분 가격 변화율: {data.quotes.KRW.percent_change_15m}</li>
        <li>코인 30분 가격 변화율: {data.quotes.KRW.percent_change_30m}</li>
        <li>코인 1시간 가격 변화율: {data.quotes.KRW.percent_change_1h}</li>
        <li>코인 6시간 가격 변화율: {data.quotes.KRW.percent_change_6h}</li>
        <li>코인 30분 가격 변화율: {data.quotes.KRW.percent_change_24h}</li>
        <li>코인 7일 가격 변화율: {data.quotes.KRW.percent_change_7d}</li>
        <li>코인 30일 가격 변화율: {data.quotes.KRW.percent_change_30d}</li>
        <li>코인 1년 가격 변화율: {data.quotes.KRW.percent_change_1y}</li>
      </ul>
    </div>
  )
}

export default CoinDetailCard