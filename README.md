## jQuery.darkener Plugin
jQuery Plugin to add a darkening gradient over a background image, to achieve better readabillity with enhanced contrast on superimposed text.

### Usage
Use this on elements with the image set as background-image. Something like this:
```html
<div style="background-image: url("[PATH-TO-IMG]")"></div>
```
And then:
```js
$('div').darkener();
```
### Options
It takes an object, the defaults:
```json
{
	align: 'top',
	size: '50%',
	colorStart: 'rgba(0,0,0,0)',
	colorEnd: 'rgba(0,0,0,0.8)',
	opacity: '1',
	mixBlendMode: 'normal'
}
```
All option values are css values.
- **align**: Defines from what side the overlay stretches. Use top, left, right, bottom. Any other value defaults to top.
- **size**: Defines how much of the area is covered.
- **colorStart**: Color to start with.
- **colorEnd**: Color on the aligned side.
- **opacity**: The overall opacity.
- **mixBlendMode**: How it blends with the image. (=CSS's [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode))

"By the time of this wrighting, this last option, **mixBlendMode**, will be ignored by MSIE and Edge as expected. At least until they have abandoned their own crappy work and made Edge a fork of Chrome."
### More than one darkener?
Use chaining like this:
```js
$(div).darkener({align:'top'}).darkener({align:'bottom'});
```

### Go rogue
Play around with the colorStart and colorEnd options. Try any css color value like HEX or even named colors. It's quite easy to 'convert' this darkener into a ligthener or a colorer or a whateverer ;]
