
# Details 📽
Project has been deployed [here](https://web-dev-test-alpha.vercel.app/).
The data comes from a CMS, you can play with the data over [here](https://github.com/hashtagobi1/company-cms/tree/main)

# How to run on Dev Env 💻

1. clone the repo via `git clone https://github.com/hashtagobi1/company-cms.git`
2. Install all the dependencies via `yarn install`
3. Start development server with `yarn dev` 🚀

# Dependencies 🌲


## Styling + Animation 🎨
**Chakra** is a component library that allows you to not only build quickly but have create + maintain consistent theme + brand across your site. Crucial for creating a brand identity. **Framer motion** is used to create clean physics based animation.

- Chakra
- Emotion
- Framer Motion
- React Icon
- FontSource

## CMS 
**Sanity** is an awesome CMS solution with simple config and is scalable, allowing you to work with multiple people to build quickly.

- Sanity


## API Calls 📞

I used **groq** to query the data from Sanity schema. **axios** was used to post the cart data to the api. Which returns the data in the body.

- groq
- axios



## Code Quality 🔨
**Husky** allows me to create efficient git hooks that maintain the quality of code being checked in is consistent. **Prettier** allows me to have common formatting allowing future devs to jump into the code with confidence knowing that standards are followed. **Eslint** allows me to find problems easier. **Typescript** is awesome for code management and catching errors that would other wise slow down the progress. It also allowed me to create interfaces for all the required data, thus making coding more predictable.

- eslint
- prettier
- husky
- lint-staged
- typescript


##  Time Spent ⏰
Around 30hrs


## How would you improve this code test?

I'd love to add more animation to make the site more fluid. This is great for user experience and crafting a strong brand identity. Additionally I'd fix 2 bugs. 

The overlay for the side-menu on mobile isn't clickable at the moment which is an issue.

Testing is key, especially when it comes to building applications that will be used by countless people. There are intermittent bugs on the checkout page when calculating the cost. I would've write some unit tests using Jest to ensure that the cost is calculated correctly every single render. Additionally using tools like [BrowserStack](https://www.browserstack.com/) that check cross browser compatibility all help to reach the goal of 

Finally I could have created a customer database that holds user information, cart info, transaction history etc. The [Stripe](https://stripe.com/) system in conjunction with [Postgres](https://www.postgresql.org/) would have been a great way to make that happen.


# Questions from Email 📧

## Which Browsers/Devices or Virtualisation services did you check the application in?
- Brave
- Safari

## Anything you want to tell us?
N/A

## Assumptions?
N/A

## Decisions?
See all coding decisions above.

## What you used to develop and test?
See above.

## What did you think of this test/exercise?
It was a cool exercise! It was fun building out the CMS + components.

## What did you like?
see above.

## What could be improved?
N/A

## What didn't you like?
~~using Sketch~~
