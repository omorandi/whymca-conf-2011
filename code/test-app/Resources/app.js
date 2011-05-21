var win = Titanium.UI.createWindow({  
    title:'Hello',
    backgroundColor:'#fff'
});

var label1 = Titanium.UI.createLabel({
	color:'#333',
	text:'Hello world!',
	textAlign: 'center',
	font: {fontSize: 30, fontWeight: 'bold'}
});

win.add(label1);

var bt = Titanium.UI.createButton({
	title: 'Click me', 
	width: 100,
	height: 40,
	bottom: 40
})

bt.addEventListener('click', function(e) {
	label1.text = 'WHYMCA ROCKS!';
});

win.add(bt);

win.open();
