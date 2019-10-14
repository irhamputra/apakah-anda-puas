var box1 = document.getElementById('box-1');
var box2 = document.getElementById('box-2');
var box3 = document.getElementById('box-3');

box1.addEventListener('mouseover', () => {
		box1.style.opacity = 0;
		box2.style.opacity = 1;
})

box2.addEventListener('mouseover', () => {
		box2.style.opacity = 0
		box3.style.opacity = 1
})

box3.addEventListener('mouseover', () => {
		box3.style.opacity = 0;
		box1.style.opacity = 1;
})
