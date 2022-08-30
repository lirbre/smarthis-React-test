Guide to Run Locally:
-------------------------------------------------
- Clone and Install with `npm install` or `yarn install`.
  - Use `npm run dev` or `yarn dev` to run it as Dev.
     - You'll need to setup the .env variables since this project uses the Twitter API.
   - You'll have to setup `NEXT_PUBLIC_TWITTER_CLIENT_ID` and `NEXT_PUBLIC_TWITTER_CLIENT_SECRET` that is responsible for making the OAuth 2.0 working and after that, you'll need to setup `NEXT_PUBLIC_TWITTER_BEARER` which is the Bearer Token responsible for making calls with the Twitter API inside the Next API.
     
- Check out the Live Version - [Smarthis Challenge - Breno Lira](https://smarthis-react-test.vercel.app/)

Sumary
-------------------------------------------------
- This project is made using Smarthis test requiriments.
- It was made using Next.js, TypeScript and Tailwind. The Authentication is controlled using Next-Auth and handled with a custom Login Page. The UX/UI is based on [Smarthis Website](https://smarthis.com.br/) itself.
  - The information from the user is handled by the Next API after the user logs in with the OAuth. 

Home
-------------------------------------------------
- The home is a simplified home of their home, using their animated SVG images in ther respective `Object` tags and also a custom animation using Keyframes that try to copy their website animation.

![Homepage](https://user-images.githubusercontent.com/86065449/187442259-c7e167bf-cf98-434f-b9b9-e5299c1c78d5.png)

API - Tweets
-------------------------------------------------
- The connect and disconnect is handled within Next.js itself using the `[...next-auth.ts]` page. And the API can be acessed through `https://smarthis-react-test.vercel.app/api/tweets/:id` and the `id` is a slang that is generated using the OAuth v2.0 information.

With/Without User
-------------------------------------------------
- The home itself dinamically changes if the user is Logged or not.
  - It has an simple dinamic UI with a button - if the user has to login - from Smarthis Website and also an animated `object`.

![Home without user](https://user-images.githubusercontent.com/86065449/187444338-a6810f84-5e8d-4345-aa3a-8ad066ef44e2.png)

Custom Signin page
-------------------------------------------------
- This page is nedded to confirm the next-auth before the user is redirect to Twitter. 
  - It has an simple UI with a button from Smarthis Website and also an animated `object`.

![Custom Sign In page](https://user-images.githubusercontent.com/86065449/187444607-f179d578-bb22-412f-a59f-67fc2d4540d7.png)

Embed Tweets 
-------------------------------------------------
- Once the user is Authenticated the Home will display his last 100 tweets. 
  - It's using `react-embed-twitter` to make an easier but completely functional Twitter implementation.
  - I'm using a custom embed component so I can add a simple loading state and a Fade Animation using the "onLoad" property from `TwitterTweetEmbed` component.
  
![Embed tweets](https://user-images.githubusercontent.com/86065449/187459526-9f3b7029-bfc6-4929-a17a-ca4335681949.png)
![Loading component](https://user-images.githubusercontent.com/86065449/187460713-9013b202-3654-40a3-8285-cab23160ea70.png)

Navbar
-------------------------------------------------
- The Navbar is pretty accurate to their Navbar. It also has their `:before` animation.
  - But, since we have a Authentication the navbar shows the user Photo and also a Sign Out button when the user is Logged in.
  
![Navbar without user](https://user-images.githubusercontent.com/86065449/187443574-f902fa8e-2ed0-47e7-9ff0-4039cde4b16a.png)
![Nabar with user](https://user-images.githubusercontent.com/86065449/187443579-278265d9-b824-400c-8eab-9ad25ebb6904.png)
![Navbar with user - hover](https://user-images.githubusercontent.com/86065449/187443582-3c9f9820-064c-4d38-a94a-d5fdf07c3cab.png)

Footer 
-------------------------------------------------
- Also an accurate version of their Footer. 

![Footer](https://user-images.githubusercontent.com/86065449/187443783-04884b4d-068b-406d-b23d-76a560b36ed8.png)
