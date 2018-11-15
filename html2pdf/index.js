if (process.argv.length<4) {
	return -1
}

let url = process.argv[2]
let pdf = process.argv[3]

const puppeteer = require('puppeteer');

async function htmlToPDF(url,pdfFile) {

}

(async () => {
	htmlToPDF(url,pdf)
	const browser = await puppeteer.launch({
		args: [
		'--no-sandbox',
		'--disable-setuid-sandbox',
		'--disable-gpu'
		]
	});
	const page = await browser.newPage();
	console.log("goto ",url)
	await page.goto(url, {waitUntil: 'networkidle2'});
	//await page.waitForSelector('XXX');
	await page.emulateMedia('print');
	console.log("save pdf ",pdf)
	await page.pdf({path:pdf, format: 'A4',printBackground:'true'});

	await browser.close();
})();
