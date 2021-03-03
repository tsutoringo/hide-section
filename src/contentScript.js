document.addEventListener('load', () => {
	Array.from(document.querySelectorAll(".u-list.has-linked-children li.movie")).forEach(ele => {
		ele.style.display = 'none';
	})
})