require('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

var SDK = require('blocksdk');
var sdk = new SDK();


	sdk.getContent(function (content) {
		var quill = new Quill('#editor-container', {
			theme: 'snow'
		});
		quill.root.innerHTML = content;
		function saveText() {
			var html = quill.root.innerHTML;
			sdk.setContent(html);
			sdk.setSuperContent('This is super content: ' + html);

			sdk.setData(function (data) {
				var numberOfEdits = data.numberOfEdits || 0;
				sdk.getData({
					numberOfEdits: numberOfEdits + 1
				});
			});
		}
		quill.on('text-change', saveText);
	});
