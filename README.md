### COVID-19
A dashboard for charts and maps displaying live COVID-19 Statistics

Created as a front end react project during the Austin, TX "Shelter-in-place" order.

## Screenshot here

## Technologies
* React
* CSS
* (Mapping/charting libraries)

## 3RD Party APIs
* https://corona.lmao.ninja
* https://api.covid19api.com

# Notes to self regarding deployment
This project is hosted with github pages using a custom DNS. DNS records are managed by Google Domains. After every commit:
* Push changes to master
``` git push ```
* Make changes live on pages
``` npm run deploy ```
* Change custom domain in "settings"
- Go to settings
- enter covid-19.amyspeed.dev in the custom domain prompt and SAVE
- make sure the box is checked for Enforce HTTPS


