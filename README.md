# COVID-19
An analytics dashboard with live COVID-19 Statistics

Created as a fun front end project during the Austin, TX "Shelter-in-place" order.

## Screenshot here

## Technologies
* React
* CSS
* (Mapping/charting libraries)

## 3RD Party APIs
* https://corona.lmao.ninja
* https://covid19api.com/?ref=producthunt#details

## Notes to self regarding deployment
This project is hosted with github pages using a custom DNS. DNS records are managed by Google Domains.

**After every commit:**
* Push changes to master

   ``` git push ```
* Make changes live on pages

   ``` npm run deploy ```
* Change custom domain in "settings"

   1. Go to settings
   2. Enter covid-19.amyspeed.dev in the custom domain prompt and SAVE
   3. Make sure the box is checked for Enforce HTTPS


