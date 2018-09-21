import React from "react";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Videos: ""
    };
  }
  render() {
    return (
      <div>

        <div>
          <iframe
            className="y"
            width="400"
            height="315"
            src="https://www.youtube.com/embed/z53dMmyX5XQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div>
          <iframe
            width="400"
            height="315"
            src="https://www.youtube.com/embed/z53dMmyX5XQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default Videos;
