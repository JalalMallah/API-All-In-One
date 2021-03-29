import React, { useCallback, useEffect, useState } from 'react';

import styled from 'styled-components';

const URL = 'https://type.fit/api/quotes';

export default function Quotes() {
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');

  const generateRandomQuote = useCallback(async () => {
    const quotes = await getQuotes();
    const quotesCount = quotes.length;
    const randomIndex = ~~(Math.random() * quotesCount);
    const quote = quotes[randomIndex];
    setQuoteText(quote.text);
    setQuoteAuthor(quote.author);
  }, []);

  const getQuotes = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    generateRandomQuote();
  }, [generateRandomQuote]);

  return (
    <QuotesWrapper>
      <Title>Get inspired with our quotes!</Title>
      <QuoteText>"{quoteText}"</QuoteText>
      <QuoteAuthor>{quoteAuthor ?? 'Author Unknown'}</QuoteAuthor>
      <Button onClick={generateRandomQuote}>Get New Quote</Button>
    </QuotesWrapper>
  );
}

const QuotesWrapper = styled.main`
  padding: 1rem 1.5rem;

  @media (min-width: 360px) {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  margin: 0 0 2rem;
  font-size: 1.8rem;

  @media (min-width: 360px) {
    font-size: 2.2rem;
  }
`;

const QuoteText = styled.p`
  margin: 0 0 1rem;
  font-size: 1.5rem;
  line-height: 1.4;

  @media (min-width: 360px) {
    font-size: 1.6rem;
  }
`;

const QuoteAuthor = styled.p`
  margin: 0 0 1rem;
  font-size: 1.4rem;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: right;

  @media (min-width: 360px) {
    font-size: 1.6rem;
  }
`;

const Button = styled.button`
  margin: 2rem 0 0;
  padding: 1rem 2rem;
  border: none;
  border-radius: 3px;
  outline: none;
  background-color: var(--dark-blue);
  color: var(--light-gray);
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;

  @media (min-width: 360px) {
    font-size: 1.6rem;
  }
`;
