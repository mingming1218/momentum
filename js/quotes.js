const quotes = [
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.", 
        author: "사무엘 존슨",
    }, 
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.", 
        author: "파울로 코엘료",
    }, 
    {
        quote: "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해.", 
        author: "찰리 채플린",
    }, 
    {
        quote: "신은 용기 있는 자를 결코 버리지 않는다.", 
        author: "켄러",
    }, 
    {
        quote: "피할 수 없으면 즐겨라.", 
        author: "로버트 엘리엇",
    }, 
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.", 
        author: "제임스 오펜하임",
    }, 
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.", 
        author: "앙드레 말로",
    }, 
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안된다.", 
        author: "단테",
    }, 
    {
        quote: "당신이 할 수 있다고 믿든 할 수 없다고 믿든 믿는 대로 될 것이다.", 
        author: "헨리 포드",
    }, 
    {
        quote: "작은 기회로부터 종종 위대한 업적이 시작된다.", 
        author: "데모스테네스",
    }, 
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
