function runCode() {
    const htmlCode = document.getElementById('htmlEditor').value;
    const cssCode = `<style>${document.getElementById('cssEditor').value}</style>`;
    const jsCode = `<script>${document.getElementById('jsEditor').value}<\/script>`;

    const outputFrame = document.getElementById('outputFrame');
    const completeCode = `${htmlCode}${cssCode}${jsCode}`;

    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write(completeCode);
    outputFrame.contentDocument.close();
}
