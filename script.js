setInterval(() => {
	let d = new Date(); //object of date()
	let hr = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();
	let hr_rotation = 30 * hr + min / 2; //converting current time
	let min_rotation = 6 * min;
	let sec_rotation = 6 * sec;
    let hour=document.querySelector(".hour");
    let minute=document.querySelector(".minute");
    let second=document.querySelector(".second");

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
