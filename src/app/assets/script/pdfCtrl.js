var baseUrl = '../images/';
var typeMap = {
    'web':baseUrl+'web.pdf',
    'app':baseUrl+'app.pdf'
}
var options = {
    pdfOpenParams: {
        view: "FitV",
        toolbar:1,
        statusbar:1,
        messages:1,
        navpanes:1
    },
    fallbackLink: "<p>该浏览器不支持在线浏览PDF，请下载 <a href='[url]'>文件下载地址</a></p>"
};
PDFObject.embed(typeMap['web'], "#pdfReader", options);

function viewPDF(type){
    PDFObject.embed(typeMap[type], "#pdfReader", options);
}