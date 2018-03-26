import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import { changeCurrentEditingField, editFormTitle } from '../../actions/winterfellFormBuilderActions';
import PageSelector from './PageSelector';
import QuestionSetSelector from './QuestionSetSelector';
import ButtonBarSelector from './ButtonBarSelector';


class FieldSelectorContainer extends Component {
  static propTypes = {
    editFormTitle: PropTypes.func.isRequired,
    changeCurrentEditingField: PropTypes.func.isRequired,
    currentQuestionPanelIndex: PropTypes.number.isRequired,
    currentQuestionSetIndex: PropTypes.number,
    currentQuestionIndex: PropTypes.number,
    questionSets: PropTypes.object,
    questionPanels: PropTypes.object,
    panelHeader: PropTypes.string,
    panelText: PropTypes.string,
    backButton: PropTypes.string,
    nextButton: PropTypes.string,
  };

  static defaultProps = {
    currentPanelId: 'Select Page',
    currentQuestionPanelIndex: 0,
    questionPanels: null,
    questionSets: null,
    panelHeader: '',
    panelText: '',
    backButton: '',
    nextButton: '',
    currentQuestionSetIndex: 0,
    currentQuestionIndex: 0,
  }

  constructor(props) {
    super(props);

    this.state = {
      currentPanel: null,
      currentQuestionSets: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.editFormTitle(this.state.formTitle);
    this.setState({ showModal: false });
  }

  render() {
    const {
      currentQuestionPanelIndex,
      questionPanels,
      questionSets,
      panelHeader,
      panelText,
      currentQuestionSetIndex,
      currentQuestionIndex,
      backButton,
      nextButton,
    } = this.props;
    const questionPanelsArray = questionPanels && questionPanels.toJS();
    const questionSetsArray = questionSets && questionSets.toJS();
    return (
      <Row>
        <Col xs={12}>
          <form>
            { typeof currentQuestionPanelIndex !== 'undefined' &&
            <PageSelector
              panelHeader={panelHeader}
              panelText={panelText}
              onClick={() => this.props.changeCurrentEditingField('page', currentQuestionSetIndex, currentQuestionIndex)}
            />
            }
            { typeof currentQuestionPanelIndex !== 'undefined' &&
              questionPanelsArray &&
              <QuestionSetSelector
                currentQuestionSets={questionPanelsArray[currentQuestionPanelIndex].questionSets}
                questionSets={questionSetsArray}
                onClick={this.props.changeCurrentEditingField}
                currentQuestionIndex={this.props.currentQuestionIndex}
              />
            }
            { typeof currentQuestionPanelIndex !== 'undefined' &&
              <ButtonBarSelector
                backButton={backButton}
                nextButton={nextButton}
                onClick={() => this.props.changeCurrentEditingField('buttons', currentQuestionSetIndex, currentQuestionIndex)}
              />
            }
          </form>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['form', 'title']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    questionPanels: state.getIn(['form', 'schema', 'questionPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    schema: state.getIn(['form', 'schema']),
    panelHeader: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelText']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    nextButton: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'button', 'text']),
    backButton: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'backButton', 'text']),
  };
}

export default connect(
  mapStateToProps,
  { changeCurrentEditingField, editFormTitle },
)(FieldSelectorContainer);
