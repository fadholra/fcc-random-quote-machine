var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      quotesData: {},
      quotesText: "",
      quotesAuthor: "" };

    _this.downloadQuotes = _this.downloadQuotes.bind(_this);
    _this.getQuotes = _this.getQuotes.bind(_this);return _this;
  }_createClass(App, [{ key: "downloadQuotes", value: function downloadQuotes()

    {var _this2 = this;
      $.getJSON(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      function (data) {
        _this2.setState({
          quotesData: data });

        //console.log(this.state.quotesData, "QuotesData");
      }).then(function () {return _this2.getQuotes();});
    } }, { key: "getQuotes", value: function getQuotes()

    {
      var newQuotes = Math.floor(Math.random() * this.state.quotesData.quotes.length);
      //console.log(this.state.quotesData.quotes.length, "length");
      console.log(newQuotes, "newQuotes");
      console.log(this.state.quotesData, "QuotesData");
      this.setState({
        quotesText: this.state.quotesData.quotes[newQuotes].quote,
        quotesAuthor: this.state.quotesData.quotes[newQuotes].author });

      //console.log(this.state.quotesAuthor);
    } }, { key: "componentDidMount", value: function componentDidMount()

    {
      this.downloadQuotes();
    } }, { key: "render", value: function render()

    {
      var tweetURL = 'https://twitter.com/intent/tweet?' +
      'hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + this.state.quotesText + '" -' + this.state.quotesAuthor);
      return (
        React.createElement("div", { id: "quote-box" },
          React.createElement("div", { id: "text" },
            React.createElement("i", { className: "fa fa-quote-left", style: { color: "#16a085" } }, " "),
            React.createElement("span", { className: "text-text" }, this.state.quotesText)),

          React.createElement("div", { id: "author" },
            React.createElement("span", null, "- ", this.state.quotesAuthor)),

          React.createElement(Button, { newQuotes: this.getQuotes, tweet: tweetURL })));


    } }]);return App;}(React.Component);var


Button = function (_React$Component2) {_inherits(Button, _React$Component2);function Button() {_classCallCheck(this, Button);return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));}_createClass(Button, [{ key: "render", value: function render()
    {
      var x = this.props.newQuotes;
      var y = this.props.tweet;
      return (
        React.createElement("div", { className: "buttons" },
          React.createElement("a", { href: y, target: "_blank", className: "button", id: "tweet-quote", title: "tweet!" }, React.createElement("i", { className: "fa fa-twitter" })),
          React.createElement("button", { className: "button", id: "new-quote", title: "new Quotes", onClick: x }, "New Quotes")));


    } }]);return Button;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));