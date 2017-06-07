const path = require('path');
const chai = require('chai')
const extractor = require('../newspaperjs/lib/extractor');
const network = require('../newspaperjs/lib/network');
describe("Extractor", function(){
    let localArticleUrl = path.join(__dirname, 'data/html/newyorktimepost.html');
    let localSourceUrl = path.join(__dirname, 'data/html/newyorktimes.html');
    let localSourceCategoryUrl = path.join(__dirname, 'data/html/newyorktime-tech.html');
    
    describe("#getAll", function(){
        it.only("Should return array", function(){
            return extractor.getAllUrl(localSourceUrl).then(urls=>{
                //console.log(urls)
            })
        })
    })
    describe("#getAll", function(){
        it.only("Should return array", function(){
            return extractor.getCategoryUrls(localSourceUrl, 'https://nytimes.com', ['politics', 'sports'])
                            .then(categories=>{
                                //console.log(categories);
                            })
        })
    })
    describe("#getArticlesUrl", function(){
        it.only("Should return array", function(){
            return extractor.getArticlesUrl(localSourceCategoryUrl, 'https://www.nytimes.com/pages/technology')
                            .then(articlesUrl=>{
                                console.log(articlesUrl);
                            })
        })
    })
    describe("#getTitle", function(){
        it.only("Should return string", function(){
            network.getParsedHtml(localArticleUrl).then($=>{
                 let actual = extractor.getTitle($)
                 //console.log(actual);
                 chai.assert.typeOf(actual, 'string');
            }).catch(reason=>console.log(reason))
        })
    })
    describe("#getText", function(){
        it.only("Should return string", function(){
            network.getParsedHtml(localArticleUrl).then($=>{
                 let actual = extractor.getText($)
                 //console.log(actual);
                 chai.assert.typeOf(actual, 'string');
            }).catch(reason=>console.log(reason))
        })
    })
    describe("#getAuthor", function(){
        it.only("Should return string", function(){
            network.getParsedHtml(localArticleUrl).then($=>{
                 let actual = extractor.getAuthor($)
                 //console.log(actual);
                 chai.assert.typeOf(actual, 'string');
            }).catch(reason=>console.log(reason))
        })
    })
    describe("#getTopImage", function(){
        it.only("Should return string", function(){
            network.getParsedHtml(localArticleUrl).then($=>{
                 let actual = extractor.getTopImage($)
                 //console.log(actual);
                 chai.assert.typeOf(actual, 'string');
            }).catch(reason=>console.log(reason))
        })
    })
    describe("#getDate", function(){
        it.only("Should return string", function(){
            network.getParsedHtml(localArticleUrl).then($=>{
                 let actual = extractor.getDate($)
                 //console.log(actual);
                 chai.assert.typeOf(actual, 'string');
            }).catch(reason=>console.log(reason))
        })
    })
    describe("#getDescription", function(){
        it.only("Should return string", function(){
            network.getParsedHtml(localArticleUrl).then($=>{
                 let actual = extractor.getDescription($)
                // console.log(actual);
                 chai.assert.typeOf(actual, 'string');
            }).catch(reason=>console.log(reason))
        })
    })
    describe("#getKeywords", function(){
        it.only("Should return array", function(){
            network.getParsedHtml(localArticleUrl).then($=>{
                 let actual = extractor.getKeywords($)
                 //console.log(actual);
                 chai.assert.typeOf(actual, 'array');
            }).catch(reason=>console.log(reason))
        })
    })
})
