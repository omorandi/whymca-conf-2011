// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

// TODO: write your module tests here
var module = require('com.whymca.smsdialog');
Ti.API.info("module is => " + module);


smsDialog = module.createSMSDialog();

if (!smsDialog.isSupported()) {
	label.text = ('SMSDialog not supported')
}
else {
	smsDialog.recipients = ['+14151234567'];
   	smsDialog.messageBody = 'Test message from me';
   	smsDialog.barColor = 'red';

	smsDialog.open({animated: true});
}
