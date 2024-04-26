
// // const Base_URL = 'https://portfolio-js.b.goit.study/api/reviews';
// // const swiper = document.querySelector(".swiper-wrapper");


// // // Assume fetchReviews is a function that fetches reviews from the backend
// // const fetchReviews = async () => {
// //   try {
// //     const response = await fetch('your_backend_url');
// //     if (!response.ok) {
// //       throw new Error('Failed to fetch reviews');
// //     }
// //     const data = await response.json();
// //     return data;
// //   } catch (error) {
// //     // Show error message to the user using a popup or modal
// //     alert('Failed to fetch reviews. Please try again later.');
// //     return null;
// //   }
// // };

// // export async function renderReviews () {
// //   const reviews = await fetchReviews();
  
// //   if (!reviews) {
// //     document.getElementById('reviews-list').innerHTML = 'Not found';
// //     return;
// //   }

// //   // Render reviews using Swiper.js as a horizontal slider
// //   // Initialize Swiper instance with reviews data
// // };

// // renderReviews();


// const Base_URL = 'https://portfolio-js.b.goit.study/api/reviews';
// const btnNext = document.querySelector('.rev-swiper-btn-nex');
// const btnPrev = document.querySelector('.rev-swiper-btn-prev');
// const reviewsList = document.querySelectorAll('.reviews-list');
// const swiperWrapper = document.querySelector('.rev-swiper-wrapper');


// export async function getReviews() {
//     try {
//         const response = await fetch(`${Base_URL}`);
//         if (!response.ok) {
//             throw new Error('Error request');
//         }
//         const data = await response.json();
//         return data.reviews;
//     }
//     catch (error) {
//         console.error(error.message);
//         throw error;
//     }
//  }

// export async function displayReviews() {
//     try {
//         const reviews = await getReviews();
//         if (!reviews || reviews.length === 0) {
//             reviewsList.innerHTML = 'Not found';
//             return;
//         }
  
//     }
//     catch (error) {
//         console.error(error.message);
//     }
// }






// // document.addEventListener('DOMContentLoaded', function () {
// // const swiper = new Swiper('.reviews-swiper-container', {
// //     direction: 'horizontal',
// //     navigation: {
// //         nextEl: '.swiper-btn-next',
// //         prevEl: '.swiper-btn-prev',
// //     },  
// // });
// // fetch(`${Base_URL}`)
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// // .then(reviews => {
// //         const reviewsContainer = document.querySelector('.swiper-wrapper');
// //         if (reviews.length === 0) {
// //           reviewsContainer.innerHTML = "<p>Not found</p>";
// //         } else {
// //           reviews.forEach(review => {
// //             const reviewSlide = document.createElement('div');
// //             reviewSlide.classList.add('swiper-slide');
// //             reviewSlide.textContent = review.text;
// //             reviewsContainer.appendChild(reviewSlide);
// //           });
// //           swiper.update(); 
// //         }
// //       })
// //       .catch(error => {
// //         console.error('There was a problem with the fetch operation:', error);
// //         alert('Not found');
// //       });
// //   });


// // export async function getReviews() {
// //     try {
// //         const response = await fetch(`${Base_URL}`);
// //         if (!response.ok) {
// //             throw new Error('Error request');
// //         }
// //         const data = await response.json();
// //         return data.reviews;
// //     }
// //     catch (error) {
// //         console.error(error.message);
// //         throw error;
// //     }
// //  }

// // export async function displayReviews() {
// //     try {
// //         const reviews = await getReviews();
// //         if (!reviews || reviews.length === 0) {
// //             reviewsList.innerHTML = 'Not found';
// //             return;
// //         }
  
// //      }
// //  }