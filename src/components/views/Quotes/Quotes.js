import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button, Paragraph, Title } from 'styles/MyStyledComponents';

const URL = 'https://type.fit/api/quotes';

export default function Quotes() {
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');

  const generateRandomQuote = useCallback(async () => {
    const quotes = await getQuotes();
    const quotesCount = quotes.length;
    const randomIndex = ~~(Math.random() * quotesCount);
    const quote = quotes[randomIndex];
    setQuoteText(`"${quote.text}"`);
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
    <Wrapper>
      <Title>Get inspired with our quotes!</Title>
      <Paragraph>{quoteText}</Paragraph>
      <QuoteAuthor>{quoteAuthor ?? 'Author Unknown'}</QuoteAuthor>
      <GetNewQuoteButton onClick={generateRandomQuote}>Get New Quote</GetNewQuoteButton>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 1rem 1.5rem;
`;

const QuoteAuthor = styled(Paragraph)`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: right;
`;

const GetNewQuoteButton = styled(Button)`
  margin: 2rem 0 0;
  padding: 1rem 2rem;
`;
