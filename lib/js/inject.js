function removeVendoredFiles() {
    document.querySelectorAll("div.file").forEach(
        function (e) {
            const path = e.getAttribute('data-tagsearch-path');
            if (path && path.startsWith('vendor/')) {
                e.remove();
            }
        }
    );
}

removeVendoredFiles();
document.addEventListener('DOMNodeInserted', removeVendoredFiles);