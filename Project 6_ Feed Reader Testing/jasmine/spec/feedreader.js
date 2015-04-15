/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$ ( function () {
    
    var $f = $ ( '.feed' ); // grab the feed list in the DOM
    var $m = $ ( '.menu-icon-link' ); // grab the menu icon link in the DOM

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe( 'RSS Feeds',
        function () {
            /* This is our first test - it tests to make sure that the
             * allFeeds variable has been defined and that it is not
             * empty. Experiment with this before you get started on
             * the rest of this project. What happens when you change
             * allFeeds in app.js to be an empty array and refresh the
             * page?
             */
            it( 'allFeeds Is Defined',
                function() {
                    expect(allFeeds).toBeDefined();
                    expect(allFeeds.length).not.toBe(0);
                }
            );

            /* TODO: Write a test that loops through each feed
             * in the allFeeds object and ensures it has a URL defined
             * and that the URL is not empty.
             */
            it ( 'Each Feed Has a URL',
                function () {
                    for ( var i = 0, len = allFeeds.length; i < len; i++ ) {
                        expect ( allFeeds [ i ].url ).toBeDefined ();
                        expect ( allFeeds [ i ].url ).not.toEqual ( '' );
                    }
                }
            );

            /* TODO: Write a test that loops through each feed
             * in the allFeeds object and ensures it has a name defined
             * and that the name is not empty.
             */
            it ( 'Each Feed Has a Non-Empty Name',
                function () {
                    for ( var i = 0, len = allFeeds.length; i < len; i++ ) {
                        expect ( allFeeds [ i ].name ).toBeDefined ();
                        expect ( allFeeds [ i ].name ).not.toEqual ( '' );
                    }
                }
            );
        }
    );

    /* TODO: Write a new test suite named "The menu" */
    describe ( 'The menu',
        function () {

            /* TODO: Write a test that ensures the menu element is
             * hidden by default. You'll have to analyze the HTML and
             * the CSS to determine how we're performing the
             * hiding/showing of the menu element.
             */
            it ( 'Menu Element Is Hidden by Default',
                function () {
                    expect ( $ ( 'body' ).hasClass ( 'menu-hidden' ) ).toEqual ( true );
                }
            );

            /* TODO: Write a test that ensures the menu changes
             * visibility when the menu icon is clicked. This test
             * should have two expectations: does the menu display when
             * clicked and does it hide when clicked again.
             */
            it ( 'Menu Toggles Visibility When the Menu Icon Is Clicked',
                function () {
                    // var $m = $ ( '.menu-icon-link' );
                    $m.click (); // click menu icon
                    expect ( $ ( 'body' ).hasClass ( '' ) ).toEqual ( true );
                    $m.click ();
                    expect ( $ ( 'body' ).hasClass ( 'menu-hidden' ) ).toEqual ( true );
                }
            );
        }
    );

    /* TODO: Write a new test suite named "Initial Entries" */
    describe ( 'Initial Entries',
        function () {

            /* TODO: Write a test that ensures when the loadFeed
             * function is called and completes its work, there is at least
             * a single .entry element within the .feed container.
             * Remember, loadFeed() is asynchronous so this test wil require
             * the use of Jasmine's beforeEach and asynchronous done() function.
             */

            beforeEach (
                function ( done ) {
                    loadFeed ( 1 );
                    // id = 0;
                    setTimeout ( function () { done(); }, 4500);
                }
            );

            it ( 'loadFeed Completed Its Work With At Least a Single Entry',
                    function ( done ) {
                        // var $f = $ ( '.feed' );
                        // console.log ( $f );
                        // console.log ( $f [ 0 ] );
                        // console.log ( $f [ 0 ].children.length >= 1 );
                        expect ( $f [ 0 ].children.length ).toBeGreaterThan ( 0 );
                        done ();
                    }
                );

            afterEach (
                function () {
                    loadFeed ( 0 );
                }
            );
        }
    );

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe ( 'New Feed Selection',
        function () {

            /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */

            var feedLinks = [];
            // var newLinks;
            var feedID = 0;
            // console.log ( $f [ 0 ].children );

            beforeEach (
                function ( done ) {
                    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    loadFeed ( feedID );
                    // var $f = $ ( '.feed' );
                    setTimeout ( function () { done(); }, 4900 );
                    // console.log ( $f [ 0 ].children );
                    // done ();
                }
            );


            it ( '1st Feed Selection',
                function () {
                    // console.log ( $f [ 0 ].children );
                    // setTimeout ( function () { done(); }, 1);
                    expect ( $f [ 0 ].children.length ).toBeGreaterThan ( 0 );
                    feedLinks =  $( $f [ 0 ].children ).toArray ();
                    feedLinks =  feedLinks.map ( function ( elem, i, arr ) { return elem.href; } );
                    // console.log ( feedLinks );
                    feedID = 1;
                    // done ();
                }
            );

            it ( '2nd Feed Is Different',
                function () {
                    // setTimeout ( function () { done(); }, 1 );
                    // var $f = $ ( '.feed' );
                    // console.log ( $f [ 0 ].children );
                    var newLinks = $( $f [ 0 ].children ).toArray ();
                    newLinks = newLinks.map ( function ( elem, i, arr ) { return elem.href; } );
                    // console.log ( newLinks );
                    feedLinks = jQuery.unique ( feedLinks.concat ( newLinks ).sort () );
                    // console.log ( feedLinks );
                    // console.log ( newLinks.length )
                    // console.log ( feedLinks.length );
                    // expect ( feedLinks.length ).not.toEqual ( newLinks.length );
                    expect ( feedLinks.length ).toBeGreaterThan ( newLinks.length );
                    // feedID = 0;
                    // loadFeed ( 0 );
                    // done ();
                }
            );
        }
    );

} () );
