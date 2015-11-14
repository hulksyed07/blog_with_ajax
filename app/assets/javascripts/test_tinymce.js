var textArea_id = "description";

tinyMCE.init({
    //******bind to textarea 
    selector: "#description",
    mode: "textareas",
    paste_as_text: true,
    plugins: ['paste link textcolor'],
    force_br_newlines: true,
    paste_remove_spans: true,
    toolbar: "undo redo | bold italic underline forecolor | link unlink",
    menubar: false,
    statusbar: false,
    browser_spellcheck: true,
    forced_root_block: "",
    setup: function (editor) {
        editor.on('init', function() {
           $('#loading_gfx').css('display', 'none'); 
        });
    }
});

if (tinymce.editors.length > 0) {
    tinymce.execCommand('mceFocus', true, textArea_id );       
    tinymce.execCommand('mceRemoveEditor',true, textArea_id);        
    tinymce.execCommand('mceAddEditor',true, textArea_id);
}