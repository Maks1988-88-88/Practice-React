export function fetchData(query) {
  return fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=2&page=1`, {
    headers: new Headers({
      Authorization: "563492ad6f91700001000001972aa481984848e1a57e5f8fa48c679d"
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error" + response.statusText);
    })
    .then(data => {
      const images = data.photos.map(photo => ({
        id: photo.id,
        img: photo.src.medium,
        author: photo.photographer
      }));

      console.log(images);
      return images;
    //   this.setState({
    //     galletyItems: images
    //   });
    })
    // console.log(data))
    .catch(err => console.error(err));
}
