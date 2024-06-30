const quotes = [
    {
        quote: "Sustine et abstine",
        trans: "참아라 그리고 절제하라",
    },
    {
        quote: "Sapiens fingit fortunam sibi",
        trans: "현명한 사람은 스스로 운명을 만든다",
    },
    {
        quote: "Venenum in auro bibitur",
        trans: "독은 금잔에 담겨서 마셔진다",
    },
    {
        quote: "Verba volant scripta manent",
        trans: "말은 날아가지만 글은 남는다",
    },
    {
        quote: "Quidquid latine dictum sit altum videtur",
        trans: "라틴어로 쓰여진 것은 무엇이든 심오해보인다",
    },
    {
        quote: "Qui desiderat pacem, praeparet bellum",
        trans: "평화를 원하거든 전쟁을 준비하라",
    },
    {
        quote: "Nosce Te Ipsum",
        trans: "너 자신을 알라",
    },
    {
        quote: "Nil sine magno vita labore dedit mortalibus",
        trans: "노력 없이는 인생은 어떤 것도 우리에게 주지 않는다",
    },
    {
        quote: "Non nobis solum nati sumus",
        trans: "우리 중 누구도 홀로 태어나지 않는다",
    },
    {
        quote: "Letum non omnia finit",
        trans: "죽음이 모든 것을 끝내는 것은 아니다",
    },
    {
        quote: "​In nomine Patris, et Filii, et Spiritus Sancti",
        trans: "성부와 성자와 성령의 이름으로",
    },
    {
        quote: "Ignoramus et ignorabimus",
        trans: "우리는 알지 못하며 앞으로도 모를 것이다",
    },
    {
        quote: "Habe ambitionem et ardorem",
        trans: "야망과 열정을 가져라",
    },
    {
        quote: "Historia Magistra Vitae",
        trans: "역사는 인생의 스승이다 ",
    },
    {
        quote: "Faber est suae quisque fortunae",
        trans: "운명을 만드는 사람은 바로 자신이다",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const trans = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
trans.innerText = todaysQuote.trans;