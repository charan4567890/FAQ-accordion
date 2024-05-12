let questions=document.querySelectorAll(".question")

questions.forEach((question)=>{
    question.addEventListener('click', () => {
        const box = question.parentElement; 
        box.classList.toggle("active"); 
    });
})