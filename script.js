// const collapseFeatures = document.querySelectorAll(".collapse_feature");
const featuresLinks = document.querySelector(".features_links");
const describeFeature = document.querySelector(".tab_describe");

// console.log(featuresLinks.children);

// [...collapseFeatures].map((feature, i) => {
//   feature.classList.add("active");
// });
// });

const collapseButton = () => {
  const features = featuresLinks.children;

  [...features].map((item, i) => {
    item.firstElementChild.addEventListener("click", () => {
      //   console.log(describeFeature.firstElementChild);
      // //   console.log(describeFeature.lastElementChild);

      describeFeature.firstElementChild.innerHTML = `<img src="./images/illustration-features-tab-${i + 1}.svg" alt="illustration-features-tab-${i + 1}"></img>`;

      const aboutFeature = describeFeature.lastElementChild.firstElementChild;
    });
  });
};

collapseButton();
