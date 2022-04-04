const featureDetails = [
  {
    id: 1,
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: 2,
    title: "Intelligent search",
    text: "Our powerful search feature will help find saved sites in no time at all. No need to trawl through all of your bookmarks",
  },
  {
    id: 3,
    title: "Share your bookmarks",
    text: "Easily share ypur bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const featuresLinks = document.querySelector(".features_links");
const describeFeature = document.querySelector(".tab_describe");

const collapseButton = () => {
  const features = featuresLinks.children;

  [...features].map((item, i) => {
    item.firstElementChild.addEventListener("click", () => {
      describeFeature.firstElementChild.innerHTML = `<img src="./images/illustration-features-tab-${i + 1}.svg" alt="illustration-features-tab-${i + 1}"></img>`;

      const aboutFeature = describeFeature.lastElementChild.firstElementChild;

      // variable untuk title dan text di feature
      const heading = aboutFeature.firstElementChild;
      const paragraph = aboutFeature.children[1];

      console.log(featureDetails[i].title);
      console.log(featureDetails[i].text);

      heading.innerHTML = featureDetails[i].title;
      paragraph.innerHTML = featureDetails[i].text;
    });
  });
};

collapseButton();
