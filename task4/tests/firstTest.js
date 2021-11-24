import { Selector } from 'testcafe';
import springerHomePage from '../pageObjects/springerHomePage';

fixture `Getting Started`
    .page `https://link.springer.com/`;

test('My first test', async t => {
    await springerHomePage.search("\"Sustainability\" AND  \"Management\"");
    const numberofSearchResults = await springerHomePage.getNumberOfSearchResults();
    console.log(numberofSearchResults)
    await springerHomePage.applyContentType("Chapter")
    const numberofSearchResultsAsChapters = await springerHomePage.getNumberOfSearchResults();
    console.log(numberofSearchResultsAsChapters)
    
});
