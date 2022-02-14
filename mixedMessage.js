let valentineQuotes = [
  `“I think the perfection of love is that it's not perfect.” — Taylor Swift`,
  `“The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.” — Helen Keller`,
  `“The best thing to hold onto in life is each other.” — Audrey Hepburn`,
  `“Love is when you meet someone who tells you something new about yourself.” — Andre Breton`,
  `“Love isn't something you find. Love is something that finds you.” — Loretta Young`,
  `“Love doesn't make the world go 'round. Love is what makes the ride worthwhile.” — Franklin P. Jones`,
  `“A kiss is a lovely trick designed by nature to stop speech when words become superfluous.” — Ingrid Bergman`,
  `“Love is a canvas furnished by nature and embroidered by imagination.” — Voltaire`,
  `"Love is not only something you feel, it is something you do.” — David Wilkerson`,
  `“You can always gain by giving love.” — Reese Witherspoon`,
  `“Love recognizes no barriers.” — Maya Angelou`,
  `“Love is friendship that has caught fire.” — Ann Landers`,
  `“You can’t blame gravity for falling in love.” — Albert Einstein`,
  `“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.” — Lao Tzu`,
  `“If I had a flower for every time I thought of you, I could walk through my garden forever.” — Alfred Tennyson`,
  `“When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.” — Paulo Coelho`,
  `“Nobody has ever measured, not even poets, how much the heart can hold.” — Zelda Fitzgerald`,
  `"Love grows more tremendously full, swift, poignant, as the years multiply." — Zane Grey`,
  `"Love is when the other person's happiness is more important than your own." — H. Jackson Brown Jr.`,
  `"Your flaws are perfect for the heart that's meant to love you." — Trent Shelton`,
];

//loveMessage factory function
let loveMessage = (sweetName, quoteArray) => {
  return {
    name: sweetName,
    loveQuote: quoteArray,
    randomQuote() {
      let randomIndex = Math.floor(Math.random() * this.loveQuote.length);
      return `${this.name} babygirl, To commemorate Valentine's Day, I've prepared a love 💜💜💜  quote for you. which states: 
      "${this.loveQuote[randomIndex]}"`;
    },
  };
};

// Initialize loveMessage objects
let Sandra = loveMessage("Sandra", valentineQuotes);

//Call loveMessage function to randomly generate love quote for user
let expressLove = () => {
  return Sandra.randomQuote();
};

console.log(expressLove());
