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

var _SelectInput = require('../InputTypes/SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

var _constants = require('../../common/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddQuestionSetButton = function (_Component) {
  (0, _inherits3.default)(AddQuestionSetButton, _Component);

  function AddQuestionSetButton(props) {
    (0, _classCallCheck3.default)(this, AddQuestionSetButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddQuestionSetButton.__proto__ || (0, _getPrototypeOf2.default)(AddQuestionSetButton)).call(this, props));

    _this.state = {
      showModal: false,
      questionSetId: '',
      questionSetHeader: '',
      questionSetText: '',
      question: '',
      questionText: '',
      questionType: ''
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSelect = _this.onSelect.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AddQuestionSetButton, [{
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'onSelect',
    value: function onSelect(type) {
      this.setState({ questionType: type });
    }
  }, {
    key: 'onClose',
    value: function onClose(e) {
      e.preventDefault();
      this.setState({ showModal: true });
    }
  }, {
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.props.addQuestionSet(this.props.currentPanelId, this.state.questionSetId, this.state.questionSetHeader, this.state.questionSetText, this.state.question, this.state.questionText, this.state.questionType);
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return [_react2.default.createElement(
        'button',
        {
          type: 'button',
          className: 'btn btn-block btn-dark',
          disabled: !this.props.currentPanelId || this.props.currentPanelId === 'Select Page',
          'data-toggle': 'modal',
          'data-target': '#addQuestionSet',
          key: 'addQuestionSet',
          tittle: 'Add question'
        },
        'Add question set'
      ), _react2.default.createElement(
        'div',
        { className: 'modal fade', id: 'addQuestionSet', tabIndex: '-1', key: 'addQuestionSetModal' },
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
                'Add a new question set'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-body' },
              _react2.default.createElement(_FieldGroup2.default, {
                id: 'questionSetId',
                name: 'questionSetId',
                label: 'Question Set ID',
                onChange: this.onChange,
                placeholder: '(optional)',
                value: this.state.questionSetId,
                key: 'questionSetId'
              }),
              _react2.default.createElement(_FieldGroup2.default, {
                id: 'questionSetHeader',
                name: 'questionSetHeader',
                label: 'Question Set Title',
                onChange: this.onChange,
                placeholder: '',
                value: this.state.questionSetHeader,
                key: 'questionSetHeader'
              }),
              _react2.default.createElement(_FieldGroup2.default, {
                id: 'questionSetText',
                name: 'questionSetText',
                label: 'Enter Question Set Description',
                onChange: this.onChange,
                placeholder: '',
                value: this.state.questionSetText,
                key: 'questionSetText'
              }),
              _react2.default.createElement(_FieldGroup2.default, {
                id: 'question',
                name: 'question',
                label: 'Enter Question',
                onChange: this.onChange,
                placeholder: '',
                value: this.state.question,
                key: 'question'
              }),
              _react2.default.createElement(_FieldGroup2.default, {
                id: 'questionText',
                name: 'questionText',
                label: 'Enter Question Text',
                onChange: this.onChange,
                placeholder: '',
                value: this.state.questionText,
                key: 'questionText'
              }),
              _react2.default.createElement(
                'label',
                { htmlFor: 'questionType' },
                'Select Question Type'
              ),
              _react2.default.createElement(_SelectInput2.default, {
                id: 'questionType',
                labelId: 'questionType',
                options: _constants.INPUT_TYPE_OPTIONS,
                onSelect: this.onSelect,
                value: this.state.questionType,
                key: 'questionType'
              })
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
  return AddQuestionSetButton;
}(_react.Component);

AddQuestionSetButton.propTypes = {
  addQuestionSet: _propTypes2.default.func.isRequired,
  currentPanelId: _propTypes2.default.string
};

AddQuestionSetButton.defaultProps = {
  currentPanelId: ''
};

function mapStateToProps(state) {
  return {
    currentPanelId: state.getIn(['form', 'currentPanelId'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { addQuestionSet: _winterfellFormBuilderActions.addQuestionSet })(AddQuestionSetButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AddQuestionSetButton, 'AddQuestionSetButton', 'src/components/FormMenu/AddQuestionSetButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/AddQuestionSetButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/AddQuestionSetButton.js');
}();

;