import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button, Paragraph, Title, Wrapper } from 'styles/MyStyledComponents';

const APIKey = '65ae7a288dd355c89554072f';

export default function ExchangeRates() {
  const [selectedBaseCurrency, setSelectedBaseCurrency] = useState('USD');
  const [selectedTargetCurrency, setSelectedTargetCurrency] = useState('EUR');

  const [conversionRate, setConversionRate] = useState();

  const [baseCurrencyAmount, setBaseCurrencyAmount] = useState(1);
  const [targetCurrencyAmount, setTargetCurrencyAmount] = useState('');

  useEffect(() => {
    calculateRate();
  }, [selectedBaseCurrency, selectedTargetCurrency, baseCurrencyAmount]);

  const handleBaseSelectChange = e => setSelectedBaseCurrency(e.target.value);
  const handleTargetSelectChange = e => setSelectedTargetCurrency(e.target.value);

  const handleBaseInputChange = e => setBaseCurrencyAmount(e.target.valueAsNumber);
  const handleTargetInputChange = e => setTargetCurrencyAmount(e.target.valueAsNumber);

  const calculateRate = () => {
    const baseURL = `https://v6.exchangerate-api.com/v6/${APIKey}/latest/${selectedBaseCurrency}`;

    fetch(baseURL)
      .then(res => res.json())
      .then(data => {
        if (data.result !== 'success') return;

        const conversionRate = data.conversion_rates[selectedTargetCurrency];
        const calculatedAmountInTargetCurrency = +(baseCurrencyAmount * conversionRate).toFixed(2);
        setConversionRate(conversionRate);
        setTargetCurrencyAmount(calculatedAmountInTargetCurrency);
      })
      .catch(err => console.error(err));
  };

  const showRateInfo = () =>
    `1 ${selectedBaseCurrency} = ${conversionRate} ${selectedTargetCurrency}`;

  const swapCurrencies = () => {
    setSelectedBaseCurrency(selectedTargetCurrency);
    setSelectedTargetCurrency(selectedBaseCurrency);
  };

  return (
    <Wrapper>
      <Title>Exchange Rate Calculator 💰</Title>
      <Paragraph>Choose the currency and provide the amout to get the exchange rate!</Paragraph>
      <Container>
        <Row>
          <Select value={selectedBaseCurrency} onChange={handleBaseSelectChange}>
            <option value='AED'>AED</option>
            <option value='ARS'>ARS</option>
            <option value='AUD'>AUD</option>
            <option value='BGN'>BGN</option>
            <option value='BRL'>BRL</option>
            <option value='BSD'>BSD</option>
            <option value='CAD'>CAD</option>
            <option value='CHF'>CHF</option>
            <option value='CLP'>CLP</option>
            <option value='CNY'>CNY</option>
            <option value='COP'>COP</option>
            <option value='CZK'>CZK</option>
            <option value='DKK'>DKK</option>
            <option value='DOP'>DOP</option>
            <option value='EGP'>EGP</option>
            <option value='EUR'>EUR</option>
            <option value='FJD'>FJD</option>
            <option value='GBP'>GBP</option>
            <option value='GTQ'>GTQ</option>
            <option value='HKD'>HKD</option>
            <option value='HRK'>HRK</option>
            <option value='HUF'>HUF</option>
            <option value='IDR'>IDR</option>
            <option value='ILS'>ILS</option>
            <option value='INR'>INR</option>
            <option value='ISK'>ISK</option>
            <option value='JPY'>JPY</option>
            <option value='KRW'>KRW</option>
            <option value='KZT'>KZT</option>
            <option value='MXN'>MXN</option>
            <option value='MYR'>MYR</option>
            <option value='NOK'>NOK</option>
            <option value='NZD'>NZD</option>
            <option value='PAB'>PAB</option>
            <option value='PEN'>PEN</option>
            <option value='PHP'>PHP</option>
            <option value='PKR'>PKR</option>
            <option value='PLN'>PLN</option>
            <option value='PYG'>PYG</option>
            <option value='RON'>RON</option>
            <option value='RUB'>RUB</option>
            <option value='SAR'>SAR</option>
            <option value='SEK'>SEK</option>
            <option value='SGD'>SGD</option>
            <option value='THB'>THB</option>
            <option value='TRY'>TRY</option>
            <option value='TWD'>TWD</option>
            <option value='UAH'>UAH</option>
            <option value='USD'>USD</option>
            <option value='UYU'>UYU</option>
            <option value='VND'>VND</option>
            <option value='ZAR'>ZAR</option>
          </Select>
          <Input
            type='number'
            value={baseCurrencyAmount}
            onChange={handleBaseInputChange}
            placeholder='0'
          />
        </Row>
        <Row>
          <Button onClick={swapCurrencies}>Swap</Button>
          <RateInfo>{conversionRate && showRateInfo()}</RateInfo>
        </Row>
        <Row>
          <Select value={selectedTargetCurrency} onChange={handleTargetSelectChange}>
            <option value='AED'>AED</option>
            <option value='ARS'>ARS</option>
            <option value='AUD'>AUD</option>
            <option value='BGN'>BGN</option>
            <option value='BRL'>BRL</option>
            <option value='BSD'>BSD</option>
            <option value='CAD'>CAD</option>
            <option value='CHF'>CHF</option>
            <option value='CLP'>CLP</option>
            <option value='CNY'>CNY</option>
            <option value='COP'>COP</option>
            <option value='CZK'>CZK</option>
            <option value='DKK'>DKK</option>
            <option value='DOP'>DOP</option>
            <option value='EGP'>EGP</option>
            <option value='EUR'>EUR</option>
            <option value='FJD'>FJD</option>
            <option value='GBP'>GBP</option>
            <option value='GTQ'>GTQ</option>
            <option value='HKD'>HKD</option>
            <option value='HRK'>HRK</option>
            <option value='HUF'>HUF</option>
            <option value='IDR'>IDR</option>
            <option value='ILS'>ILS</option>
            <option value='INR'>INR</option>
            <option value='ISK'>ISK</option>
            <option value='JPY'>JPY</option>
            <option value='KRW'>KRW</option>
            <option value='KZT'>KZT</option>
            <option value='MXN'>MXN</option>
            <option value='MYR'>MYR</option>
            <option value='NOK'>NOK</option>
            <option value='NZD'>NZD</option>
            <option value='PAB'>PAB</option>
            <option value='PEN'>PEN</option>
            <option value='PHP'>PHP</option>
            <option value='PKR'>PKR</option>
            <option value='PLN'>PLN</option>
            <option value='PYG'>PYG</option>
            <option value='RON'>RON</option>
            <option value='RUB'>RUB</option>
            <option value='SAR'>SAR</option>
            <option value='SEK'>SEK</option>
            <option value='SGD'>SGD</option>
            <option value='THB'>THB</option>
            <option value='TRY'>TRY</option>
            <option value='TWD'>TWD</option>
            <option value='UAH'>UAH</option>
            <option value='USD'>USD</option>
            <option value='UYU'>UYU</option>
            <option value='VND'>VND</option>
            <option value='ZAR'>ZAR</option>
          </Select>
          <Input
            type='number'
            value={targetCurrencyAmount}
            onChange={handleTargetInputChange}
            placeholder='0'
          />
        </Row>
      </Container>
    </Wrapper>
  );
}

const Container = styled.section`
  display: grid;
  place-items: center;
  width: 90%;
  max-width: 500px;
  margin: 2rem 0 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 0 2rem;
`;

const Select = styled.select`
  margin: 0 1rem 0 0;
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 3px;
  outline: none;
  background-color: #fff;
  font-family: var(--main-font);
  font-size: 1.5rem;
  transition: border 0.3s ease;
  cursor: pointer;

  &:focus {
    border: 1px solid #888;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 3px;
  outline: none;
  background-color: #fff;
  font-family: var(--main-font);
  font-size: 1.5rem;
  text-align: right;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid #888;
  }
`;

const RateInfo = styled(Paragraph)`
  margin: 0;
`;
