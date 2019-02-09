'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('app.js is running!');

// JSX = JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hello Indonesia'
  ),
  React.createElement(
    'p',
    null,
    'Indecisionn App by Riko Pernando'
  )
);

var todos = ['Write Code', 'Learn Code', 'Deploy React On Server', 'Breakfast'];

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' My Todo todayssss '
  ),
  React.createElement(
    'ol',
    null,
    todos.map(function (todo, key) {
      return React.createElement(
        'li',
        { key: key },
        todo
      );
    })
  )
);

// events & attribute
var count = 0;

var addCount = function addCount() {
  count++;
  console.log('addCount', count);
  reactCounterApp();
};

var minCount = function minCount() {
  count--;
  console.log('minCount');
  reactCounterApp();
};

var resetCount = function resetCount() {
  count = 0;
  console.log('resetCount');
  reactCounterApp();
};

var reactCounterApp = function reactCounterApp() {

  var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      ' Count : ',
      count,
      ' '
    ),
    React.createElement(
      'button',
      { onClick: addCount },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minCount },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetCount },
      'reset'
    )
  );
};

//reactCounterApp()
//

var CounterApp = function (_React$Component) {
  _inherits(CounterApp, _React$Component);

  function CounterApp() {
    _classCallCheck(this, CounterApp);

    var _this = _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(CounterApp, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (prevState) {
        console.log(prevState);
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        console.log(prevState);
        return {
          count: prevState.count - 1
        };
      });
      console.log('handleMinusOne');
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      console.log('handleReset');
    }
  }, {
    key: 'render',
    value: function render() {
      var count = this.state.count;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          ' Counter : ',
          count,
          ' '
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        )
      );
    }
  }]);

  return CounterApp;
}(React.Component);

ReactDOM.render(React.createElement(CounterApp, null), document.getElementById('app'));
