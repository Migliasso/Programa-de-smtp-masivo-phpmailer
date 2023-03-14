

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="assets/vendor/jquery-3.6.0/jquery-3.6.0.min.js"></script>
	<script src="assets/vendor/tinymce/js/tinymce.min.js"></script>
	<link href="assets/vendor/bootstrap-4.6.2/css/bootstrap.min.css" rel="stylesheet"/>
	<link href="assets/vendor/DataTables/DataTables-1.13.2/css/dataTables.bootstrap4.min.css" rel="stylesheet"/>
	<title></title>
	<link rel="stylesheet" href="stylenav.css">
	
	
</head>
<script type="text/javascript">
	var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		tinymce.init({
			selector: 'textarea.textarea',
			fullpage_default_doctype: "<!DOCTYPE html>",
			fullpage_default_encoding: "UTF-8",
			fullpage_default_langcode: "es-ES",
			plugins: 'print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons code',
			mobile: {
				plugins: 'print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars emoticons'
			},
			menu: {
				tc: {
					title: 'Comments',
					items: 'addcomment showcomments deleteallconversations'
				}
			},
			menubar: 'file edit view insert format tools table tc help',
			toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed link anchor codesample | a11ycheck ltr rtl | showcomments addcomment | code',
			autosave_ask_before_unload: true,
			autosave_interval: '30s',
			autosave_prefix: '{path}{query}-{id}-',
			autosave_restore_when_empty: false,
			autosave_retention: '2m',
			image_advtab: true,
			image_class_list: [
				{ title: 'None', value: '' },
				{ title: 'Some class', value: 'class-name' }
			],
			importcss_append: true,
			height: 400,
			image_caption: true,
			quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
			noneditable_noneditable_class: 'mceNonEditable',
			toolbar_mode: 'sliding',
			spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
			tinycomments_mode: 'embedded',
			content_style: '.mymention{ color: gray; }',
			contextmenu: 'link image imagetools table configurepermanentpen',
			a11y_advanced_options: true,
			skin: useDarkMode ? 'oxide-dark' : 'oxide',
			content_css: 'assets/vendor/tinymce/css/stylesheet.css',
		});
</script>
<body>
	<NAV></NAV>
	<?php require_once "nav.php"; ?>
	</NAV>

	<div style="width: 80vw; margin: 15vh auto;">
		<textarea id="textEditor" class="textarea" name="textEditor" style="width: 100%; height: 100px" tabindex="2">
			<p>Creé su html....</p>
		</textarea>
	</div>

</body>
</html>