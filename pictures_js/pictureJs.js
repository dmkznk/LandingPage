window.addEventListener('DOMContentLoaded', () => {
	pictureJS()
})

const pictureJS = () => {
	function pictureJSFullscreen(selector) {

		const state = {
			href: [],
			counter: 1,
			isOpen: false
		}

		const fade = document.createElement('div')
		fade.classList.add('fade-picture-JS')
		
		const counterPicture = document.createElement('span')
		counterPicture.classList.add('counter-picture-JS')

		const img = document.createElement('img')
		img.style.maxHeight = '85vh'
		img.style.maxWidth = '85vw'

		const left = document.createElement('span')
		left.classList.add('picture-JS-left')
		left.innerHTML = '&#8656;' //сюди можеш вставити контент

		const right = document.createElement('span')
		right.innerHTML = '&#8656;' //сюди можеш вставити контент
		right.classList.add('picture-JS-right')

		fade.append(left, right, img, counterPicture)
		document.body.append(fade)

		selector.forEach(e => state.href.push(e.href))

		selector.forEach((item, index) => {
			item.addEventListener('click', e => {
				e.preventDefault()
				state.counter = index + 1
				img.src = state.href[state.counter -1]
				fade.classList.add('active')
				state.isOpen = true
				document.body.style.overflow = 'hidden'
				render()
			})
		})


		right.addEventListener('click', e => {
				state.counter++
				render()
		})

		left.addEventListener('click', e => {
			state.counter--
			render()
		})

		document.addEventListener('keydown', e => {
			if (!state.isOpen) return

			if (e.key === 'ArrowLeft') {
				state.counter--
			} 
			else if (e.key === 'ArrowRight') {
				state.counter++
			}
			render()
		})

		fade.addEventListener('click', e => {
			if (e.target !== fade) return 
			fade.classList.remove('active')
			document.body.style.overflow = ''
		})

		const render = () => {
			if (state.counter === 0) {
				state.counter = state.href.length
			} 
			else if (state.counter >= state.href.length) {
				state.counter = 1
			}
			counterPicture.innerHTML = `${state.counter}/ ${state.href.length}`
			img.src = state.href[state.counter -1]
		}

	}

	pictureJSFullscreen(document.querySelectorAll('a[data-picture-js]'))
}




