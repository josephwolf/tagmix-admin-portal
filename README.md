# TagMix's Admin Portal

## About
During my time at Tagmix I was tasked with giving the non-technical staff needed a way to review administrate content easily. I made this site myself with little guidence and total control of the project - from the data entry up to the visual design of it. It eventually evolved to handle many more features, including geo-locational handling, video uploads, creating competitions, user administration, social network plugins and so on.

A lot of the functionality I tried to keep on the back end - which was (for the most part) a series of micro-services on AWS, which in turn distributed to S3 or Aurora or DynamoDB.

I obviously don't want to publicly commit anything that would allow people to exploit TagMix's existing structure. As a result, all of the data you see here is a static dummy replacement and anything other than the visual functionality has been removed. Uploading files will not upload, turning pages will not turn, deleting posts will not delete, and so on. Also, all email data has been censored.

Most of the functionality that was removed were simple GET POST or DELETE requests to the relevant services. In one case, the site would upload a file to S3, which would have it's own services to trigger, but would return a fufilled promise in the mean time to the site.

I've tried to make it so that you get a good feel for the data that would usually be present on the site. I've tried to take care not to have published anything sensative or personal, but if I missed some, please let me know and I shall remove it promptly!

## To Install
Clone this repo and run `nmp install`

Then run `npm run start-dev`

Open your browser to `http://localhost:9000`

The password is `password` (Changed for the sake of ease of access!)


## Contact Details:
Email: 		josephwolf.uk@gmail.com     
Twitter:		[@misterjwolf](https://twitter.com/MisterJWolf)   
LinkedIn: 	[Joseph Wolf](https://uk.linkedin.com/in/joseph-wolf-51a32398)  
