'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditFormTitleButton = function (_Component) {
  (0, _inherits3.default)(EditFormTitleButton, _Component);

  function EditFormTitleButton(props) {
    (0, _classCallCheck3.default)(this, EditFormTitleButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditFormTitleButton.__proto__ || (0, _getPrototypeOf2.default)(EditFormTitleButton)).call(this, props));

    _this.state = {
      formTitle: props.title
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EditFormTitleButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        formTitle: nextProps.title
      };
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.props.editFormTitle(this.state.formTitle);
    }
  }, {
    key: 'render',
    value: function render() {
      return [_react2.default.createElement(
        'button',
        {
          className: 'btn btn-block btn-dark',
          'data-toggle': 'modal',
          'data-target': '#editFormTitle',
          key: 'editFormTitle',
          title: 'Edit Form Title'
        },
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          'edit'
        ),
        _react2.default.createElement(
          'span',
          { className: 'icon-menu' },
          'Title'
        )
      ), _react2.default.createElement(
        'div',
        { className: 'modal fade', id: 'editFormTitle', tabIndex: '-1', key: 'editFormTitleModal' },
        _react2.default.createElement(
          'div',
          { className: 'modal-dialog bg-white' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            _react2.default.createElement(
              'div',
              { className: 'modal-header' },
              _react2.default.createElement(
                'div',
                { className: 'modal-title' },
                'Edit form title'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-body' },
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(_FieldGroup2.default, {
                  id: 'formTitle',
                  name: 'formTitle',
                  label: 'Enter title of the form',
                  onChange: this.onChange,
                  value: this.state.formTitle
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-footer' },
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-danger',
                  'data-dismiss': 'modal'
                },
                'Cancel'
              ),
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-dark',
                  onClick: this.onFormUpdate,
                  'data-dismiss': 'modal'
                },
                'Save changes'
              )
            )
          )
        )
      )];
    }
  }]);
  return EditFormTitleButton;
}(_react.Component);

EditFormTitleButton.propTypes = {
  editFormTitle: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string.isRequired
};

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { editFormTitle: _winterfellFormBuilderActions.editFormTitle })(EditFormTitleButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EditFormTitleButton, 'EditFormTitleButton', 'src/components/FormMenu/EditFormTitleButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/EditFormTitleButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/EditFormTitleButton.js');
}();

;