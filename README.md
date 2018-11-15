# pdf-generator

pdf-generator Generates pdf from html templates and json files

The project is separated in two parts :
- the html to pdf conversion 
- the html generation

## Installation

```shell
git clone https://github.com/telemac/pdf-generator.git
cd pdf-generator
npm install
```

## HTML to PDF conversion

The html to pdf conversion uses [puppeteer](https://github.com/GoogleChrome/puppeteer)

You can test a conversion with the following command, the result will be in tiger.pdf :
```
node html2pdf/index.js "https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg" "tiger.pdf"
```

- [x] Make a simple command line tool that converts an url to a pdf file
- [ ] Allow some parameters
- [ ] Make a docker container
- [ ] Add an http interface


## HTML generation

Coming soom...

```
#npm install -g @vue/cli @vue/cli-service-global @vue/cli-init
#vue init nuxt-community/starter-template stagiaires
```
