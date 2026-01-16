export const getQuote = async () => {
  try {
    const quote = await fetch("https://api.paperquotes.com/apiv1/qod/");
    const data = await quote.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
