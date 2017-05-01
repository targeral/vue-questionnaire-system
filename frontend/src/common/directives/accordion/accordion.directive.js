export default function(el) {
	console.log('this is accordion directive');
	let header = el.querySelector('header');
	let article = el.querySelector('article');
	let open = true;
	console.log(header)
	header.addEventListener('click', () => {
		if(open) {
			article.classList.add('close');
		} else {
			article.classList.remove('close');
		}

		open = !open;
	})
}