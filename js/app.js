'use strict';

const keys = document.querySelectorAll('.key');
const typed = document.querySelector('.typed h1');
const list = document.querySelector('.list ul');

for (let key of keys) {
	key.addEventListener('click', keyPress);
}

function keyPress(e) {
	let keyPressed = e.srcElement.innerText;

	if (keyPressed.length == 1) {
		typed.append(keyPressed);

		for (let i = 0; i < keys.length; i++) {
			if (keys[i].innerText.length == 1) {
				keys[i].classList.add('lower');
			}
		}
	} else if (keyPressed == 'SPACE') {
		typed.append(' ');
	} else if (keyPressed == 'SHIFT') {
		for (let i = 0; i < keys.length; i++) {
			if (keys[i].innerText.length == 1) {
				keys[i].classList.toggle('lower');
			}
		}
	} else if (keyPressed == 'ENTER' && typed.innerText.length > 0) {
		newItem(typed.innerText);
		typed.innerText = '';
		for (let i = 0; i < keys.length; i++) {
			if (keys[i].innerText.length == 1) {
				keys[i].classList.remove('lower');
			}
		}
	}

	const newClick = new Audio('sounds/click.wav');
	newClick.play();
}

function newItem(char) {
	const newLi = document.createElement('LI');
	newLi.innerText = char;
	list.appendChild(newLi);
}
