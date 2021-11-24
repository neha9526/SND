import { Selector } from 'testcafe';
import springerHomePage from '../pageObjects/springerHomePage';

fixture `Validate search functionality using facet filters & advance search`
    .page `https://link.springer.com/`;

test('Apply Facet Filters and open an article with open access', async t => {
    await springerHomePage.search("\"Sustainability\" AND  \"Management\"");
    
    await springerHomePage.applyFilter("Chapter");
    await springerHomePage.applyFilter("Business and Management");
    await springerHomePage.applyFilter("Sustainability Management");
    await springerHomePage.applyFilter("English");

    await springerHomePage.setDateFilter("2020","2021");

    // Remove Chapter Filter and apply Articles filter

    await springerHomePage.clearFilterApplied("Chapter")
    await springerHomePage.applyFilter("Article");
    await springerHomePage.verifyFilterApplied("Article");

    // First Article and click on it 

    await springerHomePage.clickOnArticle();
    await springerHomePage.verifyinArticlePage();
});

test('Apply Advanced Filters and open an article with open access', async t => {
    
    await springerHomePage.search("\"Sustainability\" AND  \"Management\"");
    
    
});