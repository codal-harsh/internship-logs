import { getQuote } from "../services/quote.service.js";

export const updateQuoteOnPage = async () => {
  const quoteHTML = document.getElementById("quote");
  const authorHTML = document.getElementById("quote-author");

  const quote = await getQuote();
  const quoteText = quote.quote;
  const author = quote?.author ?? "Unknown";

  quoteHTML.innerText = `"${quoteText}"`;
  authorHTML.innerText = `~${author}`;

  
};
