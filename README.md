# Odin Shopping Cart App 
This is a react web app the fetches from the fake store api to send productd to my store. I origannly had a ruby on rails api that was fetching the info for the products page but it didn't work when I hosted the projects so I have react fetch the info now. I also added tailwindcss to do all the css on the page.  

# Dependencies   
Tailwindcss 3.4.17  
React 19.0.0  

# Future  
I would really like to get the ruby back end working. I need to find a better way to host the service. Most places require payment it seems to host rails sites. I would also like to put pictures onto the product cards and make the styling much better.  

# Problems  
Outside of hosting the project went by pretty smoothly. Ruby created many issues when I tried to host a mono repo though. I initially tried to host the site on fly.io which kept crashing so I scrapped it. I then tried to host it on azure which needed to dockerize my rails app which did not work for some reason. I tried to split the repo to a rails repo and react repo and that let me host the react side but not the ruby side. I ended up commiting to just use react.