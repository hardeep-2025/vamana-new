const { default: axios } = require("axios");

require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

async function generateSitemap() {
    // return new Sitemap(router)
    //   .build("https://vamanaresidences.com")
    //   .save("./public/sitemap.xml");

  try {
      const posts = await axios.get(`https://vamanaresidences.com/api/blog-list.php`)
      let idMap = [];
  
      for (var i = 0; i < posts.data.length; i++) {
        idMap.push({ url: posts.data[i].url });
      }
  
      const paramsConfig = {
        "/blog/:url": idMap,
      };
  
      return new Sitemap(router)
        .applyParams(paramsConfig)
        .build("https://vamanaresidences.com")
        .save("./public/sitemap.xml");
    } catch (e) {
      console.log(e);
    }
}

generateSitemap();
