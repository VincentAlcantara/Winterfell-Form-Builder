'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactSortableHoc = require('react-sortable-hoc');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _PageSelector = require('./PageSelector');

var _PageSelector2 = _interopRequireDefault(_PageSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageSortSelector = function (_Component) {
  (0, _inherits3.default)(PageSortSelector, _Component);

  function PageSortSelector(props) {
    (0, _classCallCheck3.default)(this, PageSortSelector);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PageSortSelector.__proto__ || (0, _getPrototypeOf2.default)(PageSortSelector)).call(this, props));

    _this.onSortEnd = function () {
      return _this.__onSortEnd__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      items: _this.props.formPanels.map(function (formPanel) {
        return formPanel.get('panelId');
      })
    };

    _this.onSortEnd = _this.onSortEnd.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PageSortSelector, [{
    key: '__onSortEnd__REACT_HOT_LOADER__',
    value: function __onSortEnd__REACT_HOT_LOADER__() {
      return this.__onSortEnd__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onSortEnd__REACT_HOT_LOADER__',
    value: function __onSortEnd__REACT_HOT_LOADER__(_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;

      this.setState({
        items: (0, _reactSortableHoc.arrayMove)(this.state.items, oldIndex, newIndex)
      });
      this.props.changeOrder(oldIndex, newIndex);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var SortableItem = (0, _reactSortableHoc.SortableElement)(function (_ref2) {
        var value = _ref2.value;
        return _react2.default.createElement(_PageSelector2.default, {
          panelHeader: value,
          onClick: function onClick() {
            return _this2.props.changeCurrentEditingField('page', _this2.props.currentQuestionSetIndex, _this2.props.currentQuestionIndex);
          }
        });
      });

      var SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
        var items = _ref3.items;
        return _react2.default.createElement(
          'ul',
          null,
          items.map(function (value, index) {
            return _react2.default.createElement(SortableItem, { key: 'item-' + index, index: index, value: value });
          })
        );
      });
      console.log('SortableList', SortableList);
      return _react2.default.createElement(SortableList, { items: this.state.items, onSortEnd: this.onSortEnd });
    }
  }]);
  return PageSortSelector;
}(_react.Component);

PageSortSelector.propTypes = {
  changeOrder: _propTypes2.default.func.isRequired,
  changeCurrentEditingField: _propTypes2.default.func.isRequired,
  formPanels: _propTypes2.default.object.isRequired,
  currentQuestionSetIndex: _propTypes2.default.number.isRequired,
  currentQuestionIndex: _propTypes2.default.number.isRequired
};


function mapStateToProps(state) {
  return {
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { changeOrder: _winterfellFormBuilderActions.changeOrder, changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField })(PageSortSelector);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageSortSelector, 'PageSortSelector', 'src/components/FieldSelector/PageSortSelector.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FieldSelector/PageSortSelector.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldSelector/PageSortSelector.js');
}();

;