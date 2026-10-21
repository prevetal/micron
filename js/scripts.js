BODY = document.getElementsByTagName('body')[0]

// Mobile width
initAdaptiveViewport()

document.addEventListener('DOMContentLoaded', function() {
	// First section slider
	const firstSectionSlider = document.querySelector('.first_section .slider .swiper')

	if (firstSectionSlider) {
		const firstSectionPoints = document.querySelectorAll('.first_section .points .point')

		const firstSectionSwiper = new Swiper(firstSectionSlider, {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(firstSectionSlider, '--spaceBetween'),
			slidesPerView: getCssVar(firstSectionSlider, '--slidesPerView'),
			lazy: true,
			navigation: {
				nextEl: firstSectionSlider.querySelector('.swiper-button-next'),
				prevEl: firstSectionSlider.querySelector('.swiper-button-prev')
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'bottom', $(swiper.el).find('.image').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'bottom', $(swiper.el).find('.image').outerHeight() * 0.5
						)
					})
				},
				slideChange: swiper => {
					firstSectionPoints.forEach(point => point.classList.toggle('active', + point.dataset.slide === swiper.realIndex))
				}
			}
		})

		// Points
		firstSectionPoints.forEach(point => {
			point.addEventListener('click', () => firstSectionSwiper.slideToLoop(+point.dataset.slide))
		})
	}


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		const products = el.closest('.products')

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: products.querySelector('.swiper-button-next'),
				prevEl: products.querySelector('.swiper-button-prev')
			},
			breakpoints: {
				0: {
					spaceBetween: getCssVar(el, '--spaceBetween-0'),
					slidesPerView: getCssVar(el, '--slidesPerView-0'),
				},
				768: {
					spaceBetween: getCssVar(el, '--spaceBetween-768'),
					slidesPerView: getCssVar(el, '--slidesPerView-768'),
				},
				1280: {
					spaceBetween: getCssVar(el, '--spaceBetween-1280'),
					slidesPerView: getCssVar(el, '--slidesPerView-1280'),
				},
				1440: {
					spaceBetween: getCssVar(el, '--spaceBetween-1440'),
					slidesPerView: getCssVar(el, '--slidesPerView-1440'),
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.product')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Contacts info images slider
	const contactsInfoImagesSlider = document.querySelector('.contacts_info .swiper')

	if (contactsInfoImagesSlider) {
		new Swiper(contactsInfoImagesSlider, {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(contactsInfoImagesSlider, '--spaceBetween'),
			slidesPerView: getCssVar(contactsInfoImagesSlider, '--slidesPerView'),
			lazy: true,
			navigation: {
				nextEl: contactsInfoImagesSlider.querySelector('.swiper-button-next'),
				prevEl: contactsInfoImagesSlider.querySelector('.swiper-button-prev')
			}
		})
	}


	// History slider
	const historySliders = [],
		history = document.querySelectorAll('.history .swiper')

	history.forEach((el, i) => {
		el.classList.add('history_s' + i)

		const history = el.closest('.history')

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: history.querySelector('.swiper-button-next'),
				prevEl: history.querySelector('.swiper-button-prev')
			},
			scrollbar: {
				el: el.querySelector('.swiper-scrollbar'),
				draggable: true,
			},
			breakpoints: {
				0: {
					spaceBetween: getCssVar(el, '--spaceBetween-0'),
					slidesPerView: getCssVar(el, '--slidesPerView-0'),
				},
				768: {
					spaceBetween: getCssVar(el, '--spaceBetween-768'),
					slidesPerView: getCssVar(el, '--slidesPerView-768'),
				},
				1280: {
					spaceBetween: getCssVar(el, '--spaceBetween-1280'),
					slidesPerView: getCssVar(el, '--slidesPerView-1280'),
				},
				1440: {
					spaceBetween: getCssVar(el, '--spaceBetween-1440'),
					slidesPerView: getCssVar(el, '--slidesPerView-1440'),
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		historySliders.push(new Swiper('.history_s' + i, options))
	})


	// Photo gallery slider
	const photoGallerySliders = [],
		photoGallery = document.querySelectorAll('.photo_gallery .swiper')

	photoGallery.forEach((el, i) => {
		el.classList.add('photo_gallery_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			spaceBetween: getCssVar(el, '--spaceBetween'),
			slidesPerView: getCssVar(el, '--slidesPerView'),
			pagination: {
				el: el.querySelector('.swiper-pagination'),
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
		}

		photoGallerySliders.push(new Swiper('.photo_gallery_s' + i, options))
	})


	// Certificates slider
	const certificatesSliders = [],
		certificates = document.querySelectorAll('.certificates .swiper')

	certificates.forEach((el, i) => {
		el.classList.add('certificates_s' + i)

		const certificates = el.closest('.certificates')

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: certificates.querySelector('.swiper-button-next'),
				prevEl: certificates.querySelector('.swiper-button-prev')
			},
			breakpoints: {
				0: {
					spaceBetween: getCssVar(el, '--spaceBetween-0'),
					slidesPerView: getCssVar(el, '--slidesPerView-0'),
				},
				768: {
					spaceBetween: getCssVar(el, '--spaceBetween-768'),
					slidesPerView: getCssVar(el, '--slidesPerView-768'),
				},
				1024: {
					spaceBetween: getCssVar(el, '--spaceBetween-1024'),
					slidesPerView: getCssVar(el, '--slidesPerView-1024'),
				},
			}
		}

		certificatesSliders.push(new Swiper('.certificates_s' + i, options))
	})


	// Partners slider
	const partnersSliders = [],
		partners = document.querySelectorAll('.partners .swiper')

	partners.forEach((el, i) => {
		el.classList.add('partners_s' + i)

		const partners = el.closest('.partners')

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: partners.querySelector('.swiper-button-next'),
				prevEl: partners.querySelector('.swiper-button-prev')
			},
			breakpoints: {
				0: {
					spaceBetween: getCssVar(el, '--spaceBetween-0'),
					slidesPerView: getCssVar(el, '--slidesPerView-0'),
				},
				768: {
					spaceBetween: getCssVar(el, '--spaceBetween-768'),
					slidesPerView: getCssVar(el, '--slidesPerView-768'),
				},
				1024: {
					spaceBetween: getCssVar(el, '--spaceBetween-1024'),
					slidesPerView: getCssVar(el, '--slidesPerView-1024'),
				},
				1280: {
					spaceBetween: getCssVar(el, '--spaceBetween-1280'),
					slidesPerView: getCssVar(el, '--slidesPerView-1280'),
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		partnersSliders.push(new Swiper('.partners_s' + i, options))
	})


	// Reviews slider
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach((el, i) => {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
			},
			pagination: {
				el: el.querySelector('.swiper-pagination'),
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: getCssVar(el, '--spaceBetween'),
			slidesPerView: getCssVar(el, '--slidesPerView'),
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Popovers
	document.querySelectorAll('[popover]').forEach(el => {
		el.addEventListener('toggle', e => {
			document.querySelector(`[popovertarget="${el.id}"]`)?.classList.toggle('active', e.newState === 'open')
		})
	})


	// Dialog
	$(document).on('click', '[data-open-modal]', function(e) {
		e.preventDefault()

		const id = $(this).data('modal')

		document.getElementById(id).showModal()
	})



	$(document).on('click', '[data-open-modal-ajax]', function(e) {
		e.preventDefault()

		const $btn = $(this).closest('[data-open-modal-ajax]'),
			url = $btn.data('src')

		if (!url) {
			console.error('Нет data-src у кнопки')
			return
		}

		$.ajax({
			url: url,
			method: 'GET',
			success: function(html) {
				const $html = $(html),
					id = $html.attr('id')

				if (id) {
					$('#' + id).remove()
				}

				$('body').append($html)

				const dialog = id ? document.getElementById(id) : $html[0]

				dialog.showModal()
			},
			error: function() {
				console.error('Не удалось загрузить модалку по адресу ' + url)
			}
		})
	})

	$(document).on('click', '[data-close-modal]', function() {
		$(this).closest('dialog')[0].close()
	})

	$(document).on('click', '.modal', function(e) {
		if (!$(e.target).closest('.inner').length) {
			this.close()
		}
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .catalog_btn').removeClass('active')
		$('.mob_catalog').removeClass('show')

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.mob_menu').toggleClass('show')
	})


	$('.mob_menu .menu a.sub_link').click(function(e) {
		e.preventDefault()

		$('.mob_menu .menu .sub').removeClass('show')
		$(this).next('.sub').addClass('show')
	})


	$('.mob_menu .menu .back .btn').click(function(e) {
		e.preventDefault()

		$(this).closest('.sub').removeClass('show')
	})


	// Mob. catalog
	$('.mob_header .catalog_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('.mob_menu').removeClass('show')

		$('.mob_header .catalog_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.mob_catalog').toggleClass('show')
	})


	// Phone input mask
	new Maska.MaskInput('input[type=tel]', {
		mask: '+7 (###) ###-##-##'
	})


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)'),
		selectsInstances = []

	if (selects) {
		selects.forEach(el => {
			const inst = NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el._niceSelect = inst
			selectsInstances.push(inst)

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	// Filter
	$('.filter .dropdown .name').click(function(e) {
		e.preventDefault()

		$(this)
			.toggleClass('active')
			.next()
			.toggleClass('show')
	})


	$('.filter .dropdown .links a.sub_link').click(function(e) {
		e.preventDefault()

		$(this)
			.toggleClass('active')
			.next()
			.toggleClass('show')
	})


	const lengthRange = $('#length_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 150000,
		from: 0,
		to: 100000,
		step: 100,
		onChange: data => {
			$('.length_range .input.from').val(data.from.toLocaleString('ru-RU'))
			$('.length_range .input.to').val(data.to.toLocaleString('ru-RU'))
		},
	}).data('ionRangeSlider')

	$('.length_range .input').keyup(function () {
		lengthRange.update({
			from: parseInt($('.length_range .input.from').val().replace(/[^\d]/g, ""), 10),
			to: parseInt($('.length_range .input.to').val().replace(/[^\d]/g, ""), 10),
		})
	})


	const widthRange = $('#width_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 150000,
		from: 0,
		to: 100000,
		step: 100,
		onChange: data => {
			$('.width_range .input.from').val(data.from.toLocaleString('ru-RU'))
			$('.width_range .input.to').val(data.to.toLocaleString('ru-RU'))
		},
	}).data('ionRangeSlider')

	$('.width_range .input').keyup(function () {
		widthRange.update({
			from: parseInt($('.width_range .input.from').val().replace(/[^\d]/g, ""), 10),
			to: parseInt($('.width_range .input.to').val().replace(/[^\d]/g, ""), 10),
		})
	})


	const heightRange = $('#height_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 150000,
		from: 0,
		to: 100000,
		step: 100,
		onChange: data => {
			$('.height_range .input.from').val(data.from.toLocaleString('ru-RU'))
			$('.height_range .input.to').val(data.to.toLocaleString('ru-RU'))
		},
	}).data('ionRangeSlider')

	$('.height_range .input').keyup(function () {
		heightRange.update({
			from: parseInt($('.height_range .input.from').val().replace(/[^\d]/g, ""), 10),
			to: parseInt($('.height_range .input.to').val().replace(/[^\d]/g, ""), 10),
		})
	})


	// Changing the quantity
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Product info
	if ($('.product_info .images').length) {
		const productImages = document.querySelector('.product_info .big .swiper'),
			productThumbs = document.querySelector('.product_info .thumbs .swiper')

		const productThumbsSlider = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: productThumbs.querySelector('.swiper-button-next'),
				prevEl: productThumbs.querySelector('.swiper-button-prev')
			},
			breakpoints: {
				0: {
					spaceBetween: getCssVar(productThumbs, '--spaceBetween-0'),
					slidesPerView: getCssVar(productThumbs, '--slidesPerView-0'),
				},
				768: {
					spaceBetween: getCssVar(productThumbs, '--spaceBetween-768'),
					slidesPerView: getCssVar(productThumbs, '--slidesPerView-768'),
				},
				1024: {
					spaceBetween: getCssVar(productThumbs, '--spaceBetween-1024'),
					slidesPerView: getCssVar(productThumbs, '--slidesPerView-1024'),
				}
			},
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(productImages, '--spaceBetween'),
			slidesPerView: getCssVar(productImages, '--slidesPerView'),
			lazy: true,
			thumbs: {
				swiper: productThumbsSlider
			},
			navigation: {
				nextEl: productImages.querySelector('.swiper-button-next'),
				prevEl: productImages.querySelector('.swiper-button-prev')
			},
		})
	}


	$('.product_info .features .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this)
			.toggleClass('active')
			.closest('.items')
			.find('.hide')
			.toggleClass('show')
	})


	// Certs slider
	const certsSliders = [],
		certs = document.querySelectorAll('.certs .swiper')

	certs.forEach((el, i) => {
		el.classList.add('certs_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: getCssVar(el, '--spaceBetween-0'),
					slidesPerView: getCssVar(el, '--slidesPerView-0'),
				},
				768: {
					spaceBetween: getCssVar(el, '--spaceBetween-768'),
					slidesPerView: getCssVar(el, '--slidesPerView-768'),
				},
				1280: {
					spaceBetween: getCssVar(el, '--spaceBetween-1280'),
					slidesPerView: getCssVar(el, '--slidesPerView-1280'),
				}
			}
		}

		certsSliders.push(new Swiper('.certs_s' + i, options))
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Checkout
	$('.checkout .delivery .radio input').change(function(e) {
		e.preventDefault()

		$('.checkout .delivery .method_info').hide()
		$('.checkout .delivery .method_info' + $(this).data('info')).fadeIn(300)
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Sizes table - highlighting row and column
	const sizesTable = document.querySelector('.sizes_table')

	if (sizesTable) {
		const sizeSelectors = sizesTable.querySelectorAll('[data-size-axis]'),
			sizeResult = sizesTable.querySelector('[data-size-result]')

		const updateSizeResult = () => {
			const height = sizesTable.querySelector('[data-size-axis="height"]')?.value,
				width = sizesTable.querySelector('[data-size-axis="width"]')?.value,
				widthHeaders = [...sizesTable.querySelectorAll('thead th.dark')],
				widthIndex = widthHeaders.findIndex(header => header.textContent.trim() === width),
				heightRow = [...sizesTable.querySelectorAll('tbody tr')].find(row =>
					row.querySelector('td.dark')?.textContent.trim() === height
				),
				sizeLink = heightRow?.querySelectorAll('td')[widthIndex + 1]?.querySelector('a')

			if (!sizeResult || !sizeLink) return

			sizeResult.href = sizeLink.href
			sizeResult.textContent = `${sizeLink.textContent.trim()} мм`
		}

		sizeSelectors.forEach(select => select.addEventListener('change', updateSizeResult))
		updateSizeResult()
	}

	$('body').on('mouseenter', '.sizes_table td:not(.dark)', function() {
		let index = $(this).index()

		$(this).prevAll('td:not(.dark)').addClass('hover')

		$(this).closest('tr').prevAll('tr').each(function() {
			$(this)
				.children('td')
				.eq(index)
				.not('.dark')
				.addClass('hover')
		})
	})

	$('body').on('mouseleave', '.sizes_table td:not(.dark)', function() {
		$(this)
			.closest('table')
			.find('td.hover')
			.removeClass('hover')
	})


	// Catalog dropdown - main categories
	const setActiveCategory = link => {
		let mainCategories = link.closest('.main_categories')

		mainCategories
			.find('.link')
			.removeClass('active')

		mainCategories
			.find('.sub_categories')
			.removeClass('show')

		link
			.addClass('active')
			.next('.sub_categories')
			.addClass('show')
	}

	let categoryPointerType = 'mouse'

	$('body').on('pointerdown', '.main_categories .link', e => categoryPointerType = e.originalEvent.pointerType)

	$('body').on('pointerenter', '.main_categories .link', function(e) {
		if (e.originalEvent.pointerType === 'mouse') setActiveCategory($(this))
	})

	$('body').on('click', '.main_categories .link', function(e) {
		if (categoryPointerType === 'mouse') return

		e.preventDefault()

		setActiveCategory($(this))
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Catalog - spoler_btn
	$('.catalog .item .spoler_btn').click(function(e) {
		e.preventDefault()

		const item = $(this).closest('.item')

		$(this).toggleClass('active')

		if ($(this).hasClass('active')) {
			item.find('.thumb').hide()
			item.find('.sub').addClass('show')
		} else {
			item.find('.thumb').show()
			item.find('.sub').removeClass('show')
		}
	})
})
