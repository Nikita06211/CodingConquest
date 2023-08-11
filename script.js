
const links = [
    'https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpDiKl6FuyfPyQcLNr0_3FXgOXNZA392CjbU9YCwO3mPqXWpFwfMMs2QJnPdUhT2oUhU&usqp=CAU',
    'https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp',
    'https://varconnection.files.wordpress.com/2022/10/varblog-stem-edu-inequitines-main-image-102622.jpg',
    'https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/04/Screen-Shot-2022-04-25-at-4.56.50-PM.png',
    'https://us.123rf.com/450wm/epicfail/epicfail1705/epicfail170500001/79138516-flat-style-thin-line-banner-design-of-coding.jpg?ver=6',
    'https://contentstatic.techgig.com/thumb/msid-85891309,width-460,resizemode-4/4-Super-useful-tips-to-ace-competitive-programming.jpg?61855'
  ];
  
  function selectRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    const selectedLink = links[randomIndex];
    return selectedLink;
  }
  
  let url = "https://kontests.net/api/v1/all"
  let response = fetch(url)
  response.then((v) => {
    return v.json()
  }).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (item in contests) {
      const selectedLink = selectRandomLink();
      console.log(contests[item])
      ihtml += `
                  <div class="card mx-2 my-2 bg-dark text-white" style="width: 22rem;">
                                  <img src="${selectedLink}" class="card-img-top" alt="..." style= "border: 2px solid grey">
                                  <div class="card-body">
                                          <h5 class="card-title">${contests[item].name}</h5>
                                          <p class="card-text"> Status is ${contests[item].status} </p>
                                          <p> Site: ${contests[item].site}</p>
                                          <p class="card-text"> In 24 Hours?  ${contests[item].in_24_hours} </p>
                                          <p>Starts at: ${contests[item].start_time}
                                          <p>Ends at: ${contests[item].end_time}
                                          <a href="${contests[item].url}" class="btn my-4 bg-light text-dark">Visit Contest</a>
                                  </div>
                          </div>
                  `
    }
    cards.innerHTML = ihtml
  })
  