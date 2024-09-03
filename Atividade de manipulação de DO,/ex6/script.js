function trocarClasses() {
    const boxes = document.querySelectorAll('.box');
    const box1 = boxes[0];
    const box2 = boxes[1];
    const box3 = boxes[2];
    box1.classList.add('active');
    box2.classList.remove('green');
    box3.classList.toggle('active');
}