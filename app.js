const allGrades = document.querySelectorAll('.grade');
const bouton = document.querySelector('button');
const yourRating = document.querySelector('.your-rating');

yourRating.innerHTML = "0";

allGrades.forEach(grade => {
    grade.addEventListener('click', (e) => {

        e.target.classList.add('selected');
        yourRating.innerHTML = e.target.innerHTML;

    for(let i = 0; i < allGrades.length; i++){
        if(allGrades[i] !== e.target){
            allGrades[i].classList.remove('selected');
        }
    }

    })
});

bouton.addEventListener('click', () => {
    document.querySelector('.rating-process').classList.add('inactive');
    document.querySelector('.star').classList.add('inactive');
    document.querySelector('.thanks-process').classList.remove('inactive');
})