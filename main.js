

const arrAuthoreQoute = [
    {
        authorName: 'Jim Rohn',
        authorQuote: 'Beware of what you become in pursuit of what you want.'
    },
    {
        authorName: 'Epictetus',
        authorQuote: 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        authorName: 'Frank Sinatra',
        authorQuote: 'The best revenge is massive success.'
    },
    {
        authorName: 'Wayne Gretzy',
        authorQuote: 'You miss 100% of the shots you don\'t take.'
    },
    {
        authorName: 'Nelson Mandela',
        authorQuote: 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        authorName: 'Elbert Hubbard',
        authorQuote: 'Do not take life too seriously. You will not get out alive.'
    },
];


function NewQoute() {
    let index = Math.floor(Math.random() * arrAuthoreQoute.length)
    document.getElementById('authorQuote').innerHTML = arrAuthoreQoute[index].authorQuote
    document.getElementById('authorName').innerHTML = arrAuthoreQoute[index].authorName
}