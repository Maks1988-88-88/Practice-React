import React, { Component } from 'react';
import Gallery from "../Gallery";
import SearchForm from "../SearchForm";
// import {fetchData} from '../../API';

class GalleryContainer extends Component {
  state = {
    galletyItems: []
  };

  handleFormSubmit = query => {
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=2&page=1`, {
      headers: new Headers({
        Authorization:
          "563492ad6f91700001000001972aa481984848e1a57e5f8fa48c679d"
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

        this.setState({
          galletyItems: images
        });
      })
      // console.log(data))
      .catch(err => console.error(err));
  };

    // handleFormSubmit = query => {
    //   fetchData(query).then(data => {
    //     this.setState({
    //       galletyItems: data
    //     });
    //   });
    // };

//   componentWillMount = query => {
//     fetchData('cat').then(data => {
//       this.setState({
//         galletyItems: data
//       });
//     });
//   };

  componentWillMount() {
    fetch("https://api.pexels.com/v1/search?query=cat&per_page=2&page=1", {
      headers: new Headers({
        Authorization:
          "563492ad6f91700001000001972aa481984848e1a57e5f8fa48c679d"
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

        this.setState({
          galletyItems: images
        });
      })
      // console.log(data))
      .catch(err => console.error(err));
  }
  render() {
    const { galletyItems } = this.state;
    return (
      <div>
        <SearchForm getImages={this.handleFormSubmit} />
        <Gallery items={galletyItems} />
      </div>
    );
  }
}


export default GalleryContainer;
