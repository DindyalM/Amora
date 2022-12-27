<script>
  import "../app.css";
  
  //import puppeteer from 'puppeteer';

    (async () => {
    // Launch the browser
    //const browser = await puppeteer.launch();

    // Create a page
    //const page = await browser.newPage();

    // Go to your site
    //await page.goto('https://www.fashionnova.com/collections/dresses');

    // Query for an element handle.
    //const element = await page.waitForSelector('div > .collection-list__page');

    // Do something with element...
    //await element.click(); // Just an example.
    console.log('element');
    // Dispose of handle
    //await element.dispose();

    // Close browser.
    //await browser.close();
  })();

</script>

<header>
<nav class="w-full bg-red-700 max-h-28">
  <div class="flex mb-0 h-12">
    <div class="w-full bg-red-700 max-h-14"></div> 
  </div>

  <div class="flex mb-2">
    <div class="w-1/3 bg-gray-400 h-12">
      <h1>home,men,women</h1>
    </div>
    <div class="w-1/3 bg-gray-500 h-12">
      <h1>AMORA</h1>
    </div>
    <div class="w-1/3 bg-gray-400 h-12">help</div>
  </div>

</nav>
</header>
<slot />


  
