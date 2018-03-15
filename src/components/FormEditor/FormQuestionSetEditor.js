import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FormQuestionEditor } from './FormQuestionEditor';

export const FormQuestionSetEditor = (props) => {
  const { currentQuestionSets, questionSets, onClick } = props;

  const displayQuestionSet = () => currentQuestionSets.map(
    currentQuestionSet => (
      questionSets.map(
        (questionSet, questionSetIndex) => {
          if (currentQuestionSet.questionSetId === questionSet.questionSetId) {
            return (
              <div>
                <Button
                  className="winterfell-field-editor btn-block"
                  onClick={() => onClick('questionSet', questionSetIndex)}
                >
                  <div>
                    <h4>{questionSet.questionSetHeader}</h4>
                    <p>{questionSet.questionSetText}</p>
                  </div>
                </Button>
                <FormQuestionEditor
                  questionSetIndex={questionSetIndex}
                  questions={questionSet.questions}
                  onClick={onClick}
                />
              </div>
            );
          }
          return null;
        },
        )
      ),
    );

  return (
    <div>
      {displayQuestionSet()}
    </div>
  );
};

FormQuestionSetEditor.propTypes = {
  onClick: PropTypes.func.isRequired,
  questionSets: PropTypes.array,
  currentQuestionSets: PropTypes.array,
};

FormQuestionSetEditor.defaultProps = {
  questionSetIndex: 0,
  questionSets: null,
  currentQuestionSets: null,
};

export default FormQuestionSetEditor;
