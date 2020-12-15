// Testimonials

let person = [
  {name: 'Tanya Sinclair',
  photo: '/images/image-tanya.jpg',
  quote: `"I’ve been interested in coding for a while but never taken the jump, until now. 
  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
  excited about the future." `,
  job: 'UX Engineer'
},
  {name: 'John Tarkpor',
  photo: '/images/image-john.jpg',
  quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ” `,
  job: 'Junior Front-end Developer'
}
];

// Variables

let photo = document.querySelector('.testimonial__photo');
let quote = document.querySelector('.testimonial__quote');
let job = document.querySelector('.testimonial__job');
let name = document.querySelector('.testimonial__name');

let previous = document.querySelector('.testimonial__previous');
let next = document.querySelector('.testimonial__next');
 

// Event Listeners
// previous.addEventListener('click', previousPerson);
next.addEventListener('click', nextPerson);
// document.onkeydown = checkKey();

// Functions

function nextPerson(i) {
  for (let i = 0; i < person.length; i++) {
    photo.src = person[i].photo;
    quote.textContent = person[i].quote;
    name.textContent = person[i].name;
    job.textContent = person[i].job;
  };
}

// function changePerson(i) {
//   photo.src = person[i].photo;
//   quote.innerHTML = person[i].quote;
//   name.innerHTML = person[i].name;
//   job.innerHTML = person[i].job;
// }