import {Selector, t} from 'testcafe';

class springerHomePage{

get searchInputTextBox() {return Selector(".search-field input")}
get searchButton() { return Selector(".search-submit")}
get searchresultsHeader() {return Selector("#number-of-search-results-and-search-terms")}
get searchresultsCount() {return Selector("#number-of-search-results-and-search-terms strong")}
get applyContentTypeFilter() {return Selector("#content-type-facet a span")}

async search(text){
    await t.typeText(this.searchInputTextBox,text).
    wait(3000).
    click(this.searchButton).
    expect(this.searchresultsHeader.exists).ok();

}

async getNumberOfSearchResults(){
    const count = await  this.searchresultsCount.innerText;
    return count;
}

async applyContentType(type){
    await t.click(this.applyContentTypeFilter.withText(type)).
    wait(3000)
}

}

export default new springerHomePage();