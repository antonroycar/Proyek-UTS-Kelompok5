class CardHeader extends React.Component {
  render() {
    const {
      image
    } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")",
    };

    return /*#__PURE__*/ React.createElement("header", {
      style: style,
      id: image,
      className: "card-header"
    } /*#__PURE__*/ , React.createElement("h3", {
      className: "card-header--title"
    }, ""));
  }
}

class Button extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement("button", {
      className: "button button-primary"
    } /*#__PURE__*/ , React.createElement("i", {
      className: "fa fa-chevron-right"
    }), " Baca Selengkapnya");
  }
}

class CardBody extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div", {
        className: "card-body"
      } /*#__PURE__*/ ,
      React.createElement("p", {
        className: "date"
      }, " 184 weeks ago") /*#__PURE__*/ ,

      React.createElement("h5", null, this.props.title) /*#__PURE__*/ ,

      React.createElement("p", {
        className: "body-content"
      }, this.props.text) /*#__PURE__*/ ,

      React.createElement(Button, null)
    );
  }
}

class Card extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "article", {
        className: "col-md-4 card"
      } /*#__PURE__*/ ,
      React.createElement(CardHeader, {
        image: this.props.image
      }) /*#__PURE__*/ ,
      React.createElement(CardBody, {
        title: this.props.title,
        text: this.props.text
      }) /*#__PURE__*/
    );
  }
}

class CardList extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div", {
        className: "row"
      } /*#__PURE__*/ ,
      React.createElement(Card, {
        image: "https://i.postimg.cc/Bb1X6ww9/Basket.jpg",
        title: "Juara 1 Basket Putri",
        text: "Hasil Akhir dari KM Cup 2019 pada olahraga Basket Putri berhasil diperoleh oleh HIMASTI dengan peringkat 1."
      }) /*#__PURE__*/ ,
      React.createElement(Card, {
        image: "https://i.postimg.cc/44h6n8cx/Futsal.jpg",
        title: "Juara 2 Futsal Putri",
        text: "Hasil Akhir dari KM Cup 2019 pada olahraga Futsal Putri berhasil diperoleh oleh HIMASTI dengan peringkat 2."
      }) /*#__PURE__*/ ,
      React.createElement(Card, {
        image: "https://i.postimg.cc/3x9pzVsn/tenis.jpg",
        title: "Juara 3 Single Tennis Meja Putri",
        text: "Hasil Akhir dari KM Cup 2019 pada olahraga Single Tennis Putri berhasil diperoleh oleh HIMASTI dengan peringkat 3."
      }) /*#__PURE__*/ ,
    );
  }
};

class App extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div", {
        className: ""
      } /*#__PURE__*/ ,
      React.createElement(CardList, null)
    );
  }
}

ReactDOM.render( /*#__PURE__*/ React.createElement(App, null), document.getElementById("mycard"));