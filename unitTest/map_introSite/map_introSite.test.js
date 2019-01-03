const page = require('./map_introSite.js')

test('introSite', () => {
    const introduceSite = [12,2,3,4,5,6,9,16,25,34,23,76,43];
    page.introSite();
    for(let i = 0; i < page.data.markersToShow.length; i++){
        expect(introduceSite).toContain(page.data.markersToShow[i].id);
    }
    
})