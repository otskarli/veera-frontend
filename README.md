# since the current front-end is out-of-date for like 2 years, we need new, now!
### https://koodivaramu.eesti.ee/veebiraamistik

#Front-end is written for this design
### https://www.figma.com/file/nNCV5kRqdRkS8MOCK1ZbqU/Veera-Design-System?node-id=5458%3A144

#How to change and build new style file
1. download
2. `yarn install` or `npm install`
3. `encore dev --watch`
4. edit what You need 
5. validate what You did by importing this style file to Your webpage
6. `encore production`
7. copy the main.css file from `public/build/css/main.css` to Your project
8. This project also supports asset versioning `public/build/manifest.json`
9. Have fun.

## frontend framework used here
https://symfony.com/doc/current/frontend.html

All the links above are found from https://veera.eesti.ee/ also, except encore, it is used for building frontend olny!