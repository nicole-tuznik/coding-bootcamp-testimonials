// Testimonials

let testimonial = [
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

let i = 0;

// Event Listeners
previous.addEventListener('click', previousPerson);
next.addEventListener('click', nextPerson);
document.addEventListener('keydown', checkKey);

// Functions
function insertContent() {
  photo.src = testimonial[i].photo;
  quote.textContent = testimonial[i].quote;
  name.textContent = testimonial[i].name;
  job.textContent = testimonial[i].job;
}

function nextPerson(e) {
  if (i === testimonial.length - 1) {
    i = 0;
    insertContent();
  } else {
    i++;
    insertContent();
  };
};

function previousPerson(e) {
  if (i === 0) {
    i = testimonial.length - 1;
    insertContent();
  } else {
    i--;
    insertContent();
  }
};

function checkKey(e) {
  switch (e.key) {
    case 'ArrowLeft':
      previousPerson();
      break;
    case 'ArrowRight':
      nextPerson();
      break;
  }
};
