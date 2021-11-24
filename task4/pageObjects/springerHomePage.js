import {Selector, t} from 'testcafe';
import utility from '../utilities/utility.js'

class springerHomePage{

get searchInputTextBox() {return Selector(".search-field input")}
get searchButton() { return Selector(".search-submit")}
get searchresultsHeader() {return Selector("#number-of-search-results-and-search-terms")}
get searchresultsCount() {return Selector("#number-of-search-results-and-search-terms strong")}
get applyContentTypeFilter() {return Selector("a span")}
get filterTypeChipinHeader() {return Selector(".facet-constraint-message .facet-link")}
get datePublishedFilter() {return Selector("#date-facet button")}
get startYear() {return Selector("#start-year")}
get endYear() {return Selector("#end-year")}
get dateFilterType() {return Selector("#date-facet-mode")}
get dateFilterSubmit() {return Selector("#date-facet-submit")}
get article() {return Selector("#results-list li h2 a")}


async search(text){
    await t.typeText(this.searchInputTextBox,text).
    click(this.searchButton).
    expect(this.searchresultsHeader.exists).ok();

}

async getNumberOfSearchResults(){
    const count = await  this.searchresultsCount.innerText;
    return count;
}

async applyFilter(type){
    await t.click(this.applyContentTypeFilter.withText(type)).
    expect(this.filterTypeChipinHeader.withText(type).exists).ok();
}

async verifyFilterApplied(type){
    await t.expect(this.filterTypeChipinHeader.withText(type).exists).ok();
}

async clearFilterApplied(type){
    await t.click(this.filterTypeChipinHeader.withText(type))
}

async setDateFilter(start,end){
    await t.click(this.datePublishedFilter).
    typeText(this.startYear,start).
    typeText(this.endYear,end).
    click(this.dateFilterSubmit)
}

async clickOnArticle(){
    await t.click(this.article);
}

async verifyinArticlePage(){
    await t.expect(utility.getLocation()).contains("article", "didnt navigate to article page", {timeout: 20000})

}
}

export default new springerHomePage();