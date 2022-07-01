const questionMark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M204.3 32.01H96c-52.94 0-96 43.06-96 96c0 17.67 14.31 31.1 32 31.1s32-14.32 32-31.1c0-17.64 14.34-32 32-32h108.3C232.8 96.01 256 119.2 256 147.8c0 19.72-10.97 37.47-30.5 47.33L127.8 252.4C117.1 258.2 112 268.7 112 280v40c0 17.67 14.31 31.99 32 31.99s32-14.32 32-31.99V298.3L256 251.3c39.47-19.75 64-59.42 64-103.5C320 83.95 268.1 32.01 204.3 32.01zM144 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S166.1 400 144 400z"/></svg>`;
const heartSolid = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>`;
const heartCrack = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M119.4 44.1C142.7 40.22 166.2 42.2 187.1 49.43L237.8 126.9L162.3 202.3C160.8 203.9 159.1 205.1 160 208.2C160 210.3 160.1 212.4 162.6 213.9L274.6 317.9C277.5 320.6 281.1 320.7 285.1 318.2C288.2 315.6 288.9 311.2 286.8 307.8L226.4 209.7L317.1 134.1C319.7 131.1 320.7 128.5 319.5 125.3L296.8 61.74C325.4 45.03 359.2 38.53 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.09V44.1z"/></svg>`;
const doorOpened = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M560 448H512V113.5c0-27.25-21.5-49.5-48-49.5L352 64.01V128h96V512h112c8.875 0 16-7.125 16-15.1v-31.1C576 455.1 568.9 448 560 448zM280.3 1.007l-192 49.75C73.1 54.51 64 67.76 64 82.88V448H16c-8.875 0-16 7.125-16 15.1v31.1C0 504.9 7.125 512 16 512H320V33.13C320 11.63 300.5-4.243 280.3 1.007zM232 288c-13.25 0-24-14.37-24-31.1c0-17.62 10.75-31.1 24-31.1S256 238.4 256 256C256 273.6 245.3 288 232 288z"/></svg>`;
const doorClosed = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M560 448H480V50.75C480 22.75 458.5 0 432 0h-288C117.5 0 96 22.75 96 50.75V448H16C7.125 448 0 455.1 0 464v32C0 504.9 7.125 512 16 512h544c8.875 0 16-7.125 16-16v-32C576 455.1 568.9 448 560 448zM384 288c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S401.6 288 384 288z"/></svg>`;

let inProgress = false;
let lose = false;
let life = 3;
let winCounter = 0;
let attemptCounter = 0;

const attemptCounterText = document.querySelector('#Attempt');
const winCounterText = document.querySelector('#Win');
const headerText = document.querySelector('#headerText');
const startBtn = document.querySelector('#startGame');
const cells = document.querySelectorAll('.cell');
let cellId;

const conditions = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ]

const cellObjs = [
	{
		id: 'cell1',
		condition: conditions[0],
		link: cells[0],
	},
	{
		id: 'cell2',
		condition: conditions[1],
		link: cells[0],
	},
	{
		id: 'cell3',
		condition: conditions[2],
		link: cells[0],
	},
	{
		id: 'cell4',
		condition: conditions[3],
		link: cells[0],
	},
	{
		id: 'cell5',
		condition: conditions[4],
		link: cells[0],
	},
	{
		id: 'cell6',
		condition: conditions[5],
		link: cells[0],
	},
	{
		id: 'cell7',
		condition: conditions[6],
		link: cells[0],
	},
	{
		id: 'cell8',
		condition: conditions[7],
		link: cells[0],
	},
	{
		id: 'cell9',
		condition: conditions[8],
		link: cells[0],
	},
	{
		id: 'cell10',
		condition: conditions[9],
		link: cells[0],
	},
	{
		id: 'cell11',
		condition: conditions[10],
		link: cells[0],
	},
	{
		id: 'cell12',
		condition: conditions[11],
		link: cells[0],
	},
	{
		id: 'cell13',
		condition: conditions[12],
		link: cells[0],
	},
	{
		id: 'cell14',
		condition: conditions[13],
		link: cells[0],
	},
	{
		id: 'cell15',
		condition: conditions[14],
		link: cells[0],
	},
	{
		id: 'cell16',
		condition: conditions[15],
		link: cells[0],
	}
]

const preparedFiled = () => {
	for(cell of cells) {
		cell.innerHTML = questionMark;
	}
}

const shuffleConditions = () => {
	conditions.sort( () => .5 - Math.random());
}

const setShuffeledConditions = () => {
	for(let i = 0; i < conditions.length; i++) {
		for(let j = 0; j < cellObjs.length; j ++) {
			cellObjs[j].condition = conditions[i++];
		}
	}
}

const cellEventFnc = (e) => {
	cellId = e.currentTarget.id;
	console.log(cellId);
	cellLogic(cellId);
}

const cellSetEvent = () => {
	for(cell of cells) {
		cell.addEventListener('click', cellEventFnc);
	}
}

const cellDeleteEvent = (itemId) => {
	document.getElementById(itemId).removeEventListener('click', cellEventFnc);
}

const cellLogic = (itemId) => {
	for(cell of cellObjs) {

		if(cell.id == itemId) {
			const thisCellCondition = this.cell.condition;

			if(thisCellCondition == false) {
				life--;
				document.getElementById(itemId).innerHTML = doorClosed;
				cellDeleteEvent(itemId);

				if (life == 0) {
					attemptCounter += 1;
					loseGameLogic();
					stopGameLogic();
				}
			} else {
				document.getElementById(itemId).innerHTML = doorOpened;
				winCounter += 1;
				winGameLogic();
				stopGameLogic();
			}
		}
	}
}

const stopGameLogic = () => {
	for(el of cellObjs) {
		document.getElementById(el.id).removeEventListener('click', cellEventFnc);
	}
}

const refreshWinCounter = () => {
	winCounterText.innerHTML = `Win : ${winCounter}`;
}

const refreshAttemptCounter = () => {
	attemptCounterText.innerHTML = `Attempt : ${attemptCounter}`;
}

const winGameLogic = () => {
	headerText.innerHTML = 'YOU WON!'
	headerText.style.color = 'green';
	refreshWinCounter();
}

const loseGameLogic = () => {
	headerText.innerHTML = 'YOU LOST!'
	headerText.style.color = 'red';
	refreshAttemptCounter();
}

const replaceHeart = () => {
	
}









const lauchAll = () => {
	shuffleConditions();
	setShuffeledConditions();
	preparedFiled();
	cellSetEvent();

	
}

lauchAll();
