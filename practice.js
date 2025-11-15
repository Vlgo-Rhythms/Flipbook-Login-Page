// Access loginBtn and loginPage

const loginBtn = document.getElementById('login');
const loginPage = document.querySelector('.login-box');
loginBtn.addEventListener('click', ()=>{
    if(loginPage.style.display === 'none'){
        loginPage.style.display = 'flex';
    }else{
        loginPage.style.display = 'none';
    }
});

// pages = ['page-1', 'page-2', 'page-3','page-4'] array
const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const exploreBtn = document.getElementById('explore');
const signinBtn = document.getElementById('signIn');
const signupBtn = document.getElementById('sign-up');
const forgotBtn = document.getElementById('forgot');
const continueBtn = document.getElementById('continue');


let currentPageIndex = 0;

function goToNextPage() {
    if( currentPageIndex < pages.length - 1){
        pages[currentPageIndex].classList.add('flipped');
        currentPageIndex++;
    }
}

function goToPrevPage() {
    if( currentPageIndex > 0){
        pages[currentPageIndex].classList.remove('flipped');
        currentPageIndex--;
        pages[currentPageIndex].classList.remove('flipped');
    }
}
exploreBtn.addEventListener('click', goToNextPage);
signinBtn.addEventListener('click', goToNextPage);
signupBtn.addEventListener('click', goToPrevPage);
forgotBtn.addEventListener('click', goToNextPage);
continueBtn.addEventListener('click', goToNextPage);