import React from 'react';
import styled from 'styled-components';

function Crypto({ name, image, symbol, price, volume, priceChange, marketcap }) {

    const CoinContainer = styled.div`
        display: flex;
        justify-content: center;
    `

    const CoinRow = styled.div`
        display: flex;
        flex-direction: row;
        justify-items: start;
        align-items: center;
        height: 80px;
        border-bottom: 1px solid #d7d7d7;
        width: 900px;
    `

    const Coin = styled.div`
        display: flex;
        align-items: center;
        padding-right: 24px;
        min-width: 300px;
    `

    const Img = styled.img`
        height: 30px;
        width: 30px;
        margin-right: 10px;
    `

    const H1 = styled.h1`
        font-size: 16px;
        width: 130px;
    `

    const CoinSymbol = styled.p`
        text-transform: uppercase;
    `

    const CoinData = styled.div`
        display: flex;
        text-align: center;
        justify-content: space-between;
        width: 100%;
    `

    const CoinPrice = styled.p`
        width: 110px;
    `

    const CoinVolume = styled.p`
        width: 155px;
    `

    const RedPercent = styled.p`
        width: 100%;
        color: #f00606;
    `

    const GreenPercent = styled.p`
        width: 100%;
        #11d811;
    `

    const CoinMarketcap = styled.p`
        width: 230px;
    `

  return (
    <CoinContainer>
        <CoinRow>
            <Coin>
                <Img src={image} alt='crypto' />
                <H1>{name}</H1>
                <CoinSymbol>{symbol}</CoinSymbol>
            </Coin>
            <CoinData>
                <CoinPrice>{price}</CoinPrice>
                <CoinVolume>{volume.toLocaleString()}</CoinVolume>
                {priceChange < 0 ? (
                    <RedPercent>{priceChange.toFixed(2)}%</RedPercent>
                ) : (
                    <GreenPercent>{priceChange.toFixed(2)}%</GreenPercent>
                )}
                <CoinMarketcap>
                    Mkt Cap: {marketcap.toLocaleString()}
                </CoinMarketcap>
            </CoinData>
        </CoinRow>
    </CoinContainer>
  )
}

export default Crypto