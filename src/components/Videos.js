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
        width="400"
        height="330"
        src="https://www.youtube.com/embed/AeLYre_yCA8"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
        <iframe
        width="400"
        height="330"
        src="https://www.youtube.com/embed/8hGhD8PK6aE"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
          <iframe
          width="400"
          height="330"
          src="https://www.youtube.com/embed/P9zu6LsO-w4"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />


        </div>
        <div>
          <iframe
            width="400"
            height="330"
            src="https://www.youtube.com/embed/tADnQnyqhx0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />

           <iframe
            width="400"
            height="330"
            src="https://www.youtube.com/embed/-Jg7I_zFNXw"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
            <iframe
              width="400"
              height="330"
              src="https://www.youtube.com/embed/TgDtLHULmWg"
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
